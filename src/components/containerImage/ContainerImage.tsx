import Image from 'next/image';

export default async function ContainerImage({
  alt,
  image,
}: {
  alt: string;
  image: string;
}) {
  return (
    <div className="p-10 border border-gray-200 rounded-lg shadow-sm max-w-[580px]">
      <Image src={image} width={500} height={238} alt={alt} />
    </div>
  );
}
