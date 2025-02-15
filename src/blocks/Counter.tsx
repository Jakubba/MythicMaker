import React, { useEffect, useState } from 'react';

type CounterItemProps = {
  number: number;
  title: string;
  desc: string;
};

const CounterItem: React.FC<CounterItemProps> = ({ number, title, desc }) => {
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
    <div className="flex items-start justify-center mb-[45px] md:mb-0 bg-white p-8 w-auto">
      <span className="text-4xl font-bold text-gray-800">
        {Math.round(currentNumber)} +
      </span>
      <div className="flex flex-col items-start justify-center ml-2">
        <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
        <p className="text-sm font-semibold text-gray-800 uppercase">{desc}</p>
      </div>
    </div>
  );
};

export const Counter: React.FC = () => {
  const counters = [
    { number: 99, title: 'Test title 1', desc: 'Description 1' },
    { number: 58, title: 'Test title 2', desc: 'Description 2' },
    { number: 18, title: 'Test title 3', desc: 'Description 3' },
    { number: 180, title: 'Test title 4', desc: 'Description 4' },
  ];

  return (
    <div className="flex flex-col items-center justify-between p-4 lg:p-20 md:flex-row bg-slate-800 max-w-[1600px] m-auto">
      {counters.map((counter, index) => (
        <CounterItem
          key={index}
          number={counter.number}
          title={counter.title}
          desc={counter.desc}
        />
      ))}
    </div>
  );
};
