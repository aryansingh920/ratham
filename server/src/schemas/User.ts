import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  userId: string;
  password: string;
}

const userSchema: Schema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
