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
  _id?: string;
  type: string;
  secureUrl: string;
  fileType: string;
  publicId: string;
  des?: string;
  uploadImagInfo: object;
}
export interface RequestList {
  _id?: string;
  requestMessage: string;
  isActive: boolean;
  userInfo: object;
}
export interface UploadMasterType {
  _id?: string;
  name: string;
  codeName: string;
  uploadId: string;
  isActive: boolean;
}
