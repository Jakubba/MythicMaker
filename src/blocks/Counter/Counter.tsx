import React from 'react';
import { CounterProps } from './Counter.types';
import { CounterItem } from './CounterItem';

export const Counter: React.FC<CounterProps> = ({
  number1,
  number2,
  number3,
  number4,
  title1,
  title2,
  title3,
  title4,
  description1,
  description2,
  description3,
  description4,
}) => {
  const counters = [
    { number: number1, title: title1, desc: description1 },
    { number: number2, title: title2, desc: description2 },
    { number: number3, title: title3, desc: description3 },
    { number: number4, title: title4, desc: description4 },
  ];

  return (
    <div className="m-auto flex max-w-[1600px] flex-col items-center justify-between bg-slate-800 p-4 md:flex-row lg:p-20">
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
