import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from "validator";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 10,
  },
  lastName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "invalid email sent {VALUE}"],
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    lowercase: true,
  },
});

export const User = model("User", userSchema);
