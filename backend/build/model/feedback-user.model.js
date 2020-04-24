"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
const FeedbackUserSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    nota: { type: Number, required: true },
    descriere: { type: String }
});
exports.FeedbackUser = mongoose.model('FeedbackUser', FeedbackUserSchema);
//# sourceMappingURL=feedback-user.model.js.map