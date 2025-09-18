import { Schema, model, Document, Types } from 'mongoose';
import { StylistInput } from '../schemas/stylistSchema';


export interface IStylist extends StylistInput, Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  services: Types.ObjectId[];
  createdAt?: Date;
  updatedAt?: Date;
}



const stylistSchema = new Schema<IStylist>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    services: [{ type: Schema.Types.ObjectId, ref: 'Service', required: true }],
    bio: { type: String },
    experience: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const StylistModel = model<IStylist>('Stylist', stylistSchema);