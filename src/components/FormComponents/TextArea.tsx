import { FC } from 'react';

interface TextAreaFormProps {
  name: string;
  label: string;
  type: string;
  register: any;
  error?: string;
}

const TextAreaFormProps: FC<TextAreaFormProps> = ({
  name,
  label,
  type,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-xl text-green-600">
        {label}
      </label>
      <textarea
        id={name}
        type={type}
        {...register(name)}
        className="text-gray-700 px-1 bg-gray-200 rounded-[4px]  hover:bg-gray-300 duration-300 outline-green-600 h-[18.75rem] resize-none"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default TextAreaFormProps;
