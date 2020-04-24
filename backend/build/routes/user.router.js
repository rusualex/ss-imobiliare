"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("config"));
const jwt = __importStar(require("jsonwebtoken"));
const koa_router_1 = __importDefault(require("koa-router"));
const index_1 = require("../index");
class UserRouter {
    getRouter() {
        const router = new koa_router_1.default();
        router.get('/', async (ctx) => {
            try {
                const filter = ctx.request.query;
                const response = await index_1.userService.getUsers(filter);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.get('/:id', async (ctx) => {
            try {
                const userId = ctx.params.id;
                const response = await index_1.userService.getUserById(userId);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.post('/', async (ctx) => {
            try {
                const response = await index_1.userService.saveUser(ctx.request.body);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.put('/', async (ctx) => {
            try {
                const response = await index_1.userService.updateUser(ctx.request.body);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.delete('/:id', async (ctx) => {
            try {
                const userId = ctx.params.id;
                const response = await index_1.userService.deleteUserById(userId);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.post('/reset-password', async (ctx) => {
            try {
                const token = ctx.get('x-auth-token');
                if (!token && !token.trim()) {
                    ctx.status = 401;
                    ctx.body = 'Access denied. No token provided';
                }
                else {
                    await this.tryPasswordChange(ctx, token);
                }
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        return router;
    }
    async tryPasswordChange(ctx, token) {
        try {
            const userData = jwt.verify(token, config_1.default.get('jwtPrivateKey'));
            const user = await index_1.userService.getUserById(userData._id);
            const newPassword = ctx.request.body;
            if (user) {
                if (newPassword.password === newPassword.passwordConfirmation) {
                    user.password = newPassword.password;
                    const response = await index_1.userService.updateUser(user);
                    ctx.status = 200;
                    ctx.body = index_1.responseWrapperService.wrapOk(response);
                }
                else {
                    ctx.status = 400;
                    ctx.body = 'Password and password confirmation do not match.';
                }
            }
            else {
                ctx.status = 400;
                ctx.body = 'Invalid token.';
            }
        }
        catch (e) {
            ctx.status = 400;
            ctx.body = 'Invalid token.';
        }
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map