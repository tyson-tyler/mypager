import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "./cursor";
import Navbar from "./components/Navbar";
import Fotter from "./components/Fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mypager.",
  description: "Get Best Digital Assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Fotter />
      </body>
    </html>
  );
}
