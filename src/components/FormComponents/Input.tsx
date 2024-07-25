import { FC } from 'react';

interface InputFormProps {
  name: string;
  label: string;
  type: string;
  register: any;
  error?: string;
}

const InputForm: FC<InputFormProps> = ({
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
      <input
        id={name}
        type={type}
        {...register(name)}
        className="text-gray-700 px-1 bg-gray-200 rounded-[4px] h-10 hover:bg-gray-300 duration-300 outline-green-600"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default InputForm;
