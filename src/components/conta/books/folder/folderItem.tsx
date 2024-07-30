'use client';
import FolderIcon from '@/icons/folderIcon';
import Image from 'next/image';
import Link from 'next/link';

type FolderItemProps = {
  link: string;
  color: string;
  quantity: number;
  data: string;
  genero: string;
  onDelete: () => void;
};

export default function FolderItem({
  link,
  color,
  quantity,
  genero,
  data,
  onDelete,
}: FolderItemProps) {
  return (
    <Link
      href={`/conta/folders/${link}`}
      className="p-3 bg-white min-w-48 rounded-lg shadow-sm flex flex-col gap-5 text-gray-500 hover:shadow-md duration-300 group"
    >
      <div className="flex justify-between items-center">
        <FolderIcon
          color={color}
          className="group-hover:scale-125 duration-300"
        />
        <div
          onClick={(e) => e.preventDefault()}
          className="bg-gray-100 p-1 flex items-center justify-center rounded-sm hover:scale-125 duration-300"
        >
          <button onClick={onDelete}>
            <Image
              src={'/assets/icons/delete.svg'}
              height={14}
              width={14}
              alt="deletar folder"
            />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <p>Items: {quantity}</p>
        <p style={{ color: `${color}` }} className="capitalize">
          {genero}
        </p>
        <div className="text-sm flex gap-1 items-center">
          <Image
            src={'/assets/icons/calendar.svg'}
            height={16}
            width={16}
            alt="icone de um calendario"
          />
          criado em {data}
        </div>
      </div>
    </Link>
  );
}
