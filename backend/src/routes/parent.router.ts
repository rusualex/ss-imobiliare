import Router from 'koa-router';

import { apartmentRouter, loginRouter, userRouter } from '../';

export class ParentRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.use('/apartments', apartmentRouter.getRouter().routes());
    router.use('/users', userRouter.getRouter().routes());
    router.use('/login', loginRouter.getRouter().routes());

    return router;
  }
}
