import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Providers from "@/components/providers";

import "../globals.css";

const ubuntuFont = Ubuntu_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: "Juan Patiño",
  description: "This is Juan Patiño's portfolio.",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
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
        className={`antialiased ${ubuntuFont.className} bg-main-bg`}
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