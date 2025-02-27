import React from 'react';
import { ReviewItem } from './ReviewItem';
import { allReviews } from './Reviews.data';
export const Reviews = () => {
  return (
    <section className="flex h-max w-full flex-col items-center justify-center bg-gray-800 px-4 py-10">
      <h2 className="mb-6 font-primaryFont text-5xl font-bold text-white">Opinie Klientów</h2>
      <p className="mb-16 font-tertiaryFont text-base font-semibold uppercase text-white">
        To narzędzie zmieniło sposób, w jaki gram!
      </p>
      <ul className="flex h-full w-full flex-col items-stretch justify-center md:flex-row md:gap-8">
        {allReviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </ul>
    </section>
  );
};
