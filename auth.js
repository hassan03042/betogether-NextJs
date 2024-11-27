import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/Users";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handleUser = async (profile) => {
  await connectDB();
  const user = await UserModal.findOne({ email: profile.email });
  if (user) return user;
  let newUser = await UserModal({
    fullname: profile.name,
    email: profile.email,
    profileImg: profile.picture,
  });
  newUser = await newUser.save();
  return newUser;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("account", account);
      console.log("profile", profile);

      const user = await handleUser(profile);
      return { ...profile, role: user.role };
    },
    async jwt({ token, user }) {
      console.log("jwt user", user);
      console.log("jwt token", token);
      const userFromDB = await handleUser(token);
      console.log("userFromDB", userFromDB);

      // if (user) {
      // User is available during sign-in
      token._id = userFromDB._id;
      token.role = userFromDB.role;
      // }
      return token;
    },
    session({ session, token }) {
      console.log("session data", session);
      session.user.id = token.id;
      session.user._id = token._id;
      session.user.role = token.role;
      return session;
    },
  },
});
