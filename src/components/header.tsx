"use client";

import LocaleSwitcher from './localeSwitcher';
import ThemeToggle from './themeToggle';
import { useEffect, useState } from 'react';

export default function Header() {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-secondary text-primary p-4 sticky top-0 z-50 transition-shadow ${
        hasShadow ? 'shadow-lg' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold">Juan Patiño</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <ThemeToggle />
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}