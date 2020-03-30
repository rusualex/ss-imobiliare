import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';
import { CategoryEnum } from './category.enum';
import { TrainingStatusEnum } from './training-status.enum';
import { IUser } from './user.model';

export interface ITraining extends Document {
  _id: string;
  title: string;
  description: string;
  category: CategoryEnum;
  attachments: string;
  dateTime: Date;
  usersLimit: number;
  attendingUsers: IUser[];
  trainers: IUser[];
  status: TrainingStatusEnum;
}

const TrainingSchema: Schema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {type: Schema.Types.Mixed},
  attachments: {type: String},
  dateTime: {type: Date},
  usersLimit: {type: Number, required: true},
  attendingUsers: [{type: Schema.Types.Mixed}],
  trainers: [{type: Schema.Types.Mixed}],
  status: {type: Schema.Types.Mixed, required: true}
});

export const Training: Model<ITraining> = mongoose.model<ITraining>('Training', TrainingSchema);
