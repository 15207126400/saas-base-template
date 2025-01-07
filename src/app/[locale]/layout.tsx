import React from "react";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import {NextIntlClientProvider, useLocale, useMessages} from 'next-intl';
import Navbar from "@/components/common/Navbar";
import Footer from '@/components/common/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'
import { env } from "@/env";
import Script from 'next/script';

export const metadata = {
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
        color: '#FF0066',
      }
    ]
  }
};

export default function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = useLocale();
    const messages = useMessages();
    return (
    <html lang={locale} className={cn(GeistSans.variable, "scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100")}>
      <head>
        {env.ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${env.ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
        {env.GA_ID && <GoogleAnalytics gaId={env.GA_ID} />}
        </body>
    </html>
    );
}
