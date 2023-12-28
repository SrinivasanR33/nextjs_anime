"use client"

import { AdminState } from "@/redux/actions/userSlice"
import { store } from "@/redux/store/store"
import { IconTag } from "../commen/CommenTypeDefination"

export const Logoutbutton = () => {
    return <button className='btn btn-secondary btn-xs ' onClick={() => store.dispatch(AdminState(false))}>Logout</button>
}
export const IconContainer = (props: IconTag) => {
    const { classname, element: IconElement } = props
    return <span className={`${classname}`}>
        <IconElement />
    </span>
}