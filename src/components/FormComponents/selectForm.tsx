import React, { FC } from 'react';

interface SelectFormProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  register: any;
  error?: string;
}

const SelectForm: FC<SelectFormProps> = ({
  name,
  label,
  options,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-xl text-green-600">
        {label}
      </label>
      <select
        id={name}
        {...register(name)}
        className="text-gray-700 px-1 bg-gray-200 rounded-[4px] h-10 hover:bg-gray-300 duration-300 outline-green-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default SelectForm;
