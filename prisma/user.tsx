import prisma from "./prisma"
type User = {
    id: number;
    email: string;
    name: string;
    number: number;
};
export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}
export const createUser = async (data: User) => {

    const users = await prisma.user.create({ data })
    return users
}