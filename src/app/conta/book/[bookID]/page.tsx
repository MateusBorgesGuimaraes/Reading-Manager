import SingleBook from '@/components/conta/books/singleBook/SingleBook';
import { Metadata } from 'next';
import React from 'react';

type PageParams = {
  params: {
    bookID: string;
  };
};

export const metadata: Metadata = {
  title: 'Reading Manager',
  description: 'Livro',
};

export default function SingleBookPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <SingleBook id={params.bookID} />
    </div>
  );
}
