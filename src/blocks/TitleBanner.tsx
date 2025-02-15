import React from 'react';

type TitleBannerProps = {
  image: string;
  title?: string;
  description?: string;
};

export const TitleBanner: React.FC<TitleBannerProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden p-4">
      <div className="absolute left-0 top-0 w-full h-[520px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-20"></div>
      <div className="z-20 p-5 bg-yellow-600">
        <div className="z-20 flex flex-col items-center justify-center p-10 border-2 border-white">
          {title && (
            <h2 className="relative z-20 mb-4 text-5xl font-bold text-white lg:text-7xl font-primaryFont">
              {title}
            </h2>
          )}
          {description && (
            <p className="relative z-20 text-xl text-center text-white uppercase md:text-2xl font-tertiaryFont">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 h-full w-full">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="Banner Image"
        />
      </div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </section>
  );
};
