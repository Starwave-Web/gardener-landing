import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmatcsepp Kerttervezés",
  description: "Minőségi kertépítés az ország egész területén.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
