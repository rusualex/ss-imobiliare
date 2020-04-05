import * as mongoose from 'mongoose';
import { Document, Model, Schema } from 'mongoose';

export interface IApartment extends Document {
  _id: string;
  pictureFileName: string;
  name: string;
  details: string;
  owner: string;
  price: string;
}

const ApartmentSchema: Schema = new Schema({
  pictureFileName: { type: String, required: true },
  name: { type: String, required: true },
  details: { type: String },
  owner: { type: String },
  price: { type: String },
});

export const Apartment: Model<IApartment> = mongoose.model<IApartment>('Apartment', ApartmentSchema);
