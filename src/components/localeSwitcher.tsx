'use client';

import Link from 'next/link';
import { usePathname } from '@/i18n/routing';

const locales = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' }
];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  
  return (
    <div className="locale-switcher">
      {locales.map(({ code, label }) => (
        <Link
          key={code}
          href={`/${code}${pathname}`}
          locale={code}
          className="px-2 py-1 mx-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}