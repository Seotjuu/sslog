import NextAuth from "next-auth";

export const {
  handlers
} = NextAuth({
  providers: [

  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60
  },
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    jwt: async ({token, user}) => {
      return token;
    },
    session: async ({session, token}) => {
      return session;
    },
  }
})