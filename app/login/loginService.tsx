import { store } from "@/redux/store/store"
import { LoginType, LoginTypeToken } from "./loginType"
import { URL } from "@/app/commen/CommenName"
import { AdminState, editUser } from "@/redux/actions/userSlice"
import { UserL } from "../commen/CommenTypeDefination"

export const LoginUser = async (req: LoginType) => {
    // console.log(req, req, JSON.stringify(req))
    const UserData = await fetch(`${URL}/login`, { cache: "no-store", method: "post", body: JSON.stringify(req) })
    // const res = await UserData.json()
    // const user = UserData as unknown as UserL
    console.log(UserData, "UserData")
    // store.dispatch(editUser(user))
    return UserData
}