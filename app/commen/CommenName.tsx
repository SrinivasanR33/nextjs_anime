import { homeImageList } from "./CommenTypeDefination"

export const companyName = "RS & Software"
export const tableName1 = "Logged Users List"
export const tableName2 = "Admin Users List"
export const formName = {
    name: 'Name',
    email: 'Email',
    number: 'number',
    password: "Password",
    isAdmin: "Admin"
}
export const URL = "http://localhost:4000/api"
export const DEFAULT_FOLDER_NAME = "uzwj6aq9"
export const CLOUD_NAME = "ddaygokti"
export const UploadArrayType = [
    {
        sno: "0", name: "default", id: "uzwj6aq9"
    },
    {
        sno: "1", name: "one piece", id: "vxq3b8ev"
    },
    {
        sno: "2", name: "Slime", id: "vxq3b8ev"
    },
    {
        sno: "3", name: "Demon", id: "vxq3b8ev"
    },
]
export const SuccessMessage = {
    defaultCreate: 'Created Successfully',
    defaultUpdate: 'Updated Successfully',
    defaultDelete: 'Deleted Successfully',
    defaultget: "List feached Successfully"
}
export const ErrorMessage = {

    defaultDelete: 'Id is required',
    defaultget: "Id is required"
}
export const statusCode = {
    ok: 200,
    create: 201,
    accepted: 202,
    badRequest: 400,
    notFound: 404,
    notAcceptable: 406
}
export const IconStyle = {
    sideBarIcon: "text-xl text-success p-2.5 bg-base-300 rounded-full",
    sideBarSubIcon: "text-xl p-2 text-success bg-base-300 rounded-full",
    navbarIcon: "text-3xl p-2"
};
export const loacalImage = {
    demon: {
        demon1: require("../../public/onepiece/onepeice.jpg"),
        demon2: require("../../public/demon/demon2.jpg")
    }
}
export const landingpageImageList: homeImageList[] = [
    { id: 1, image: loacalImage.demon.demon1 },
    { id: 2, image: loacalImage.demon.demon2 },
    { id: 3, image: loacalImage.demon.demon2 },
    { id: 4, image: loacalImage.demon.demon2 },
    { id: 5, image: loacalImage.demon.demon2 },
]
export const landingpageImageList2: homeImageList[] = [
    { id: 7, image: loacalImage.demon.demon2 },
    { id: 8, image: loacalImage.demon.demon2 },
    { id: 6, image: loacalImage.demon.demon1 },
    { id: 9, image: loacalImage.demon.demon2 },
    { id: 10, image: loacalImage.demon.demon2 },
]

export const Linkpage = {
    home: { link: "/home", label: 'Home' },
    image: { link: '/imagelist', label: 'Images' },
    video: { link: '/video', label: "Video" },
    uploadMaster: { link: '/masters/uploadMasters', label: "Upload Masters" },
    users: { link: '/home/user', label: "User" },
    upload: { link: '/upload', label: "Upload" },
    login: { link: '/api/auth/signin', label: "Login" },
}