'use client';

import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useToast } from '../ui/use-toast';
import { BookPost, booksPostSchema } from '@/zodSchema/bookPosts';
import SelectForm from '../FormComponents/selectForm';
import postBook from '@/actions/book-post';
import { BookType } from '@/types/types';

type CreateBookFormFolderProps = {
  folderId: string;
  onBookCreated: (newBook: BookType) => void;
};

export default function CreateBookFormFolder({
  folderId,
  onBookCreated,
}: CreateBookFormFolderProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<BookPost>({
    resolver: zodResolver(booksPostSchema),
    mode: 'onChange',
  });

  const { toast } = useToast();

  async function onSubmit(dataSend: BookPost) {
    const bookStatus = await postBook(dataSend, folderId);
    if (bookStatus.ok) {
      toast({
        title: 'Pasta adicionada',
        description: `Novo livro ${dataSend.bookname} criado com sucesso`,
      });
      reset();
      onBookCreated(bookStatus.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao criar o livro',
        description: 'Algum problema ocorreu ao criar o livro.',
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2 sm:gap-4 items-center justify-center"
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:flex-row flex-col">
        <div className="w-full">
          <InputForm
            name="bookname"
            label="nome"
            type="text"
            register={register}
            error={errors.bookname?.message}
          />
        </div>

        <div className="w-full">
          <InputForm
            name="author"
            label="autor"
            type="text"
            register={register}
            error={errors.author?.message}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 w-full sm:flex-row flex-col">
        <div className="w-full">
          <InputForm
            name="pagesNumber"
            label="paginas"
            type="number"
            register={register}
            error={errors.pagesNumber?.message}
          />
        </div>

        <div className="w-full">
          <InputForm
            name="stopInPage"
            label="onde parou"
            type="number"
            register={register}
            error={errors.stopInPage?.message}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 sm:gap-4 w-full sm:flex-row flex-col">
        <div className="w-full">
          <SelectForm
            name="statusOfreading"
            label="estagio da leitura"
            options={[
              { value: 'Completo', label: 'Completo' },
              { value: 'Lendo', label: 'Lendo' },
              { value: 'Pausado', label: 'Pausado' },
              { value: 'Dropado', label: 'Dropado' },
            ]}
            register={register}
            error={errors.statusOfreading?.message}
          />
        </div>

        <div className="w-full">
          <InputForm
            name="timeSpent"
            label="tempo gasto"
            type="text"
            placehoder="00:00"
            register={register}
            error={errors.timeSpent?.message}
          />
        </div>
      </div>

      {/* {error && (
        <p className="text-red-600 text-sm self-start -mt-4">{error}</p>
      )} */}

      <div
        className="flex gap-2 sm:gap-4 smallest:flex-nowrap
      flex-wrap"
      ></div>
      <ButtonForm disabled={isSubmitting} text="CRIAR" />
    </form>
  );
}
