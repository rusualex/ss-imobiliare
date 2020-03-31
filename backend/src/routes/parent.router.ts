import * as Router from 'koa-router';


export class ParentRouter {
  getRouter(): Router {
    const router: Router = new Router();

    return router;
  }
}
