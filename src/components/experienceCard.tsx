import Image from 'next/image';
import {useTranslations} from 'next-intl';

interface ExperienceCardProps {
  image: string;
  type: string;
  startDate: string;
  endDate: string;
  title: string; 
  subtitle: string;
}

const ExperienceCard = ({ 
  image, 
  type, 
  startDate, 
  endDate, 
  title, 
  subtitle
} : ExperienceCardProps) => {

  const typeClass = type === 'education' ? 'bg-blue-500' : 'bg-green-500';
  const t = useTranslations('Experience');

  return (
    <div className= "flex flex-col sm:flex-row bg-alternative-primary shadow-lg rounded-lg p-4 sm:p-6 mb-4 glowingBorderLight">
      
      <div className="flex-1 mt-4 sm:mt-0 sm:ml-6">
        <div className="flex justify-between items-center flex-wrap">
          <span className={`px-2 py-1 text-xs font-semibold text-alternative-primary rounded ${typeClass}`}>
            {type === 'education' ? t('educationLabel') : t('experienceLabel')}
          </span>
          <span className="text-sm sm:ml-4 sm:text-right">
            {startDate} - {endDate}
          </span>
        </div>
        <div className="flex items-center">
       
        <div className="m-2 p-2 w-24 h-24 flex items-center justify-center bg-[#F5F5F5] rounded-lg">
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

          <div className="flex-col">
            <h3 className="text-lg font-bold text-accent mt-2">{title}</h3>
            <h4 className="text-md">{subtitle}</h4>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExperienceCard;
