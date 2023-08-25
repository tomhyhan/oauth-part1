// pages/api/auth/login.js
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation'
import { oauth2Client } from '@/app/lib/googleClient';

const base_url = process.env.BASE_URL || "http://localhost:3000";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get('code')
    if (!code) {
        return NextResponse.json({ error: 'Not Found' }, { status: 404 })
    }

    try {
        const {tokens} =  await oauth2Client.getToken(code);
        const { access_token} = tokens
        
        if (!access_token) {
            return NextResponse.json({ error: 'Not Found' }, { status: 404 })
        }
        cookies().set({
            name: 'token',
            value: access_token,
            httpOnly: true,
          })
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
    redirect('/')
};
