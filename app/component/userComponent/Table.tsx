import { GET } from '@/app/api/user/route'
import { getUserAPI } from '@/app/home/user/userService'
import React from 'react'
type User = {
    id: number;
    email: string;
    name: string;
    number: number
};
async function Usertable() {
    const res = await getUserAPI()
    const userList = await res.json()

    console.log(userList, "gfjh")

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((val: User, i: number) => (
                        <tr key={i}>
                            <th>{i}</th>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.number}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Usertable