import { JWTVerify } from "./helpers/jwt";
import { NextResponse } from "next/server";

export async function middleware(req, res) {


  var AccessToken =
    req.cookies.get("AccessToken")?.value &&
    (await JWTVerify(req.cookies.get("AccessToken")?.value));


  var pathname = req.nextUrl.pathname;
  var publicRoutes = ["/", "/login", "/register"];

  if (!AccessToken && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (AccessToken?.isAdmin === false && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  var contactPage = ["/login", "/register"];
  if (AccessToken && contactPage.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/", "/login", "/register"],
};
