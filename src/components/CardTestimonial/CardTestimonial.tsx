import Image from 'next/image';

export default function CardTestimonial({
  text,
  image,
  name,
}: {
  text: string;
  image: string;
  name: string;
}) {
  return (
    <div className="w-full max-w-[380px] bg-white rounded-lg shadow-sm hover:shadow-lg duration-300 flex flex-col min-h-96 max-h-max gap-6 items-center justify-center px-8 py-6 cursor-pointer">
      <div className="flex flex-col gap-1 items-center justify-center">
        <Image
          className="rounded-full object-cover w-20 h-20"
          src={image}
          width={80}
          height={80}
          alt={`foto do ${name}`}
        />
        <h4 className="uppercase font-title text-xl text-green-500">{name}</h4>
      </div>

      <p className="text-gray-700 text-center">{text}</p>
    </div>
  );
}
