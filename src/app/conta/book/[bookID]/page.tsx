import SingleBook from '@/components/conta/books/singleBook/SingleBook';
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
      <SingleBook id={params.bookID} />
    </div>
  );
}
