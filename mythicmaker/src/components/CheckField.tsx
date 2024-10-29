import React from 'react';
import { Field } from 'formik';

interface CheckFieldProps {
  id: string;
  name: string;
  label?: string;
  className?: string;
}

const CheckField: React.FC<CheckFieldProps> = ({
  id,
  name,
  label = '',
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-white cursor-pointer"
      >
        {label || 'Nie jestem robotem'}
      </label>
    </div>
  );
};

export default CheckField;
