import { bcrypt } from "@/app/libs/bcrypt";
import prisma from "@/app/libs/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // tambahkan nilai yang ingin ditambahkan pada session bersama value dari token
      if (user) {
        return { ...token, id: user.id };
      }
      if (trigger === "update" && session?.name) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.name = session.name;
        console.log("TOKEN YANG BARU DENGAN NEW NAME", token);
      }
      return token;
    },
    async session({ session, token }) {
      // jika ingin menambahkan nilai kepada objek session, maka nilai harus di passing dari jwt

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
        },
      };
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: {
    // PAKAI JIKA MENGGUNAKAN ADAPTER
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email-kamu",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials.password) {
          return null;
        }
        const match = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!match) {
          return null;
        }
        // if (match.hashedPassword != credentials.password) {
        //   return null;
        // }
        const valPassword = await bcrypt.compare(
          credentials.password,
          match.hashedPassword
        );
        if (!valPassword) {
          return null;
        }
        return match;
        // const user = { id: "1", email: "rujak", password: "cingur" };
        // console.log(credentials);
        // return {
        //   id: user.id + "",
        //   email: user.email,
        //   password: user.password,
        // };
      },
    }),
  ],
};
