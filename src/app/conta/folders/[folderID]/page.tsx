import BooksPageFull from '@/components/conta/books/book/booksPageFull';
import React from 'react';

type PageParams = {
  params: {
    folderID: string;
  };
};

export default function FolderPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <BooksPageFull params={params.folderID} />
    </div>
  );
}
