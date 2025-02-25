import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter'; // next-auth 5.x 기준
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

declare global {
  var prisma: PrismaClient | undefined;
}

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
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
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// 환경 변수 검증
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET must be defined in .env');
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };