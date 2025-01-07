"use client";

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations('Hero');
  
  const scrollToGame = () => {
    const gameSection = document.getElementById('game');
    gameSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-20 px-4 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/0 via-background/20 to-background/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
          {t('title')}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-[800px] mb-8">
          {t('description')}
        </p>

        <Button 
          size="lg" 
          className="min-w-[160px] bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 animate-pulse"
          onClick={scrollToGame}
        >
          {t('action')}
        </Button>
      </div>

      {/* Game Section */}
      <div id="game" className="w-full max-w-4xl mx-auto mt-16 rounded-lg overflow-hidden shadow-2xl">
        <div className="relative w-full aspect-[800/635]">
          <iframe 
            src="https://www.gameflare.com/embed/squid-game/"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title="Squid Game Thanos Challenge - Play Now"
          />
        </div>
      </div>

      {/* SEO Optimization */}
      <div className="sr-only">
        <h2>Squid Game Thanos - Ultimate Survival Challenge</h2>
        <p>
          Play the exciting Squid Game Thanos challenge online. Experience the thrilling combination
          of Squid Game survival challenges and Thanos powers in this unique game. Test your skills,
          strategy, and survival instincts in this addictive browser game.
        </p>
        <ul>
          <li>Free online Squid Game</li>
          <li>Thanos powers integration</li>
          <li>Survival challenge</li>
          <li>Browser-based gameplay</li>
          <li>No download required</li>
        </ul>
      </div>
    </div>
  );
} 