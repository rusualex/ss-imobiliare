import * as Router from 'koa-router';

import { apartmentRouter, loginRouter, userRouter } from '../';
import { auth } from '../middleware/auth';

export class ParentRouter {
  getRouter(): Router {
    const router: Router = new Router();

    router.use('/apartments', auth, apartmentRouter.getRouter().routes());
    router.use('/users', userRouter.getRouter().routes());
    router.use('/login', loginRouter.getRouter().routes());

    return router;
  }
}
