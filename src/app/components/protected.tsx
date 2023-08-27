"use client"
import React, { useContext } from 'react'
import { AuthContext } from './context/authContext'
import Link from 'next/link'

export default function Protected({children}: {
    children: React.ReactNode
}) {
    const {user} = useContext(AuthContext)
    if (!user) {
        return (
            <div>
                <p>Not logged in</p>
                <p>Please Login to access this page</p>
                <Link href="/">Home</Link>
            </div>
        )
    }
    console.log(user)
    return (
        <>{children}</>
    )
}
