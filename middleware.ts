// Next-auth Way

import middleware from "next-auth/middleware";

export default middleware;

// Normal Way

// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL("/login",request.url))
// }

export const config = {
  matcher: ["/home", "/home/user"],
};
