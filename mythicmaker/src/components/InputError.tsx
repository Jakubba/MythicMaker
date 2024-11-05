// InputError.tsx
import React from 'react';
import { ErrorMessage } from 'formik';

interface InputErrorProps {
  name: string;
  className?: string;
}

const InputError: React.FC<InputErrorProps> = ({ name, className }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className={`text-sm text-red-500 ${className}`}
    />
  );
};

export default InputError;
