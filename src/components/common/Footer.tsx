import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { env } from '@/env';

const footerLinks = {
  social: [
    { key: 'twitter', href: 'https://twitter.com' },
    { key: 'discord', href: 'https://discord.com' },
    { key: 'telegram', href: 'https://telegram.org' },
  ],
  legal: [
    { key: 'privacy', href: '/privacy' },
    { key: 'terms', href: '/terms' },
    { key: 'contact', href: '/contact' },
  ],
};

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <footer className="w-full border-t border-pink-800/20 bg-black/90">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Squid Game Thanos Logo"
                width={40}
                height={40}
                className="h-10 w-auto rounded-lg"
              />
              <h2 className="text-xl font-bold text-pink-500">Squid Game Thanos</h2>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              {t('description')}
            </p>
          </div>

          {/* Social Links */}
          {/* <div className="flex flex-col gap-4">
            <h3 className="font-bold text-pink-500">{t('social')}</h3>
            {footerLinks.social.map(({ key, href }) => (
              <Link 
                key={key} 
                href={href}
                className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(key)}
              </Link>
            ))}
          </div> */}

          {/* Legal Links */}
          {/* <div className="flex flex-col gap-4">
            <h3 className="font-bold text-pink-500">{t('legal')}</h3>
            {footerLinks.legal.map(({ key, href }) => (
              <Link 
                key={key} 
                href={href}
                className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Squid Game Thanos • {t('copyright')}
        </div>
      </div>
    </footer>
  );
} 