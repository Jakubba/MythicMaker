import React from 'react';
import bgLogin from '../../assets/image/login.png';

export const LoginFormBackground = () => {
  return (
    <img
      className="absolute object-cover w-full h-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      src={bgLogin}
      alt="Background"
    />
  );
};
