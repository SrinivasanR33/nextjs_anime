import { GET } from '@/app/api/user/route'
import { User } from '@/app/commen/CommenTypeDefination'
import { ActionIcon } from '@/app/commen/InteractionComponents'
import { getUserAPI } from '@/app/home/user/userService'
import React from 'react'

async function Usertable() {
    const res = await getUserAPI()
    const userList = await res.json()

    // console.log(userList, "gfjh")

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
                            <th>{i + 1}</th>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.number}</td>
                            <td className='text-blue-500'><ActionIcon obj={val} /></td>
                        </tr>
                    ))}
                </tbody>
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
    )
}

export default Usertable