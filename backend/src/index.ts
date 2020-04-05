import * as config from 'config';
import { App } from './app';
import { LoginRouter } from './routes/login.router';
import { ParentRouter } from './routes/parent.router';
import { ApartmentRouter } from './routes/apartment.router';
import { UserRouter } from './routes/user.router';
import { HashService } from './services/hash.service';
import { LoginService } from './services/login.service';
import { ResponseWrapperService } from './services/response-wrapper.service';
import { ApartmentService } from './services/apartment.service';
import { UserService } from './services/user.service';

const parentRouter: ParentRouter = new ParentRouter();
const userRouter: UserRouter = new UserRouter();
const apartmentRouter: ApartmentRouter = new ApartmentRouter();
const loginRouter: LoginRouter = new LoginRouter();
const userService: UserService = new UserService();
const apartmentService: ApartmentService = new ApartmentService();
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
  apartmentRouter,
  loginRouter,
  userService,
  apartmentService,
  responseWrapperService,
  loginService,
  hashService
};

app.init();
