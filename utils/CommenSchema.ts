import { connect } from "./connection";

export async function connectAdminUser() {
  const { Adminuser } = await connect();
  return Adminuser;
}
export async function connectUpload() {
  const { Upload } = await connect();
  return Upload;
}
export async function connectUser() {
  const { users } = await connect();
  return users;
}
export async function connectUploadMaster() {
  const { UploadMasters } = await connect();
  return UploadMasters;
}
export async function connectRequest() {
  const { Request } = await connect();
  return Request;
}
