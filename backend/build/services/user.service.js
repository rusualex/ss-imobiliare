"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const user_model_1 = require("../model/user.model");
class UserService {
    async getUsers(filter) {
        return user_model_1.User.find(filter);
    }
    async getUserById(userId) {
        return user_model_1.User.findOne({ _id: userId });
    }
    async getUserByUsername(username) {
        return user_model_1.User.findOne({ username });
    }
    async saveUser(user) {
        user.password = await index_1.hashService.encrypt(user.password);
        return new user_model_1.User(user).save();
    }
    async updateUser(user) {
        const currentUser = await this.getUserById(user._id);
        const samePassword = user.password === currentUser.password;
        if (!samePassword) {
            user.password = await index_1.hashService.encrypt(user.password);
        }
        // await apartmentService.updateNestedUsers(user);
        return user_model_1.User.updateOne({ _id: user._id }, { $set: user });
    }
    async deleteUserById(userId) {
        // await apartmentService.deleteNestedUsers(userId);
        return user_model_1.User.deleteOne({ _id: userId });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map