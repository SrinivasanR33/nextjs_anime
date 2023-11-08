export const getUserAPI = async () => {
    const UserData = await fetch('http://localhost:3000/api/user', { cache: "no-store" })
    // const res = await UserData.json()
    return UserData
}
interface datavalue {
    name: string;
    email: string;
    number: number
}

export const CreateUserAPI = async (req: datavalue) => {
    console.log(req, req, JSON.stringify(req))
    const UserData = await fetch('http://localhost:3000/api/user', { cache: "no-store", method: 'post', body: JSON.stringify(req) })
    // const res = await UserData.json()
    return UserData
}