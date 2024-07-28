'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ButtonContaHeader({
  alt,
  link,
  icon,
  pathname,
}: {
  alt: string;
  link: string;
  icon: string;
  pathname: string;
}) {
  return (
    <li
      className={`bg-green-500 smallest:h-14 smallest:w-14  w-10 h-10 flex items-center justify-center rounded-lg hover:bg-green-700 duration-300 cursor-pointer ${
        pathname === link && 'bg-green-700'
      }`}
    >
      <Link href={link}>
        <Image
          src={icon}
          width={32}
          height={32}
          alt={alt}
          className="w-6 h-6 smallest:w-8 smallest:h-8"
        />
      </Link>
    </li>
  );
}
