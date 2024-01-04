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
export const uploadMasterFormName = {
    name: 'Name',
    codeName: "Code Name",
    isActive: "Active",
    uploadId: 'Upload ID'

}
export const URL = "http://localhost:4000/api"
// export const URL = "https://nextjs-anime-kappa.vercel.app/api"
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
    },
    landingPageImage: {
        entryPageImage1: require("../../public/Anime/one pieace/op1.jpg"),
        entryPageImage2: require("../../public/Anime/Bleach/bleach2.jpg"),
        entryPageImage3: require("../../public/Anime/Dragen ball/drgonball1.jpg"),
        entryPageImage4: require("../../public/Anime/Naruto/naruto1.jpg"),
        entryPageImage5: require("../../public/Anime/Demon/demon2.jpg"),
        entryPageImage6: require("../../public/Anime/ATT/att1.jpg"),
        entryPageImage7: require("../../public/Anime/black clover/blackclover2.jpg"),
        entryPageImage8: require("../../public/Anime/is it wrong to pick up dungeon/danmachi2.jpg"),
        entryPageImage9: require("../../public/Anime/jujutsu kaisen/jk1.jpg"),
        entryPageImage10: require("../../public/Anime/that time i got reincarnated as a slime/slime2.jpg"),
    },
    homePage: {
        homeimage1: require("../../public/Anime/homeimage/home2.jpg"),
        homeimage2: require("../../public/Anime/homeimage/homepage3.jpg"),
    }
}
export const landingpageImageList: homeImageList[] = [
    { id: 1, image: loacalImage.landingPageImage.entryPageImage1 },
    { id: 2, image: loacalImage.landingPageImage.entryPageImage2 },
    { id: 3, image: loacalImage.landingPageImage.entryPageImage3 },
    { id: 4, image: loacalImage.landingPageImage.entryPageImage4 },
    { id: 5, image: loacalImage.landingPageImage.entryPageImage5 },
]
export const landingpageImageList2: homeImageList[] = [
    { id: 7, image: loacalImage.landingPageImage.entryPageImage6 },
    { id: 8, image: loacalImage.landingPageImage.entryPageImage7 },
    { id: 6, image: loacalImage.landingPageImage.entryPageImage8 },
    { id: 9, image: loacalImage.landingPageImage.entryPageImage9 },
    { id: 10, image: loacalImage.landingPageImage.entryPageImage10 },
]

export const Linkpage = {
    home: { link: "/home", label: 'Home' },
    image: { link: '/imagelist', label: 'Images' },
    video: { link: '/video', label: "Video" },
    uploadMaster: { link: '/masters/uploadMasters', label: "Upload Masters" },
    users: { link: '/home/user', label: "User" },
    upload: { link: '/upload', label: "Upload" },
    login: { link: '/api/auth/signin', label: "Login" },
    Privacy: { link: '/Privacy/Policy', label: "Privacy Policy" },
}