import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";
import { Toaster } from "@/src/components/ui/toaster";
import { routing } from "@/src/i18n/routing";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmatcsepp Kerttervezés",
  description: "Minőségi kertépítés az ország egész területén.",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
