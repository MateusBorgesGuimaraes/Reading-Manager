import React from 'react';

interface ColorRadioButtonProps {
  id: string;
  name: string;
  value: string;
  color: string;
  label: string;
  register: any;
}

const ColorRadioButton: React.FC<ColorRadioButtonProps> = ({
  id,
  name,
  value,
  color = '#6B7280',
  label,
  register,
}) => {
  return (
    <div className="flex items-center cursor-pointer">
      <input
        type="radio"
        id={id}
        {...register(name)}
        value={value}
        className={`appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-inherit/40 checked:border-[4px]  focus:outline-none cursor-pointer duration-300`}
        style={{ backgroundColor: color }}
      />
      <label htmlFor={id} className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default ColorRadioButton;
