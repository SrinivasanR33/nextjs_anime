"use client"

import { AdminState } from "@/redux/actions/userSlice"
import { store } from "@/redux/store/store"

export const Logoutbutton = () => {
    return <button className='btn btn-secondary btn-xs ' onClick={() => store.dispatch(AdminState(false))}>Logout</button>
}