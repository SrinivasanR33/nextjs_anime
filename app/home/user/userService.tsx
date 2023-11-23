import { URL } from "@/app/commen/CommenName"
import { datavalue } from "@/app/commen/CommenTypeDefination"
import { setLoadingState } from "@/redux/actions/masterSlice"
import { getUserList } from "@/redux/actions/userSlice"
import { store } from "@/redux/store/store"


export const getUserAPI = async () => {
    store.dispatch(getUserList([]))
    store.dispatch(setLoadingState(true))
    const UserData = await fetch(`${URL}/user`, { cache: "no-store" })
    const res = await UserData.json()
    if (res) {
        store.dispatch(setLoadingState(false))
        store.dispatch(getUserList(res))
    }
    return UserData
}

export const CreateUserAPI = async (req: datavalue, type: string) => {
    // console.log(req, req, JSON.stringify(req))
    const UserData = await fetch(`${URL}/user`, { cache: "no-store", method: type, body: JSON.stringify(req) })
    // const res = await UserData.json()
    return UserData
}
export const DeleteUserAPI = async (id: string) => {
    // console.log(req, req, JSON.stringify(req))
    const UserData = await fetch(`${URL}/user/${id}`, { cache: "no-store", method: "delete" })
    // const res = await UserData.json()
    return UserData
}