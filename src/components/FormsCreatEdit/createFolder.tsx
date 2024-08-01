'use client';

import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';
import { FolderPost, folderPostSchema } from '@/zodSchema/folderPost';
import ColorRadioButton from '../FormComponents/colorRadio';
import defineColor from '@/functions/defineColor';
import postFolder from '@/actions/folder-post';
import { useToast } from '../ui/use-toast';

export default function CreateFolder({
  onFolderCreated,
}: {
  onFolderCreated: () => void;
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FolderPost>({
    resolver: zodResolver(folderPostSchema),
    mode: 'onChange',
  });

  const [error, setError] = React.useState('');

  const { toast } = useToast();

  async function onSubmit(dataSend: FieldValues) {
    const folderStatus = await postFolder(dataSend);
    if (folderStatus.ok) {
      toast({
        title: 'Pasta adicionada',
        description: `Nova pasta ${dataSend.name} criada com sucesso`,
      });
      reset();
      onFolderCreated();
    } else {
      setError('Erro ao postar o folder');
      setTimeout(() => {
        setError('');
      }, 2000);

      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao criar a pasta',
        description: 'Algum problema ocorreu ao criar a pasta.',
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 items-center justify-center"
    >
      <InputForm
        name="name"
        label="nome"
        type="text"
        register={register}
        error={errors.name?.message}
      />

      {error && (
        <p className="text-red-600 text-sm self-start -mt-4">{error}</p>
      )}

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
      <ButtonForm disabled={isSubmitting} text="CRIAR" />
    </form>
  );
}
