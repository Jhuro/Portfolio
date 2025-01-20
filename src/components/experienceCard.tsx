import Image from 'next/image';

const ExperienceCard = ({ image, type, startDate, endDate, title, subtitle, description }) => {
  const typeClass = type === 'education' ? 'bg-blue-500' : 'bg-green-500';

  return (
    <div className="flex bg-white shadow-lg rounded-lg p-6 mb-4">
      <Image
        src={image}
        alt={title}
        width={112}
        height={50}
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 text-xs font-semibold text-white rounded ${typeClass}`}>
            {type === 'education' ? 'Educación' : 'Experiencia'}
          </span>
          <span className="text-sm text-gray-500">{startDate} - {endDate}</span>
        </div>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <h4 className="text-md text-gray-700">{subtitle}</h4>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
