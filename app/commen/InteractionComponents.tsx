'use client'
import { FiEdit } from "react-icons/fi"
import { UserLT } from "./CommenTypeDefination"

export const ActionIcon: React.FC<UserLT> = ({ obj }) => {
    return <div onClick={() => console.log(obj)}><FiEdit /></div>
}