import { URL } from "../commen/CommenName";
import { videopayload } from "../commen/CommenTypeDefination";

export const UploadVideoList = async (req: videopayload) => {
  // console.log(req, req, JSON.stringify(req))

  const UploadData = await fetch(`${URL}/videoList`, {
    cache: "no-store",
    method: "post",
    body: JSON.stringify(req),
  });
  const res = await UploadData.json();
  console.log(res, UploadData, "res");
  return res;
};
