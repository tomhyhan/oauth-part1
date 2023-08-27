import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const cookieStore = cookies()
    cookieStore.set({
        name: data.cookie,
        value: '',
        httpOnly: true,
    })
    return NextResponse.json({ message: 'success' })
}