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
const ApartmentSchema = new mongoose_1.Schema({
    pictureFileName: { type: String, required: true },
    name: { type: String, required: true },
    details: { type: String },
    owner: { type: String },
    price: { type: String },
});
exports.Apartment = mongoose.model('Apartment', ApartmentSchema);
//# sourceMappingURL=apartment.model.js.map