import React, { useState } from 'react';
import iconPlus from './../assets/icons/icon-plus-white.svg';
import iconMinus from './../assets/icons/icon-minus-white.svg';

type AccordionProps = {
  title: string;
  desc: string;
};

export const Accordion: React.FC<AccordionProps> = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start justify-center mb-6 hover:bg-yellow-600 max-w-[1600px] m-auto p-2">
      <button
        className="relative flex items-center text-start justify-between w-full h-full p-4 text-white transition-all duration-300 ease-in-out  font-tertiaryFont  pr-[60px] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={iconPlus}
          alt="icon plus"
          className={`absolute right-0 ml-2 h-[45px] w-[45px] opacity-0 transition-all duration-300 ease-in-out   ${!isOpen ? 'opacity-100' : ''}`}
        ></img>
        <img
          src={iconMinus}
          alt="icon minus"
          className={`absolute right-0 ml-2 h-[45px] w-[45px] opacity-0 transition-all duration-300 ease-in-out  ${isOpen ? 'opacity-100' : ''}`}
        ></img>
      </button>
      <div
        className={`font-tertiaryFont w-full opacity-0 min-h-0 h-0 text-white  transition-all duration-300  ease-in-out bg-gray-800 ${isOpen ? 'min-h-[100%] opacity-100 h-full p-6' : ''}`}
      >
        {desc}
      </div>
    </div>
  );
};
