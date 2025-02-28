import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [],
  secret: process.env.NEXTAUTH_SECRET, // 필수
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지
  },
};