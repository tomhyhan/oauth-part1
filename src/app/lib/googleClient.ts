import { google } from 'googleapis';

const base_url = process.env.BASE_URL || "http://localhost:3000";
export const oauth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENT,
    process.env.OAUTH_SECRET,
    `${base_url}/api/auth/callback`
  );