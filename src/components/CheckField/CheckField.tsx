import React from 'react';
import { Field } from 'formik';
import { CheckFieldProps } from './CheckField.types';

const CheckField: React.FC<CheckFieldProps> = ({ id, name, label = '', className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Field
        type="checkbox"
        id={id}
        name={name}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <label htmlFor={id} className="ml-2 cursor-pointer text-sm font-medium text-white">
        {label || 'Nie jestem robotem'}
      </label>
    </div>
  );
};

export default CheckField;
