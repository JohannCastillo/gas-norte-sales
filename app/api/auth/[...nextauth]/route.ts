// import NextAuth, { type NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/lib/prisma";
// import { compare } from "bcrypt";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials ?? {}
//         if (!email || !password) {
//           throw new Error("Missing username or password");
//         }
//         const user = await prisma.user.findUnique({
//           where: {
//             email,
//           },
//         });

//         // if user doesn't exist or password doesn't match
//         if (!user || !(await compare(password, user.password))) {
//           throw new Error("Invalid username or password");
//         }

//         return {
//           ...user,
//           id: user.id.toString(), 
//           email: user.email,
//           first_name: user.first_name,
//           last_name: user.last_name,
//           address: user.address,
//           phone:user.phone
//         };
//       },
//     }),
//   ],
//   callbacks:{
//     session: ({session, token}) => {
//       // console.log('Session Callback', {session, token})
//       return {
//         ...session,
//         user: {
//           ...session.user,
//           id: token.id,
//           first_name: token.first_name,
//           last_name: token.last_name,
//           address: token.address,
//           phone:token.phone
//         }
//       }
//     },
//     jwt: ({token, user}) => {
//       if (user) {
//         const u = user as unknown as any
//         return {
//           ...token, 
//           id: u.id,
//           first_name: u.first_name,
//           last_name: u.last_name,
//           address: u.address,
//           phone:u.phone
//         }
//       }
//       return token
//     }
//   }
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
