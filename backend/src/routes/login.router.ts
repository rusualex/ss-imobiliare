import { Context } from 'koa';
import * as Router from 'koa-router';
import { loginService, responseWrapperService } from '../index';
import { IAuth } from '../model/auth.model';
import { IResetBody } from '../model/reset.model';

export class LoginRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.post('/', async (ctx: Context) => {
      try {
        const auth: IAuth = await loginService.login(ctx.request.body.email, ctx.request.body.password);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(auth);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.post('/forgot-password', async (ctx: Context) => {
      try {
        const body: IResetBody = ctx.request.body;
        const userExists: boolean = await loginService.resetPassword(body);
        if (userExists) {
          ctx.status = 200;
          ctx.body = responseWrapperService.wrapOk('Reset password email sent.');
        } else {
          ctx.status = 404;
          ctx.body = responseWrapperService.wrapException('User not found.');
        }
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    return router;
  }
}
