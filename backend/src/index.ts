import * as config from 'config';
import { App } from './app';
import { LoginRouter } from './routes/login.router';
import { ParentRouter } from './routes/parent.router';
import { TrainingRouter } from './routes/training.router';
import { UserRouter } from './routes/user.router';
import { HashService } from './services/hash.service';
import { LoginService } from './services/login.service';
import { ResponseWrapperService } from './services/response-wrapper.service';
import { TrainingService } from './services/training.service';
import { UserService } from './services/user.service';

const parentRouter: ParentRouter = new ParentRouter();
const userRouter: UserRouter = new UserRouter();
const trainingRouter: TrainingRouter = new TrainingRouter();
const loginRouter: LoginRouter = new LoginRouter();
const userService: UserService = new UserService();
const trainingService: TrainingService = new TrainingService();
const responseWrapperService: ResponseWrapperService = new ResponseWrapperService();
const hashService: HashService = new HashService();
const loginService: LoginService = new LoginService();
const app: App = new App();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined');
  process.exit(1);
}

export {
  app,
  parentRouter,
  userRouter,
  trainingRouter,
  loginRouter,
  userService,
  trainingService,
  responseWrapperService,
  loginService,
  hashService
};

app.init();
