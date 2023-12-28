export interface UserData {
  _id?: number;
  email: string;
  number: string;
  isAdmin: boolean;
  password: string;
  name: string;
}
export interface UserLoginData {
  _id?: number;
  email: string;
  image: string;
  emailVerified: boolean | null;
  name: string;
}
export interface UploadIamgeList {
  type: string;
  secureUrl: string;
  fileType: string;
  publicId: string;
  uploadImagInfo: object;
}
export interface UploadMasterType {
  name: string;
  codeName: string;
  uploadId: string;
  isActive: string;
}
