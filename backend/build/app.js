"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_cors_1 = __importDefault(require("koa-cors"));
const koa_router_1 = __importDefault(require("koa-router"));
const mongoose_1 = __importDefault(require("mongoose"));
const _1 = require("./");
const admin_1 = require("./middleware/admin");
const auth_1 = require("./middleware/auth");
const config_1 = __importDefault(require("config"));
(async () => {
    const port = config_1.default.get('PORT');
    const app = new koa_1.default();
    const router = new koa_router_1.default().use(_1.parentRouter.getRouter().routes());
    const dbURL = config_1.default.get('DB');
    console.log('db', dbURL);
    app.use(koa_cors_1.default());
    app.use(koa_bodyparser_1.default());
    app.use(router.routes());
    app.use(auth_1.auth);
    app.use(admin_1.admin);
    app.listen(port);
    mongoose_1.default.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        // tslint:disable-next-line: no-console
        .then(() => console.log('** Connected to MongoDB **'))
        // tslint:disable-next-line: no-console
        .catch((err) => console.error('** Could not connect to MongoDB **', err));
    // tslint:disable-next-line: no-console
    console.log(`** App running on port ${port} **`);
})();
//# sourceMappingURL=app.js.map