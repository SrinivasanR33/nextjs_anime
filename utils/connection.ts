//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";
import {
  UploadIamgeList,
  UploadMasterType,
  UserData,
  UserLoginData,
} from "./types";
import { object } from "zod";

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
  const RequestSchema = new mongoose.Schema({
    requestMessage: String,
    userInfo: Object,
    isActive: Boolean,
  });
  const UploadSchema = new mongoose.Schema(
    {
      type: { type: String, required: true },
      secureUrl: String,
      fileType: String,
      publicId: String,
      des: String,
      uploadImagInfo: Object,
    },
    {
      timestamps: true,
    }
  );
  const UploadMasterSchema = new mongoose.Schema(
    {
      name: String,
      codeName: String,
      uploadId: String,
      isActive: Boolean,
    },
    {
      timestamps: true,
    }
  );

  // OUR User MODEL
  const users =
    mongoose.models.users || mongoose.model<UserLoginData>("users", UserSchema);
  const UploadMasters =
    mongoose.models.masters ||
    mongoose.model<UploadMasterType>("masters", UploadMasterSchema);
  const Adminuser =
    mongoose.models.Adminuser ||
    mongoose.model<UserData>("Adminuser", AdminUserSchema);
  const Upload =
    mongoose.models.Upload ||
    mongoose.model<UploadIamgeList>("Upload", UploadSchema);
  const Request =
    mongoose.models.Request ||
    mongoose.model<UploadIamgeList>("Request", RequestSchema);

  return { conn, Adminuser, Upload, Request, users, UploadMasters };
};
export const scheman = async () => {
  const { Adminuser, Upload, users, Request } = await connect();
  return { Adminuser, Upload, users, Request };
};
