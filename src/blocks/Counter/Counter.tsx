import React from 'react';
import { CounterProps } from './Counter.types';
import { CounterItem } from './CounterItem';

export const Counter: React.FC<CounterProps> = ({ data }) => {
  return (
    <div className="m-auto flex max-w-[1600px] flex-col items-center justify-between bg-slate-800 p-4 md:flex-row lg:p-20">
      {data.map((counter, index) => (
        <CounterItem
          key={index}
          number={counter.number}
          title={counter.title}
          desc={counter.description}
        />
      ))}
    </div>
  );
};
