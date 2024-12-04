import React from 'react';
import bgLogin from '../../assets/image/login.png';

export const LoginFormBackground = () => {
  return (
    <div>
      <div className="absolute top-0 w-full h-[520px] bg-gradient-to-b from-gray-800/100 via-red-800/10 to-transparent z-10"></div>
      <img
        className="absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        src={bgLogin}
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-transparent to-transparent"></div>
    </div>
  );
};
