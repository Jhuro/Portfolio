'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from '@/i18n/routing';

const locales = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
];

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'en' || segments[0] === 'es') {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    router.push(`/${segments.join('/')}`);
  };

  return (
    <div className="locale-switcher">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleLocaleChange(code)}
          className="px-2 py-1 mx-1 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {label}
        </button>
      ))}
    </div>
  );
}