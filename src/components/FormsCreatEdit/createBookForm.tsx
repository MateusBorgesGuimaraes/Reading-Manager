'use client';

import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';

import postFolder from '@/actions/folder-post';
import { useToast } from '../ui/use-toast';
import { BookPost, booksPostSchema } from '@/zodSchema/bookPosts';
import SelectForm from '../FormComponents/selectForm';

export default function CreateBookFormFolder() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<BookPost>({
    resolver: zodResolver(booksPostSchema),
    mode: 'onChange',
  });

  const [error, setError] = React.useState('');

  const { toast } = useToast();

  async function onSubmit(dataSend: FieldValues) {
    console.log(dataSend);
    // const folderStatus = await postFolder(dataSend);
    // if (folderStatus.ok) {
    //   toast({
    //     title: 'Pasta adicionada',
    //     description: `Nova pasta ${dataSend.name} criada com sucesso`,
    //   });
    //   reset();
    //   onFolderCreated();
    // } else {
    //   setError('Erro ao postar o folder');
    //   setTimeout(() => {
    //     setError('');
    //   }, 2000);

    //   toast({
    //     variant: 'destructive',
    //     title: 'oh não! Erro ao criar a pasta',
    //     description: 'Algum problema ocorreu ao criar a pasta.',
    //   });
    // }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 items-center justify-center"
    >
      <div className="flex items-center gap-4 w-full">
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

      <div className="flex items-center gap-4 w-full">
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

      <div className="flex items-center justify-center gap-4 w-full">
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
            register={register}
            error={errors.timeSpent?.message}
          />
        </div>
      </div>

      {/* {error && (
        <p className="text-red-600 text-sm self-start -mt-4">{error}</p>
      )} */}

      <div
        className="flex gap-4 smallest:flex-nowrap
      flex-wrap"
      ></div>
      <ButtonForm disabled={isSubmitting} text="CRIAR" />
    </form>
  );
}
