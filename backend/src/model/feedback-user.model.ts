import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export interface IFeedbackUser extends Document { 
    _id: string;
    userName: string;
    nota: number;
    descriere: string;
}

const FeedbackUserSchema: Schema = new Schema({
    userName: { type: String, required: true },
    nota: { type: Number, required: true },
    descriere: { type: String }
});

export const FeedbackUser: Model<IFeedbackUser> = mongoose.model<IFeedbackUser>('FeedbackUser', FeedbackUserSchema);
