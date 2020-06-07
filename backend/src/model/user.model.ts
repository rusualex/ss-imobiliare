import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  userName: string;
  lastName: string;
  firstName: string;
  email: string;
  encrypted_password: string;
  telephone: string;
}

const UserSchema: Schema = new Schema({
  userName: { type: String, required: true },
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  encrypted_password: { type: String, required: true },
  telephone: { type: String, required: true }
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
