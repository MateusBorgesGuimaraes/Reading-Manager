'use client';

import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { BookType } from '@/types/types';
import { useToast } from '@/components/ui/use-toast';
import SelectForm from '@/components/FormComponents/selectForm';
import { BookAtt, booksAttSchema } from '@/zodSchema/attBook';
import putBook from '@/actions/put-book';

type AttBookFormProps = {
  book: BookType;
  onBookUpdate: () => void;
};

export default function AttBookForm({ book, onBookUpdate }: AttBookFormProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<BookAtt>({
    resolver: zodResolver(booksAttSchema),
    mode: 'onChange',
  });

  const { toast } = useToast();

  async function onSubmit(dataSend: BookAtt) {
    const markers = [];
    for (let marker of book.markers) {
      markers.push(marker.id);
    }
    const dataFormatada = {
      ...book,
      markers: markers,
      stopInPage: +dataSend.stopInPage,
      timeSpent: dataSend.timeSpent,
      statusOfreading: dataSend.statusOfreading,
    };

    const bookStatus = await putBook(dataFormatada);
    if (bookStatus.ok) {
      toast({
        title: 'Status do livro atualizado',
        description: `Statatus do livro ${dataFormatada.bookname} atualizado com sucesso`,
      });
      reset();
      await onBookUpdate();
    } else {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao atualizar o livro',
        description: 'Algum problema ocorreu ao atualizar o livro.',
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-2 sm:gap-4 items-center justify-center"
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full sm:flex-row flex-col">
        <InputForm
          name="stopInPage"
          label="nova pagina"
          type="number"
          register={register}
          error={errors.stopInPage?.message}
        />

        <InputForm
          name="timeSpent"
          label="tempo gasto"
          placehoder="00:00"
          type="text"
          register={register}
          error={errors.timeSpent?.message}
        />
      </div>

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

      <ButtonForm disabled={isSubmitting} text="ATUALIZAR" />
    </form>
  );
}
