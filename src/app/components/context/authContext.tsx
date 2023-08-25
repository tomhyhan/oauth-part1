"use client"

import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(1);

export default function AuthProvider({ children}: { children: React.ReactNode }) {
    const [user , setUser] = useState(null)
    
    useEffect(() => {
        async function getSession() {
            console.log("effect")
            try{
                await fetch('http://localhost:3000/api/auth/session')

            } catch (err){
                // todo
            }
        }
        getSession()
    }, [])

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={1}>
            {children}
        </AuthContext.Provider>
    )

}