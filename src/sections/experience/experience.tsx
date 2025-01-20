import {useTranslations} from 'next-intl';
import ExperienceCard from '@/components/experienceCard';

const experienceData = [
    {
      image: 'https://drive.google.com/uc?id=1iO8Q1BM_T13TEV5BNoWfw40fobHYOxmY',
      type: 'education',
      startDate: 'Diciembre 2022',
      endDate: 'Enero 2023',
      title: 'Udemy',
      subtitle: 'Introducción al desarrollo de apps para Android desde cero',
      description: 'Estudios orientados al desarrollo de software, análisis de datos y tecnologías emergentes.'
    },
    {
      image: 'https://drive.google.com/uc?id=1PB8sCPHipYu_bqAP3fRN3MSdcOmDuKAH',
      type: 'education',
      startDate: 'Febrero 2019',
      endDate: 'Mayo 2024',
      title: 'Universidad Piloto de Colombia',
      subtitle: 'Ingeniería de sistemas',
      description: 'Responsable de la creación de interfaces de usuario usando React y Tailwind CSS.'
    },
    {
      image: 'https://drive.google.com/uc?id=10F1TDLZDndYafJ3z58qG0-Aab5yR5nKU',
      type: 'experience',
      startDate: 'Julio 2023',
      endDate: 'Enero 2024',
      title: 'TATA Consultancy Services',
      subtitle: 'Delivery Assurance Facilitator',
      description: 'Estudios orientados al desarrollo de software, análisis de datos y tecnologías emergentes.'
    },
    {
      image: 'https://drive.google.com/uc?id=1iO8Q1BM_T13TEV5BNoWfw40fobHYOxmY',
      type: 'education',
      startDate: 'Julio 2024',
      endDate: 'Septiemrbe 2024',
      title: 'Udemy',
      subtitle: 'Universidad Visual Basic. net y SQLserver: De 0 a Experto',
      description: 'Estudios orientados al desarrollo de software, análisis de datos y tecnologías emergentes.'
    }
  ];

export default function Experience() {
  return (
    <section className="p-8">
        <h2 className="text-3xl font-semibold mb-6">
            Experiencia y Educación
        </h2>
        <div className="space-y-4">
            {experienceData.map((item, index) => (
                <ExperienceCard key={index} {...item} />
            ))}
        </div>
    </section>
  );
}