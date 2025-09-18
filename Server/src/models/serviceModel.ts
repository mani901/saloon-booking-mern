import { Schema, model, Document } from 'mongoose';
import {ServiceInput} from "../schemas/serviceSchema"
export interface IService extends ServiceInput, Document {
 _id : string,
  createdAt?: Date;
  updatedAt?: Date;
}


const serviceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);


export const ServiceModel = model<IService>('Service', serviceSchema);

