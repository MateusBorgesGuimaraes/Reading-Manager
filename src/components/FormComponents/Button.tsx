type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function ButtonForm({ text, disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`uppercase bg-green-600 py-4 rounded-lg text-2xl font-title text-white hover:bg-green-700 duration-300 mt-3 w-full ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {text}
    </button>
  );
}
