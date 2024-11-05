import React from 'react';

type FeatureCardProps = {
  icon: string;
  altText: string;
  title: string;
  description: string;
  bgColor?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  altText,
  title,
  description,
  bgColor = 'bg-gray-800',
}) => (
  <div
    className={`flex items-center justify-center flex-col w-full md:w-1/3 min-h-[300px] h-full p-8 ${bgColor}`}
  >
    <img
      className="h-[80px] w-[80px] object-contain mb-5"
      src={icon}
      alt={altText}
    />
    <h3 className="mb-4 text-xl font-semibold text-center text-white font-tertiaryFont">
      {title}
    </h3>
    <p className="text-base text-center text-white font-secondaryFont">
      {description}
    </p>
  </div>
);

export default FeatureCard;
