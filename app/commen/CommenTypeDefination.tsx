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
    id: string;
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