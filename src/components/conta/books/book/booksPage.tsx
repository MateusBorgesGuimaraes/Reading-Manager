'use client';

import getBooksOfFolder from '@/actions/get-books';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import defineColorByStatus from '@/functions/defineColorByStatus';
import { formatarData } from '@/functions/formatData';
import { BookType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

type PageParams = {
  params: {
    folderID: string;
  };
};

export default function BooksPage({ params }: PageParams) {
  const [books, setBooks] = React.useState<BookType[] | null>(null);
  const [errorGetBooks, setErrorGetBooks] = React.useState<null | boolean>(
    null,
  );

  React.useEffect(() => {
    async function getBooksById(id: string) {
      const data = await getBooksOfFolder(id);
      if (data.ok) {
        setBooks(data.data);
      } else {
        setErrorGetBooks(true);
        console.log(data);
      }
    }
    getBooksById(params.folderID);
  }, [params]);

  return (
    <Table>
      <TableCaption>Livros na pasta.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-body text-green-600 text-xl">
            nome
          </TableHead>
          <TableHead className="font-body text-green-600 text-xl">
            status
          </TableHead>
          <TableHead className="font-body text-green-600 text-xl">
            modificado
          </TableHead>
          <TableHead className="font-body text-green-600 text-xl">
            criação
          </TableHead>
          <TableHead className="font-body text-green-600 text-xl">
            excluir
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-base text-gray-600">
        {books?.map((book) => (
          <TableRow key={book.id}>
            <TableCell className="text-blue-600 underline">
              <Link href={`/conta/book/${book.id}`}>{book.bookname}</Link>
            </TableCell>
            <TableCell
              style={{
                color: `${defineColorByStatus(book.statusOfreading)}`,
              }}
            >
              {book.statusOfreading}
            </TableCell>
            <TableCell>{formatarData(book.updatedAt)}</TableCell>
            <TableCell>{formatarData(book.createdAt)}</TableCell>
            <TableCell>
              <button className="flex text-lg items-center justify-between p-2 w-full sm:gap-0 gap-4 rounded hover:text-red-500 hover:scale-110 duration-300">
                excluir
                <Image
                  src={`/assets/icons/delete.svg`}
                  height={14}
                  width={14}
                  alt="icone de excluir livro"
                />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
