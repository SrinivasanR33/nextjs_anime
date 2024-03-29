export interface datavalue {
    id?: string;
    name: string;
    email: string;
    number: string;
    isAdmin: boolean;
    password?: string

}
export type User = {
    id: string;
    email: string;
    name: string;
    number: number
};
export interface UserL {
    _id: string;
    email: string;
    name: string;
    number: string;
    isAdmin: boolean;
    password?: string
};
export type UserPrisma = {
    // id?: string;
    email: string;
    name: string;
    number: string;
    isAdmin: boolean;
    password?: string
};
export type UpdateUserPrisma = {
    id: string;
    email: string;
    name: string;
    number: string;
};
export type Load = {
    Loading: Boolean
};
export interface UserLT {
    userList: UserL[]
}
export interface UploadType {
    type: string,
    secureUrl: string,
    publicId: string,
    uploadImagInfo: object,
    des: string | undefined,
}
export interface UserCredentialsConfig {
    username: { label: string; type: string; placeholder: string };
    password: { label: string; type: string; placeholder: string };
}
export interface payloadPaginationData {
    type: string | undefined;
    page: number;
    pageSize: number;
}
export interface videopayload {
    type: string | undefined,
    fileType: string,
}
export interface IconTag {
    classname: string,
    element: React.ComponentType<any>,
}
export interface homeImageList {
    id: number,
    image: string
}

// Upload master page Type

export interface UploadMasters {

}

// Select field 
export interface SelectArrProps {
    arr: any;
    valueKey: string;
    labelKey: string;
    dynamicFields?: object;
}
export interface SelecfieldArr {
    value: string,
    label: string,
    [key: string]: any;
    allValue: any
}