import Image from 'next/image';

export default function TitleDec({ text }: { text: string }) {
  return (
    <div className="flex gap-6 items-center">
      <h1 className="text-4xl text-green-600">{text}</h1>
      <Image
        src={'/assets/icons/dec-hero.svg'}
        height={21}
        width={200}
        alt="decoração"
        className="w-40 h-[1.0625rem] smallest:w-[12.5rem] smallest:h-[1.3125rem]"
      />
    </div>
  );
}
