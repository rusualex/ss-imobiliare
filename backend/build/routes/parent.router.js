"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const __1 = require("../");
class ParentRouter {
    getRouter() {
        const router = new koa_router_1.default();
        router.use('/apartments', __1.apartmentRouter.getRouter().routes());
        router.use('/users', __1.userRouter.getRouter().routes());
        router.use('/login', __1.loginRouter.getRouter().routes());
        return router;
    }
}
exports.ParentRouter = ParentRouter;
//# sourceMappingURL=parent.router.js.map