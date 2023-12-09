import { URL } from "../commen/CommenName"

export const UploadImageList = async (req: string) => {
    // console.log(req, req, JSON.stringify(req))
    const payload = { type: req }
    const UploadData = await fetch(`${URL}/imageList`, { cache: "no-store", method: "post", body: JSON.stringify(payload) })
    const res = await UploadData.json()
    console.log(res, UploadData, "res")
    return res
}