// InputField.tsx
import React from 'react';
import { Field } from 'formik';

interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  className = '',
}) => {
  return (
    <Field
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      className={`p-2 mb-2 border-transparent border-b-2 w-full font-secondaryFont placeholder-white text-white border-b-white bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent min-w-[300px] ${className}`}
    />
  );
};

export default InputField;
