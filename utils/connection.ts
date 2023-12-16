//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";
import { UploadIamgeList, UserData, UserLoginData } from "./types";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  // OUR User SCHEMA
  const AdminUserSchema = new mongoose.Schema({
    email: String,
    number: String,
    isAdmin: Boolean,
    password: String,
    name: String,
  });
  const UserSchema = new mongoose.Schema({
    email: String,
    image: String,
    name: String,
    emailVerified: Boolean,
  });
  const UploadSchema = new mongoose.Schema(
    {
      type: { type: String, required: true },
      secureUrl: String,
      publicId: String,
      uploadImagInfo: Object,
    },
    {
      timestamps: true,
    }
  );

  // OUR User MODEL
  const users =
    mongoose.models.users || mongoose.model<UserLoginData>("users", UserSchema);
  const Adminuser =
    mongoose.models.Adminuser ||
    mongoose.model<UserData>("Adminuser", AdminUserSchema);
  const Upload =
    mongoose.models.Upload ||
    mongoose.model<UploadIamgeList>("Upload", UploadSchema);

  return { conn, Adminuser, Upload, users };
};
