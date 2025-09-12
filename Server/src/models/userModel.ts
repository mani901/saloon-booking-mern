// src/models/user.model.ts
import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    _id : string,
  name: string;
  email: string;
  password?: string;
  role: "user" | "admin";
  provider: "local" | "google";
  googleId?: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // optional for Google
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, enum: ["local", "google"], default: "local" },
    googleId: { type: String },
  },
  { timestamps: true }
);

 export const UserModel = model<IUser>("User", userSchema);

