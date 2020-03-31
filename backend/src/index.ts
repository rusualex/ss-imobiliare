import * as config from 'config';
import { App } from './app';
import { ParentRouter } from './routes/parent.router';
import { ResponseWrapperService } from './services/response-wrapper.service';

const parentRouter: ParentRouter = new ParentRouter();
const responseWrapperService: ResponseWrapperService = new ResponseWrapperService();
const app: App = new App();


export {
  app,
  parentRouter,
  responseWrapperService,
};

app.init();
