// import { JWTVerify } from "./helpers/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req, res) {
//   var AccessToken =
//     req.cookies.get("AccessToken")?.value &&
//     (await JWTVerify(req.cookies.get("AccessToken")?.value));

//   var pathname = req.nextUrl.pathname;
//   var publicRoutes = ["/", "/login", "/register"];
//   // var restrictedRoutes = [
//   //   "/dasboard",
//   //   "/dasboard/teams",
//   //   "/dasboard/addservice",
//   //   "/dasboard/editservice",
//   //   "/dasboard/enquiries",
//   //   "/dasboard/offer-services",
//   //   "/dasboard/users",
//   // ];

//   // if (!AccessToken && !publicRoutes.includes(pathname)) {
//   //   return NextResponse.redirect(new URL("/login", req.url));
//   // }

//   if (!AccessToken && !publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (AccessToken?.isAdmin === false) {
//     console.log("Normal User");
//     // return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (AccessToken?.isAdmin === true) {
//     console.log("Admin User");
//     // return NextResponse.redirect(new URL("/login", req.url));
//   }


//   // if (restrictedRoutes.includes(pathname) && AccessToken?.isAdmin) {
//   //   return NextResponse.redirect(new URL("/dashboard", req.url));
//   // }
// }

// export const config = {
//   matcher: ["/dashboard", "/dashboard/:path*", "/", "/login", "/register"],
// };
