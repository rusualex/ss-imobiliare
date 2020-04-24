"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apartment_model_1 = require("../model/apartment.model");
class ApartmentService {
    async getApartments(filter) {
        return apartment_model_1.Apartment.find(filter);
    }
    async getApartmentById(apartmentId) {
        return apartment_model_1.Apartment.findOne({ _id: apartmentId });
    }
    async saveApartment(apartment) {
        return new apartment_model_1.Apartment(apartment).save();
    }
    async updateApartment(apartment) {
        return apartment_model_1.Apartment.updateOne({ _id: apartment._id }, { $set: apartment });
    }
    async deleteApartmentById(apartmentId) {
        return apartment_model_1.Apartment.deleteOne({ _id: apartmentId });
    }
}
exports.ApartmentService = ApartmentService;
//# sourceMappingURL=apartment.service.js.map