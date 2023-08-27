'use client'
import React, {useContext} from 'react'
import { AuthContext } from './context/authContext'

export default function LogoutBtn() {
    const {logout}  = useContext(AuthContext)

    return (
        <button className="border-2 outline-none rounded-md p-2" onClick={() => logout()}>Log Out</button>
    )
}
