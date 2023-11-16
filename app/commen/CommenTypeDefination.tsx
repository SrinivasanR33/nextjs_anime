export interface datavalue {
    name: string;
    email: string;
    number: string;
}
export type User = {
    id: number;
    email: string;
    name: string;
    number: number
};
export interface UserL {
    id: number;
    email: string;
    name: string;
    number: number
};
export type UserPrisma = {
    // id: string;
    email: string;
    name: string;
    number: string;
};
export interface UserLT {
    obj: UserL
}