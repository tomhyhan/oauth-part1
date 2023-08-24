'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function LoginBtn() {
    const handleLogin = () => {
        window.location.href = '/api/auth/redirect' 
    }

    return (
        <button className="border-2 outline-none rounded-md p-2" onClick={handleLogin}>Login with Google</button>
    )
}
