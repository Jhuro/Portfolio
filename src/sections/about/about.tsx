import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('About');
  return (
    <section id="about" className="p-8">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          {t('title')}
        </h2>

        <p className="text-lg leading-relaxed text-justify mb-8">
          {t('about')}
        </p>

        <Link 
          href="https://drive.google.com/uc?export=download&id=1y_H5qI23dJ6vos9uKfk9O7HDi4Lk21TN"
          download
        >
          <button className="px-6 py-3 bg-primary text-secondary rounded-lg font-bold hover:bg-accent">
            {t('cvButton')}
          </button>
        </Link>
      </div>
    </section>
  );
}