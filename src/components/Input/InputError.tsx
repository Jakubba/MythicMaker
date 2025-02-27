import React from 'react';
import { ErrorMessage } from 'formik';
import { InputErrorProps } from './Input.types';

const InputError: React.FC<InputErrorProps> = ({ name, className }) => {
  return (
    <ErrorMessage name={name} component="div" className={`text-sm text-red-500 ${className}`} />
  );
};

export default InputError;
