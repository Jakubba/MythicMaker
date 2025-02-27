import React from 'react';
import { FeatureCardProps } from './FieldCard.types';

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  altText,
  title,
  description,
  bgColor = 'bg-gray-800',
}) => (
  <div
    className={`flex h-full min-h-[300px] w-full flex-col items-center justify-center p-8 md:w-1/3 ${bgColor}`}
  >
    <img className="mb-5 h-[80px] w-[80px] object-contain" src={icon} alt={altText} />
    <h3 className="mb-4 text-center font-tertiaryFont text-xl font-semibold text-white">{title}</h3>
    <p className="text-center font-secondaryFont text-base text-white">{description}</p>
  </div>
);

export default FeatureCard;
