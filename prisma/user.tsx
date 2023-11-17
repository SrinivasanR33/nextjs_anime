import { UpdateUserPrisma, UserPrisma } from "@/app/commen/CommenTypeDefination"
import prisma from "./prisma"

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({})
    return users
}
export const createUser = async (data1: UserPrisma) => {
    const users = await prisma.user.create({ data: data1 })
    return users
}