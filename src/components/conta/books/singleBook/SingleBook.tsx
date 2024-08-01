'use client';

import getSingleBook from '@/actions/get-single-book';
import { BookType } from '@/types/types';
import React from 'react';
import SingleBookMakers from './SingleBookMakers';
import ProgressBar from './ProgressBar';
import ButtonIconForm from '@/components/FormComponents/ButtonIcon';
import TitleDec from '@/components/titleDec/titleDec';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import AddMarkerForm from '../marker/addMarkerForm';

export default function SingleBook({ id }: { id: string }) {
  const [book, setBook] = React.useState<BookType | null>(null);

  const carregarLivro = React.useCallback(async () => {
    const data = await getSingleBook(id);
    if (!data.ok) {
      console.log('erro ao pegar o livro');
    } else {
      setBook(data.data);
    }
  }, [id]);

  React.useEffect(() => {
    carregarLivro();
  }, [carregarLivro]);

  const handleBookUpdate = async () => {
    await carregarLivro();
  };

  if (book === null) {
    return <div>Livro nao encontrado</div>;
  }

  return (
    <section>
      <div className="mb-10 flex justify-between sm:items-center sm:flex-row flex-col">
        <TitleDec text={book.bookname} />
        <h2 className="font-title sm:text-2xl text-xl text-gray-700">
          parou na pagina:{' '}
          <span className="font-title sm:text-4xl text-2xl text-gray-900">
            {book.stopInPage}
          </span>
        </h2>
      </div>
      <SingleBookMakers book={book} onBookUpdate={handleBookUpdate} />
      <div className="flex items-center justify-center gap-2 flex-col lg:flex-row mt-10">
        <div className="max-w-[31.25rem] w-full mt-4 ">
          <ProgressBar
            currentPage={book.stopInPage}
            totalPages={book.pagesNumber}
          />
        </div>

        <div className="w-full flex gap-5 lg:justify-end justify-center">
          <Dialog>
            <DialogTrigger>
              <ButtonIconForm
                text="novo marker"
                icon="/assets/icons/add-marker.svg"
              />
            </DialogTrigger>
            <DialogContent className="min-w-[60%]">
              <DialogHeader className="font-title text-2xl text-green-800">
                <DialogTitle>NOVO MARCADOR</DialogTitle>

                <DialogDescription className="font-body text-gray-500 smallest:block hidden">
                  Crie um novo marcador para adiciaonar notas e salvar seu
                  progresso.
                </DialogDescription>
              </DialogHeader>

              <div>
                <AddMarkerForm
                  bookId={book.id}
                  onBookUpdate={handleBookUpdate}
                />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <ButtonIconForm
                text="atualizar status"
                icon="/assets/icons/att-infos.svg"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="font-title text-2xl text-green-800">
                <DialogTitle>ATUALIZAR STATUS</DialogTitle>

                <DialogDescription className="font-body text-gray-500">
                  Atualize o status da sua leitura.
                </DialogDescription>
              </DialogHeader>
              conteudo
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
