/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-11 15:53:50
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-11 16:28:56
 */
// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
export { auth as middleware } from "@/auth";
