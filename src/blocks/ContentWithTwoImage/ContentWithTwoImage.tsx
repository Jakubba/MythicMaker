import React from 'react';
import { Link } from 'react-router-dom';
import { ContentWithTwoImageProps } from './ContentWithTwoImage.types';

export const ContentWithTwoImage: React.FC<ContentWithTwoImageProps> = ({
  mainTitle,
  title,
  description,
  img,
}) => {
  return (
    <section className="flex h-[100%] w-full flex-col items-center justify-center bg-slate-50 p-4 md:h-[60vh]">
      <div className="flex w-full flex-col items-center justify-between gap-10 md:max-w-[80%] md:flex-row">
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 md:w-1/2">
          <div className="h-auto w-full overflow-hidden rounded-lg">
            <img
              className="h-full min-h-[240px] w-full object-cover"
              src={img}
              alt="image banner"
            />
          </div>
          <div className="z-10 h-auto w-full overflow-hidden rounded-lg bg-black md:absolute md:left-[-20%] md:top-[-20%] md:h-[80%] md:w-[50%]">
            <img className="h-full min-h-[240px] w-auto object-cover" src={img} alt="" />
          </div>
        </div>
        <div className="flex w-full flex-col md:w-1/2 md:items-center">
          <p className="mb-4 font-tertiaryFont text-lg font-bold uppercase text-[#ff0000]">
            {mainTitle}
          </p>
          <h4 className="mb-4 font-primaryFont text-3xl text-[#000000]">{title}</h4>
          <p className="mb-6 font-tertiaryFont text-base text-[#000000]">{description}</p>
          <Link
            to="/registration"
            className="w-max border-2 border-transparent bg-thirdColor px-6 py-2 text-white transition-all hover:border-gray-800 hover:bg-white hover:text-gray-800"
          >
            Zapisz się
          </Link>
        </div>
      </div>
    </section>
  );
};
