import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "donation",
      name: "Credentials",
      type: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "email", placeholder: "Your Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        try {
          const res = await fetch(`${process.env.SERVER_URL}/users/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const { data } = await res.json();
          // console.log(user);

          // If no error and we have user data, return it
          if (res.ok && data) {
            return {
              ...data,
            };
          }
        } catch (err: any) {
          throw new Error(err.message);
        }

        // Return null if user data could not be retrieved
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      //   console.log(token, user);
      // Persist the OAuth access_token and or the user id to the token right after signin
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      //   console.log(token, session);
      return {
        ...session,
        ...token,
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
