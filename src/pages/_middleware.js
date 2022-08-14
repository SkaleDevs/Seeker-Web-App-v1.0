import { NextRequest, NextResponse } from 'next/server';
// import {authOptions} from './api/auth/[...nextauth]'
import {getSession} from 'next-auth/react';
// import { unstable_getServerSession } from "next-auth/next"



const isModeratorRoute = (pathname) => {
    return pathname.startsWith('/api/controller/moderator');
}
const isSeekerRoute = (pathname) => {
    return pathname.startsWith('/api/controller/seeker');
}
const isInstituteRoute = (pathname) => {
    return pathname.startsWith('/api/controller/institute');
}
const isAgencyRoute = (pathname) => {
    return pathname.startsWith('/api/controller/agency');
}

export async function middleware(req,res) {
    console.log("middleware");
    // console.log(req);
    const session = await getSession({req});
    // console.log(authOptions);
    // const session1 = await unstable_getServerSession(req,res,authOptions);
    console.log(session);
    // console.log(session1);
    //   if(!session){
      //       return NextResponse.redirect(new URL('/401', req.url));
      //  }
      const role = session?.user?.role;
      
      const { pathname } = req.nextUrl;
      console.log(pathname);
 

  // if (isModeratorRoute(pathname) && role !== "moderator") {
  // }
  // if (isSeekerRoute(pathname) && role !== "seeker") {
  //   return NextResponse.redirect(new URL('/401', req.url));
  // }
  // if (isInstituteRoute(pathname) && role !== "institute") {
  //   return NextResponse.redirect(new URL('/401', req.url));
  // }
  // if (isAgencyRoute(pathname) && role !== "agency") {
  //   return NextResponse.redirect(new URL('/401', req.url));
  // }

  return NextResponse.next();
}

export const config = {
    matcher: ['/api/moderator/:path*', '/api/seeker/:path*','/api/institute/:path*','/api/agency/:path*'],
};
