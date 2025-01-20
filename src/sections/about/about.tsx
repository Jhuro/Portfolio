import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('About');
  return (
    <section className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          {t('title')}
        </h2>

        <p className="text-lg leading-relaxed text-justify mb-8">
          {t('about')}
        </p>

        <Link href="/mi-cv.pdf" target="_blank" download>
          <button className="px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-accent">
            {t('cvButton')}
          </button>
        </Link>
      </div>
    </section>
  );
}