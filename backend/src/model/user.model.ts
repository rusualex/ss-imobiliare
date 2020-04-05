import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  lastName: string;
  firstName: string;
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
