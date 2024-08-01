'use client';

import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { BookType } from '@/types/types';
import { MarkerPost, markerPostSchema } from '@/zodSchema/markerPost';
import ColorRadioButton from '@/components/FormComponents/colorRadio';
import defineColor from '@/functions/defineColor';
import TextAreaFormProps from '@/components/FormComponents/TextArea';
import postMarker from '@/actions/marker-post';
import { useToast } from '@/components/ui/use-toast';

type CreateMarkerFormProps = {
  bookId: string;
  onBookUpdate: () => void;
};

export default function AddMarkerForm({
  bookId,
  onBookUpdate,
}: CreateMarkerFormProps) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<MarkerPost>({
    resolver: zodResolver(markerPostSchema),
    mode: 'onChange',
  });

  const { toast } = useToast();

  async function onSubmit(dataSend: MarkerPost) {
    console.log(dataSend);
    const bookStatus = await postMarker(dataSend, bookId);
    if (bookStatus.ok) {
      toast({
        title: 'Pasta adicionada',
        description: `Nova marcação ${dataSend.markerName} criada com sucesso`,
      });
      reset();
      await onBookUpdate();
    } else {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao criar o marcador',
        description: 'Algum problema ocorreu ao criar a marcação.',
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
          name="markerName"
          label="nome do marcador"
          type="text"
          register={register}
          error={errors.markerName?.message}
        />

        <InputForm
          name="page"
          label="parou na pagina"
          type="number"
          register={register}
          error={errors.page?.message}
        />
      </div>

      <div
        className="flex gap-4 smallest:flex-nowrap
      flex-wrap"
      >
        {[
          'azul',
          'vermelho',
          'laranja',
          'roxo',
          'verde',
          'ciano',
          'amarelo',
          'cinza',
        ].map((color) => (
          <ColorRadioButton
            key={color}
            id={`radio-${color}`}
            name="color"
            value={color}
            color={defineColor(color)}
            label=""
            register={register}
          />
        ))}
      </div>

      <TextAreaFormProps
        name="content"
        label="conteudo"
        type="text"
        register={register}
        error={errors.content?.message}
      />

      <div
        className="flex gap-2 sm:gap-4 smallest:flex-nowrap
      flex-wrap"
      ></div>
      <ButtonForm disabled={isSubmitting} text="CRIAR" />
    </form>
  );
}
