"use client";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import LanguageSwitch from './LanguageSwitch';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'play', href: '#game' },
];

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b border-white/10 transition-colors duration-200",
      isScrolled 
        ? "bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80" 
        : "bg-gray-900"
    )}>
      <div className="container flex h-14 items-center mx-auto px-4">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Squid Game Thanos
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          {/* <div className="hidden md:flex ml-8">
            <nav className="flex items-center gap-6">
              {navItems.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-pink-500",
                    "text-gray-200"
                  )}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitch />
          </div>
          <div className="md:hidden">
            <LanguageSwitch />
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="open menus" className="text-gray-200 hover:text-pink-500">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[280px] bg-gray-900 border-white/10">
              <SheetHeader>
                <SheetTitle className="text-gray-200">{t('menu')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(({ key, href }) => (
                  <Link
                    key={key}
                    href={href}
                    className="text-base font-medium text-gray-200 transition-colors hover:text-pink-500"
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 