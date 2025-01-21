import Image from 'next/image';
import {useTranslations} from 'next-intl';

const ExperienceCard = ({ 
  image, 
  type, 
  startDate, 
  endDate, 
  title, 
  subtitle
}) => {

  const typeClass = type === 'education' ? 'bg-blue-500' : 'bg-green-500';
  const t = useTranslations('Experience');

  return (
    <div className= "flex flex-col sm:flex-row bg-console-bg shadow-lg rounded-lg p-4 sm:p-6 mb-4 glowingBorderLight">
      
      <div className="flex-1 mt-4 sm:mt-0 sm:ml-6">
        <div className="flex justify-between items-center flex-wrap">
          <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${typeClass}`}>
            {type === 'education' ? t('educationLabel') : t('experienceLabel')}
          </span>
          <span className="text-sm text-gray-500 sm:ml-4 sm:text-right">
            {startDate} - {endDate}
          </span>
        </div>
        <div className="flex items-center">
       
        <div className="m-2 w-24 h-24 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            layout="intrinsic"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

          <div className="flex-col">
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <h4 className="text-md text-gray-700">{subtitle}</h4>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExperienceCard;
