export default function InputForm({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-xl text-green-600">
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="text-gray-700 px-1 bg-gray-200 rounded-[4px] h-10 hover:bg-gray-300 duration-300 outline-green-600"
      />
    </div>
  );
}
