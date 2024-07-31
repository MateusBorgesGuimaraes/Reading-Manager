'use client';

import ButtonIconForm from '@/components/FormComponents/ButtonIcon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import CreateBookFormFolder from './createBookForm';
import { BookType } from '@/types/types';

type CreateBookModalProps = {
  id: string;
  onBookCreated: (newBook: BookType) => void;
};

export default function CreateBookModal({
  id,
  onBookCreated,
}: CreateBookModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <ButtonIconForm text="NOVO LIVRO" icon="/assets/icons/add-book.svg" />
        </div>
      </DialogTrigger>
      <DialogContent className="md:min-w-[768px] min-w-full">
        <DialogHeader className="font-title text-2xl text-green-800  ">
          <DialogTitle>NOVA PASTA</DialogTitle>

          <DialogDescription className="font-body text-gray-500 ">
            Crie uma nova pasta para organizar suas leituras.
          </DialogDescription>
        </DialogHeader>

        <CreateBookFormFolder folderId={id} onBookCreated={onBookCreated} />
      </DialogContent>
    </Dialog>
  );
}
