import connect from "@/libs/mongodb";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth/next";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",

      async authorize(credentials) {
        const { username, password } = credentials;
        try {
          await connect();
          const user = await User.findOne({ name : username });
          if (!user) return;
          const passHased = await bcrypt.compare(password, user.password);
          if (!passHased) return;
          return user;
        } catch (error) {
          return new Error("Error found: ", error);
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
