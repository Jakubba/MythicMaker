import React from 'react';
import avatar from '../../assets/image/avatar.png';
import { ReviewItemProps } from './Reviews.types';

export const ReviewItem: React.FC<{ review: ReviewItemProps }> = ({ review }) => {
  return (
    <li className="mb-5 flex flex-col border-2 border-gray-600 bg-white p-4 md:p-8">
      <div className="star mb-5"></div>
      <p className="mb-4 font-tertiaryFont italic">"{review.text}"</p>
      <div className="flex items-center gap-4">
        <img src={avatar} alt="image avatar" className="h-[60px] w-[60px] object-cover" />
        <div className="flex flex-col items-start">
          <p className="font-tertiaryFont font-bold">{review.name}</p>
          <p className="font-tertiaryFont font-semibold">{review.role}</p>
        </div>
      </div>
    </li>
  );
};
