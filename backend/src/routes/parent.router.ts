import * as Router from 'koa-router';

import { loginRouter, trainingRouter, userRouter } from '../';
import { auth } from '../middleware/auth';

export class ParentRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.use('/trainings', auth, trainingRouter.getRouter().routes());
    router.use('/users', userRouter.getRouter().routes());
    router.use('/login', loginRouter.getRouter().routes());

    return router;
  }
}
