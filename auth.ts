import NextAuth from 'next-auth';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials"; // 추가
import bcrypt from 'bcrypt';

// Prisma 클라이언트 초기화 (서버리스 환경에서 싱글톤으로 관리)
declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

// Auth.js 초기화
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma), // Prisma 어댑터 추가
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        userId: { label: 'ID', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Partial<Record<'userId' | 'password', unknown>>) {
        if (!credentials?.userId || !credentials?.password) {
          throw new Error('ID and password are required');
        }

        if (typeof credentials.userId !== 'string' || typeof credentials.password !== 'string') {
          throw new Error('Invalid credentials format');
        }

        const user = await prisma.user.findUnique({
          where: { userId: credentials.userId.trim() },
        });

        if (!user || !user.password || typeof user.password !== 'string') {
          throw new Error('No user found or invalid password');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id,
          userId: user.userId,
          name: user.name ?? undefined,
          email: user.email ?? undefined,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id; // 세션에 사용자 ID 추가
      return session;
    },
  },
});