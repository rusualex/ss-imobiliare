import { Context } from 'koa';
import * as Router from 'koa-router';
import { responseWrapperService, trainingService } from '../index';
import { auth } from '../middleware/auth';
import { IMongoResponse } from '../model/mongo-response.model';
import { ITraining } from '../model/training.model';

export class TrainingRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.get('/', auth, async (ctx: Context) => {
      try {
        const filter: object = ctx.request.query;
        const response: ITraining[] = await trainingService.getTrainings(filter);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.get('/:id', auth, async (ctx: Context) => {
      try {
        const trainingId: string = ctx.params.id;
        const response: ITraining = await trainingService.getTrainingById(trainingId);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.post('/', async (ctx: Context) => {
      try {
        const response: ITraining = await trainingService.saveTraining(ctx.request.body);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.put('/', auth, async (ctx: Context) => {
      try {
        const response: IMongoResponse = await trainingService.updateTraining(ctx.request.body);
        ctx.status = 200;
        ctx.body = responseWrapperService.wrapOk(response);
      } catch (e) {
        ctx.status = 500;
        ctx.body = responseWrapperService.wrapException(e);
      }
    });

    router.delete('/:id', auth, async (ctx: Context) => {
      try {
        const trainingId: string = ctx.params.id;
        const response: IMongoResponse = await trainingService.deleteTrainingById(trainingId);
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
