"use client"

import { User } from "@/app/lib/types";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({} as {
    user: User | undefined,
    logout: () => void,
    loading: boolean
});

export function AuthProvider({ children}: { children: React.ReactNode }) {
    const [user , setUser] = useState(undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getSession() {
            console.log("effect")
            try{
                setLoading(true)
                const response = await fetch('http://localhost:3000/api/auth/session')
                setLoading(false)
                if (response.status === 401) {
                    setUser(undefined)
                    return
                }
                const user = await response.json()
                setUser(user)
            } catch (err){
                setUser(undefined)
            }
            
        }
        getSession()
    }, [])

    const logout = async () => {
        try {
            await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            body: JSON.stringify({cookie: "token"}),
            })    
            setUser(undefined)
        } catch (err) {
            console.error("Failed to logout")
        }
        
    }

    const values = {
        user,
        logout,
        loading
    } 
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}