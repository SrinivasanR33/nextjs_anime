import { URL } from "../commen/CommenName"
import { payloadPaginationData } from "../commen/CommenTypeDefination"

export const UploadImageList = async (req: payloadPaginationData) => {
    // console.log(req, req, JSON.stringify(req))
    const UploadData = await fetch(`${URL}/imageList`, { cache: "no-store", method: "post", body: JSON.stringify(req) })
    const res = await UploadData.json()
    return res
}