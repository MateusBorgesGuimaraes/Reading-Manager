'use client';

import BooksPage from '@/components/conta/books/book/booksPage';
import CreateBookModal from '@/components/FormsCreatEdit/createBookModal';
import { BookType } from '@/types/types';

import React from 'react';

export default function BooksPageFull({ params }: { params: string }) {
  const [books, setBooks] = React.useState<BookType[]>([]);

  const updateBooks = (newBook: BookType) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  return (
    <>
      <BooksPage books={books} setBooks={setBooks} params={params} />
      <CreateBookModal id={params} onBookCreated={updateBooks} />
    </>
  );
}
