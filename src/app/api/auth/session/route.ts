import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(req: NextRequest) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (!token) {
        return NextResponse.json({ error: 'Invalid' }, { status: 401 })
    }
    
    const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
        'Authorization': `Bearer ${token.value}`
    }
    });
    
    if (!response.ok) {
        return NextResponse.json({ error: 'Invalid' }, { status: 401 })
    }

    const data = await response.json();
    const user = {
        email: data.email,
        image: data.picture,
    }

    return NextResponse.json(user)
};


