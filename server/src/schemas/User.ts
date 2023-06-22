import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  userId: string;
  password: string;
}

const userSchema: Schema = new Schema({
  userId: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
