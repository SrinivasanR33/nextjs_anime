export interface datavalue {
    name: string;
    email: string;
    number: string;
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
    number: string
};
export type UserPrisma = {
    // id: string;
    email: string;
    name: string;
    number: string;
};
export type UpdateUserPrisma = {
    id: string;
    email: string;
    name: string;
    number: string;
};
export interface UserLT {
    userList: UserL[]
}