import { URL } from "@/app/commen/CommenName"
import { datavalue } from "@/app/commen/CommenTypeDefination"


export const getUserAPI = async () => {
    const UserData = await fetch(`${URL}/user`, { cache: "no-store" })
    // const res = await UserData.json()
    return UserData
}

export const CreateUserAPI = async (req: datavalue) => {
    console.log(req, req, JSON.stringify(req))
    const UserData = await fetch(`${URL}/user`, { cache: "no-store", method: 'post', body: JSON.stringify(req) })
    // const res = await UserData.json()
    return UserData
}