import React from 'react';
import { Field } from 'formik';
import { InputFieldProps } from './Input.types';

const InputField: React.FC<InputFieldProps> = ({ id, name, type, placeholder, className = '' }) => {
  return (
    <Field
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`mb-2 w-full min-w-[300px] border-b-2 border-transparent border-b-white bg-transparent p-2 font-secondaryFont text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-transparent ${className}`}
    />
  );
};

export default InputField;
