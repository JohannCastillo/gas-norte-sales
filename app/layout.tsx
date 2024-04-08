// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LargeFooter from "@/components/layout/footer/Footer";
import { ThemeModeScript } from "flowbite-react";
import NavBar from "@/components/layout/navigation/NavBar";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/cart/Sidebar";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "E-commerce";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>

      <Providers>
        <body
          className={
            inter.variable + " dark:bg-[#070707] max-w-[1500px] mx-auto"
          }
        >
          <Toaster />
          <header className="w-full">
            <NavBar />
          </header>

          <main className="m-4">{children}</main>

          {/* <Sidebar /> */}

          <LargeFooter />
        </body>
      </Providers>
    </html>
  );
}
