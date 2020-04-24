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
const FeedbackApartmentSchema = new mongoose_1.Schema({
    apartmentName: { type: String, required: true },
    nota: { type: Number, required: true },
    descriere: { type: String }
});
exports.FeedbackApartment = mongoose.model('FeedbackApartment', FeedbackApartmentSchema);
//# sourceMappingURL=feedback-apartment.model.js.map