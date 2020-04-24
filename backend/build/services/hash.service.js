"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcrypt"));
class HashService {
    constructor() {
        this.rounds = 5;
    }
    async encrypt(password) {
        const salt = await bcrypt.genSalt(this.rounds);
        return bcrypt.hash(password, salt);
    }
}
exports.HashService = HashService;
//# sourceMappingURL=hash.service.js.map