import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/providers";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Patiño",
  description: "This is Juan Patiño's portfolio.",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
 
  return (
    <html lang={locale} suppressHydrationWarning>
    <head>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
    </head>
    
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header/>
            {children}
            <Footer/>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}