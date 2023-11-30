import { connect } from "../utils/connection"

export const getAllUsers = async () => {
    const { Adminuser } = await connect()
    const users = await Adminuser.find({})
    return users
}
export const createUser = async (data1: any) => {
    const { Adminuser } = await connect()
    // console.log(data1, "data1")
    const users = await Adminuser.create(data1)
    return users
}