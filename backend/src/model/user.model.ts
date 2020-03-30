import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';
import { UserStatus } from './user-status.model';

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  fullName: string;
  registerDate: Date;
  lastLogin: Date;
  status: UserStatus;
}

const UserSchema: Schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  fullName: {type: String, required: true},
  registerDate: {type: Date},
  lastLogin: {type: Date},
  status: {type: Schema.Types.Mixed, required: true}
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
