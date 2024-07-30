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

export default function CreateBookModal({ id }: { id: string }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div>
          <ButtonIconForm text="NOVO LIVRO" icon="/assets/icons/add-book.svg" />
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[70%] min-h-[90%]">
        <DialogHeader className="font-title text-2xl text-green-800  ">
          <DialogTitle>NOVA PASTA</DialogTitle>

          <DialogDescription className="font-body text-gray-500 ">
            Crie uma nova pasta para organizar suas leituras.
          </DialogDescription>
        </DialogHeader>

        <CreateBookFormFolder />
      </DialogContent>
    </Dialog>
  );
}
