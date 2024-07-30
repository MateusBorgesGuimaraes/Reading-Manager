import Image from 'next/image';

type ButtonProps = {
  text: string;
  icon: string;
};

export default function ButtonIconForm({ text, icon }: ButtonProps) {
  return (
    <div
      className={`uppercase bg-blue-600 rounded-sm smallest:text-2xl text-base font-title text-white hover:bg-blue-700 duration-300 mt-3 py-2 smallest:px-6 px-5  flex items-center gap-2 smallest:w-auto w-full smallest:justify-normal justify-center`}
    >
      {text}
      <Image src={icon} height={24} width={24} alt="icone de adicionar livro" />
    </div>
  );
}
