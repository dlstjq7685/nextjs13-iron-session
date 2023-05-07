import {  NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getIronSession } from "iron-session/edge";
import { sessionOptions } from './lib/session';

const needLogInPrefixes = [
  '/secure',  
  '/api/secure/'
]

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const { pathname } = req.nextUrl

  if (needLogInPrefixes.some((prefix) => pathname.startsWith(prefix))) {

    console.log("path", pathname)
    const session = await getIronSession(req, res, sessionOptions);
  
    const { user } = session;
    console.log("auth check in middle ", user)

    if (user === undefined) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

  }

  return res;
}