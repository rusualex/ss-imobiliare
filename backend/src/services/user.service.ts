import { hashService } from '../index';
import { IMongoResponse } from '../model/mongo-response.model';
import { IUser, User } from '../model/user.model';

export class UserService {
  async getUsers(filter: object): Promise<IUser[]> {
    return User.find(filter);
  }

  async getUserById(userId: string): Promise<IUser> {
    return User.findOne({ _id: userId }) as any as IUser;
  }

  async getUserByUsername(username: string): Promise<IUser> {
    return User.findOne({ username }) as any as IUser;
  }

  async saveUser(user: IUser): Promise<IUser> {
    user.password = await hashService.encrypt(user.password);

    return new User(user).save();
  }

  async updateUser(user: IUser): Promise<IMongoResponse> {
    const currentUser: IUser = await this.getUserById(user._id);
    const samePassword: boolean = user.password === currentUser.password;

    if (!samePassword) {
      user.password = await hashService.encrypt(user.password);
    }

    // await apartmentService.updateNestedUsers(user);

    return User.updateOne({ _id: user._id }, { $set: user });
  }

  async deleteUserById(userId: string): Promise<IMongoResponse> {
    // await apartmentService.deleteNestedUsers(userId);

    return User.deleteOne({ _id: userId });
  }
}
