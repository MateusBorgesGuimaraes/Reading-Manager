'use client';

import getSingleBook from '@/actions/get-single-book';
import { BookType } from '@/types/types';
import React from 'react';
import SingleBookMakers from './SingleBookMakers';

export default function SingleBook({ id }: { id: string }) {
  const [book, setBook] = React.useState<BookType | null>(null);

  React.useEffect(() => {
    async function carregarLivro() {
      const data = await getSingleBook(id);
      if (!data.ok) {
        console.log('erro ao pegar o livro');
      } else {
        setBook(data.data);
      }
    }
    carregarLivro();
  }, [id]);

  if (book === null) {
    return <div>Livro nao encontrado</div>;
  }

  return (
    <section>
      <SingleBookMakers book={book} />
    </section>
  );
}
