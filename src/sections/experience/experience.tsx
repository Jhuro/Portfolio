import {useTranslations} from 'next-intl';
import ExperienceCard from '@/components/experienceCard';

export default function Experience() {
  const t = useTranslations('Experience');
  return (
    <section id="experience" className="p-8 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          {t('title')}
        </h2>
        <div className="space-y-4 items-center">
            {t.raw('items').map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
        </div>
    </section>
  );
}