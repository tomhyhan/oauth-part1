// pages/api/auth/login.js

import { NextRequest} from 'next/server';
import { redirect } from 'next/navigation'
import { oauth2Client } from './../../../lib/googleClient';

export async function GET(req: NextRequest) {
    const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
      ];
    const authUrl = oauth2Client.generateAuthUrl({
        scope: scopes,
        // best practice
        include_granted_scopes: true,
        type:"code"
    });
    
    redirect(authUrl)
};
