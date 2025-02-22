import React, { useState } from 'react';
import iconPlus from '../../assets/icons/icon-plus-white.svg';
import iconMinus from '../../assets/icons/icon-minus-white.svg';
import { AccordionProps } from './Accordion.types';
import clsx from 'clsx';

export const Accordion: React.FC<AccordionProps> = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-auto mb-6 flex max-w-[1600px] flex-col items-start justify-center p-2 hover:bg-yellow-600">
      <button
        className="relative flex h-full w-full items-center justify-between p-4 pr-[60px] text-start font-tertiaryFont text-2xl text-white transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={iconPlus}
          alt="icon plus"
          className={clsx(
            'absolute right-0 ml-2 h-[45px] w-[45px] opacity-0 transition-all duration-300 ease-in-out',
            { 'opacity-100': !isOpen },
          )}
        ></img>
        <img
          src={iconMinus}
          alt="icon minus"
          className={clsx(
            'absolute right-0 ml-2 h-[45px] w-[45px] opacity-0 transition-all duration-300 ease-in-out',
            isOpen && 'opacity-100',
          )}
        ></img>
      </button>
      <div
        className={clsx(
          'h-0 min-h-0 w-full bg-gray-800 font-tertiaryFont text-white opacity-0 transition-all duration-300 ease-in-out',
          isOpen && 'h-full min-h-[100%] p-6 opacity-100',
        )}
      >
        {desc}
      </div>
    </div>
  );
};
