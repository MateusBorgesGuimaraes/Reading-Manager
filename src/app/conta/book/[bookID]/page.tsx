import BooksPage from '@/components/conta/books/book/booksPage';
import ButtonForm from '@/components/FormComponents/Button';
import ButtonIconForm from '@/components/FormComponents/ButtonIcon';

import React from 'react';

type PageParams = {
  params: {
    bookID: string;
  };
};

export default function SingleBookPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <h1>Ola {params.bookID}</h1>
    </div>
  );
}
