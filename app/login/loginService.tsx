import { LoginType, LoginTypeToken } from "./loginType"
import { URL } from "@/app/commen/CommenName"

export const Login = async (req: LoginTypeToken) => {
    // console.log(req, req, JSON.stringify(req))
    const UserData = await fetch(`${URL}/login`, { cache: "no-store", method: "post", body: JSON.stringify(req) })
    // const res = await UserData.json()
    return UserData
}