"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const index_1 = require("../index");
const auth_1 = require("../middleware/auth");
class ApartmentRouter {
    getRouter() {
        const router = new koa_router_1.default();
        router.get('/', async (ctx) => {
            try {
                const filter = ctx.request.query;
                const response = await index_1.apartmentService.getApartments(filter);
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
                const apartmentId = ctx.params.id;
                const response = await index_1.apartmentService.getApartmentById(apartmentId);
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
                const response = await index_1.apartmentService.saveApartment(ctx.request.body);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.put('/', auth_1.auth, async (ctx) => {
            try {
                const response = await index_1.apartmentService.updateApartment(ctx.request.body);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        router.delete('/:id', auth_1.auth, async (ctx) => {
            try {
                const apartmentId = ctx.params.id;
                const response = await index_1.apartmentService.deleteApartmentById(apartmentId);
                ctx.status = 200;
                ctx.body = index_1.responseWrapperService.wrapOk(response);
            }
            catch (e) {
                ctx.status = 500;
                ctx.body = index_1.responseWrapperService.wrapException(e);
            }
        });
        return router;
    }
}
exports.ApartmentRouter = ApartmentRouter;
//# sourceMappingURL=apartment.router.js.map