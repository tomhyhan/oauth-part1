import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    console.log("session")
    console.log("token", token)
    return NextResponse.json({user:'Tom', image: "my image"})
};
