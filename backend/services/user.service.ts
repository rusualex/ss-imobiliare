import { hashService, trainingService } from '../index';
import { IMongoResponse } from '../model/mongo-response.model';
import { IUser, User } from '../model/user.model';

export class UserService {
  async getUsers(filter: object): Promise<IUser[]> {
    return User.find(filter);
  }

  async getUserById(userId: string): Promise<IUser> {
    return User.findOne({_id: userId});
  }

  async getUserByEmail(userEmail: string): Promise<IUser> {
    return User.findOne({email: userEmail});
  }

  async saveUser(user: IUser): Promise<IUser> {
    user.password = await hashService.encrypt(user.password);
    user.registerDate = new Date();

    return new User(user).save();
  }

  async updateUser(user: IUser): Promise<IMongoResponse> {
    const currentUser: IUser = await this.getUserById(user._id);
    const samePassword: boolean = user.password === currentUser.password;

    if (!samePassword) {
      user.password = await hashService.encrypt(user.password);
    }

    await trainingService.updateNestedUsers(user);

    return User.updateOne({_id: user._id}, {$set: user});
  }

  async deleteUserById(userId: string): Promise<IMongoResponse> {
    await trainingService.deleteNestedUsers(userId);

    return User.deleteOne({_id: userId});
  }
}
