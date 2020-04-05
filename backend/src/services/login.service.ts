import * as bcrypt from 'bcrypt';
import * as config from 'config';
import * as jwt from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import { userService } from '../index';
import { IAuth } from '../model/auth.model';
import { IResetBody } from '../model/reset.model';
import { IUser } from '../model/user.model';

export class LoginService {
  async login(userEmail: string, password: string): Promise<IAuth> {
    const user: IUser = await userService.getUserByEmail(userEmail);

    if (user) {
      const isValidPassword: boolean = await bcrypt.compare(password, user.password);

      if (isValidPassword) {
        await userService.updateUser(user);

        return {
          token: jwt.sign({ _id: user._id }, config.get('jwtPrivateKey')),
          user
        };
      }
    }

    return null;
  }

  async resetPassword(body: IResetBody): Promise<boolean> {
    const user: IUser = await userService.getUserByEmail(body.resetEmail);
    if (user) {
      await nodemailer.createTestAccount();

      const transporter: Mail = nodemailer.createTransport({
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
      } catch (e) {
        return false;
      }

      return true;
    }

    return false;
  }
}