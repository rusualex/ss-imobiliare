"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const config = __importStar(require("config"));
const jwt = __importStar(require("jsonwebtoken"));
const index_1 = require("../index");
async function auth(ctx, next) {
    const token = ctx.get('x-auth-token');
    if (!token && !token.trim()) {
        ctx.status = 401;
        ctx.body = 'Access denied. No token provided';
    }
    else {
        try {
            const id = jwt.verify(token, config.get('jwtPrivateKey'));
            const user = await index_1.userService.getUserById(id);
            if (user) {
                await next();
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
exports.auth = auth;
//# sourceMappingURL=auth.js.map