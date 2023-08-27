"use client"
import {useContext} from "react"
import LoginBtn from './components/loginbtn'
import { AuthContext } from './components/context/authContext';
import Link from 'next/link';
import LogoutBtn from './components/logoutbtn';

export default function Home() {
    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <div>loading</div>
    }
    
  return (
    <main className="">
      <h1>Welcome to my website</h1>
      {user? 
        <>
            <p>You are logged in</p>
            <div>
                <Link className="text-sky-500" href="/profile">To Profile</Link>
            </div>
            <LogoutBtn />
        </>
        : <LoginBtn /> }
    </main>
  )
}
