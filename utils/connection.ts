//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";
import { UserData } from "./types";

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { DATABASE_URL } = process.env;

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err));
  console.log("Mongoose Connection Established");

  // OUR User SCHEMA
  const UserSchema = new mongoose.Schema({
    email: String,
    number: String,
    isAdmin: Boolean,
    password: String,
    name: String,
  });
  const UploadSchema = new mongoose.Schema(
    {
      type: String,
      secureUrl: String,
      publicId: String,
      uploadImagInfo: Object,
    },
    {
      timestamps: true,
    }
  );
  // OUR User MODEL
  const Adminuser =
    mongoose.models.Adminuser ||
    mongoose.model<UserData>("Adminuser", UserSchema);
  const Upload =
    mongoose.models.Upload || mongoose.model("Upload", UploadSchema);

  return { conn, Adminuser, Upload };
};
