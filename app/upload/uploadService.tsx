import { URL } from "../commen/CommenName"
import { UploadType } from "../commen/CommenTypeDefination"

export const UploadImage = async (req: UploadType) => {
    // console.log(req, req, JSON.stringify(req))
    const UploadData = await fetch(`${URL}/upload`, { cache: "no-store", method: "post", body: JSON.stringify(req) })
    const res = await UploadData.json()
    return res
}