import * as config from 'config';
import * as jwt from 'jsonwebtoken';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { responseWrapperService, userService } from '../index';
import { IMongoResponse } from '../model/mongo-response.model';
import { INewPassword } from '../model/new-password.model';
import { IUser } from '../model/user.model';

export class UserRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.get('/', async (ctx: Context) => {
      try {
        const filter: object = ctx.request.query;
        const response: IUser[] = await userService.getUsers(filter);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.get('/:id', async (ctx: Context) => {
      try {
        const userId: string = ctx.params.id;
        const response: IUser = await userService.getUserById(userId);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.post('/', async (ctx: Context) => {
      try {
        const response: IUser = await userService.saveUser(ctx.request.body);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.put('/', async (ctx: Context) => {
      try {
        const response: IMongoResponse = await userService.updateUser(ctx.request.body);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.delete('/:id', async (ctx: Context) => {
      try {
        const userId: string = ctx.params.id;
        const response: IMongoResponse = await userService.deleteUserById(userId);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.post('/reset-password', async (ctx: Context) => {
      try {
        const token: string = ctx.get('x-auth-token');

        if (!token && !token.trim()) {
          ctx.status = 401;
          ctx.body = 'Access denied. No token provided';
        } else {
          await this.tryPasswordChange(ctx, token);
        }
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    return router;
  }

  private async tryPasswordChange(ctx: Context, token: string): Promise<void> {
    try {
      const userData: any = jwt.verify(token, config.get('jwtPrivateKey'));
      const user: IUser = await userService.getUserById(userData._id);
      const newPassword: INewPassword = ctx.request.body;

      if (user) {
        if (newPassword.password === newPassword.passwordConfirmation) {
          user.password = newPassword.password;
          const response: IMongoResponse = await userService.updateUser(user);
          ctx.status = 200;
          ctx.body = responseWrapperService.wrapOk(response);
        } else {
          ctx.status = 400;
          ctx.body = 'Password and password confirmation do not match.';
        }
      } else {
        ctx.status = 400;
        ctx.body = 'Invalid token.';
      }
    } catch (e) {
      ctx.status = 400;
      ctx.body = 'Invalid token.';
    }
  }
}
