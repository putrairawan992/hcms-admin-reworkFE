import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('userToken');

  if (!token) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/help-center',
    '/edit-profile',
    '/approval/job-post',
    '/approval/remuneration',
    '/setup/admin-role',
    '/setup/new-admin',
    '/setup/remuneration',
  ],
};
