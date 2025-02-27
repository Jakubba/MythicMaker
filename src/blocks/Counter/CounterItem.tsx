import React, { useEffect, useState } from 'react';
import { CounterItemProps } from './Counter.types';

export const CounterItem: React.FC<CounterItemProps> = ({ number, title, desc }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;
    const steps = Math.ceil(duration / intervalTime);
    const increment = number / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setCurrentNumber((prev) => Math.min(prev + increment, number));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCurrentNumber(number);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [number]);

  return (
    <div className="mb-[45px] flex w-auto items-start justify-center bg-white p-8 md:mb-0">
      <span className="text-4xl font-bold text-gray-800">{Math.round(currentNumber)} +</span>
      <div className="ml-2 flex flex-col items-start justify-center">
        <h3 className="text-xl font-bold uppercase text-gray-800">{title}</h3>
        <p className="text-sm font-semibold uppercase text-gray-800">{desc}</p>
      </div>
    </div>
  );
};
