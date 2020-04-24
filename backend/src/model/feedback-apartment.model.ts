import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export interface IFeedbackApartment extends Document {
    _id: string;
    apartmentName: string;
    nota: number;
    descriere: string;
}

const FeedbackApartmentSchema: Schema = new Schema({
    apartmentName: { type: String, required: true },
    nota: { type: Number, required: true },
    descriere: { type: String }
});

export const FeedbackApartment: Model<IFeedbackApartment> = mongoose.model<IFeedbackApartment>('FeedbackApartment', FeedbackApartmentSchema);
