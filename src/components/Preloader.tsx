import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-16 h-16 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"></div>
    </div>
  );
};

export default Preloader;
