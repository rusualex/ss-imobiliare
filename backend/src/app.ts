import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa-cors';
import * as Router from 'koa-router';
import * as mongoose from 'mongoose';
import { parentRouter } from './';

export class App {
  app: Koa;
  router: Router;
  port: number = 8181;

  init(): void {
    this.app = new Koa();

    this.app.use(cors());

    this.router = new Router().use(parentRouter.getRouter().routes());

    this.app.use(bodyParser());

    this.app.use(this.router.routes());

    this.app.listen(this.port);

    mongoose.connect('mongodb://localhost:27017/pero-academy')
      .then(() => console.log('** Connected to MongoDB **'))
      .catch((err: Error) => console.error('** Could not connect to MongoDB **', err));

    console.log(`** App running on port ${this.port} **`);
  }
}
