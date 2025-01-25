"use client";

import { useState, useEffect } from 'react';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const words = [t('word1'), t('word2'), t('word3'), t('word4')];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="flex items-center justify-center min-h-screen mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {t('title')} <span className="text-accent">Juan Patiño</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-4">
            {t('subtitle')}{' '}
            <span className="font-semibold text-accent">
              {words[currentWordIndex]}
            </span>
          </h2>
        </div>
        <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden shadow-lg">

        </div>
      </div>
    </section>
  );
}