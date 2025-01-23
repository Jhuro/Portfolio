import {useTranslations} from 'next-intl';
import ExperienceCard from '@/components/experienceCard';

interface ExperienceItem  {
  image: string;
  type: string;
  startDate: string;
  endDate: string;
  title: string; 
  subtitle: string;
}

export default function Experience() {
  const t = useTranslations('Experience');
  const items: ExperienceItem[] = t.raw('items') as ExperienceItem[];
  return (
    <section id="experience" className="p-8">
        <h2 className="text-3xl font-semibold mb-6">
          {t('title')}
        </h2>
        <div className="space-y-4 items-center">
          {items.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>
    </section>
  );
}