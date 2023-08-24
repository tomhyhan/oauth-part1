// pages/api/auth/login.js

import { NextRequest, NextResponse } from 'next/server';
import querystring from 'query-string';
import { redirect } from 'next/navigation'
import { oauth2Client } from './../../../lib/googleClient';

const base_url = process.env.BASE_URL || "http://localhost:3000";

export async function GET(req: NextRequest) {
    const scopes = [
        'https://www.googleapis.com/auth/email',
        'https://www.googleapis.com/auth/profile'
      ];
    const authUrl = oauth2Client.generateAuthUrl({
        scope: ["email"],
        // best practice
        include_granted_scopes: true,
        type:"code"
    });
    
    redirect(authUrl)
};
