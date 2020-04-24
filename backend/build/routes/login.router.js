"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const index_1 = require("../index");
class LoginRouter {
    getRouter() {
        const router = new koa_router_1.default();
        router.post('/', async (ctx) => {
            try {
                const auth = await index_1.loginService.login(ctx.request.body.username, ctx.request.body.password);
                if (auth) {
                    ctx.status = 200;
                }
                else {
                    ctx.status = 401;
                }
                ctx.body = index_1.responseWrapperService.wrapOk(auth);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.post('/forgot-password', async (ctx) => {
            try {
                const body = ctx.request.body;
                const userExists = await index_1.loginService.resetPassword(body);
                if (userExists) {
                    ctx.status = 200;
                    ctx.body = index_1.responseWrapperService.wrapOk('Reset password email sent.');
                }
                else {
                    ctx.status = 404;
                    ctx.body = index_1.responseWrapperService.wrapException('User not found.');
                }
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        return router;
    }
}
exports.LoginRouter = LoginRouter;
//# sourceMappingURL=login.router.js.map