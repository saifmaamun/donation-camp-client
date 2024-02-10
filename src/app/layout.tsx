import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Providers from "@/lib/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { useAppDispatch } from "@/redux/hooks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donation Camp",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // checking the user is logged in
  const session = await getServerSession(authOptions);
  const user = { email: session?.email, role: session?.role };
  // console.log(session?.email, session?.role, user);
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Navbar session={session ? true : false} user={user} />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
