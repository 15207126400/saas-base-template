"use server"

import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Testimonial from "@/components/home/Testimonial";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";
import { type Metadata } from 'next'
import { getLocale } from "next-intl/server";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "i18n/request";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('website');
  
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getLocaleUrl(locale),
      languages: Object.fromEntries(
        locales.map((locale) => {
          return [locale, getLocaleUrl(locale)]
        })
      )
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getLocaleUrl(locale),
      siteName: 'Squid Game Thanos',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Squid Game Thanos Preview',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t("title"),
      description: t("description"),
      images: ['/og-image.jpg'],
      creator: '@SquidGameThanos',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default async function HomePage() {
  return (
    <div className="w-full bg-black">
      <Hero />
      <Faq />
    </div>
  );
}