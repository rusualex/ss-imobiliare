import { Context } from 'koa';
import * as Router from 'koa-router';
import { responseWrapperService, apartmentService } from '../index';
import { auth } from '../middleware/auth';
import { IMongoResponse } from '../model/mongo-response.model';
import { IApartment } from '../model/apartment.model';

export class ApartmentRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.get('/', auth, async (ctx: Context) => {
      try {
        const filter: object = ctx.request.query;
        const response: IApartment[] = await apartmentService.getApartments(filter);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.get('/:id', auth, async (ctx: Context) => {
      try {
        const apartmentId: string = ctx.params.id;
        const response: IApartment = await apartmentService.getApartmentById(apartmentId);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.post('/', async (ctx: Context) => {
      try {
        const response: IApartment = await apartmentService.saveApartment(ctx.request.body);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.put('/', auth, async (ctx: Context) => {
      try {
        const response: IMongoResponse = await apartmentService.updateApartment(ctx.request.body);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.delete('/:id', auth, async (ctx: Context) => {
      try {
        const apartmentId: string = ctx.params.id;
        const response: IMongoResponse = await apartmentService.deleteApartmentById(apartmentId);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    return router;
  }
}
