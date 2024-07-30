import BooksPage from '@/components/conta/books/book/booksPage';
import CreateBookModal from '@/components/FormsCreatEdit/createBookModal';

import React from 'react';

type PageParams = {
  params: {
    folderID: string;
  };
};

export default function FolderPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <BooksPage params={params} />
      <CreateBookModal id={params.folderID} />
    </div>
  );
}
