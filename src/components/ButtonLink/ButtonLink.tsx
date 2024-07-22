import Link from 'next/link';

export default async function ButtonLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="font-title text-2xl py-4 w-full text-white bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 duration-300"
    >
      {text}
    </Link>
  );
}
