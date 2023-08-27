'use client'
import React, {useContext} from 'react'
import { AuthContext } from '../components/context/authContext'

export default function page() {
    const {user} = useContext(AuthContext)

  return (
    <div>
        {user?.email}    
    </div>
  )
}
