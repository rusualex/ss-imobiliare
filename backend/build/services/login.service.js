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
const config = __importStar(require("config"));
const jwt = __importStar(require("jsonwebtoken"));
const nodemailer = __importStar(require("nodemailer"));
const index_1 = require("../index");
class LoginService {
    async login(username, password) {
        const user = await index_1.userService.getUserByUsername(username);
        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (isValidPassword) {
                return {
                    token: jwt.sign({ _id: user._id }, config.get('jwtPrivateKey')),
                    user
                };
            }
        }
        return {
            token: '', user
        };
    }
    async resetPassword(body) {
        const user = await index_1.userService.getUserByUsername(body.resetEmail);
        if (user) {
            await nodemailer.createTestAccount();
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'academypero@gmail.com',
                    pass: 'Porsche911?'
                }
            });
            try {
                await transporter.sendMail({
                    from: 'academypero@gmail.com',
                    to: user.email,
                    subject: 'Reset Password',
                    text: `Access the following link to reset your password: ${body.resetURL}/` + jwt.sign({
                        _id: user._id,
                    }, config.get('jwtPrivateKey'))
                });
            }
            catch (e) {
                return false;
            }
            return true;
        }
        return false;
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map