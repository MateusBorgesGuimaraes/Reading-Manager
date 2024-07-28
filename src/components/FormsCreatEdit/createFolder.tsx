'use client';

import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';
import { useUser } from '@/context/user-context';
import { FolderPost, folderPostSchema } from '@/zodSchema/folderPost';
import ColorRadioButton from '../FormComponents/colorRadio';
import defineColor from '@/functions/defineColor';

export default function CreateFolder() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<FolderPost>({
    resolver: zodResolver(folderPostSchema),
    mode: 'onChange',
  });

  const [error, setError] = React.useState('');
  const { setUser } = useUser();

  async function onSubmit(dataSend: FieldValues) {
    // const status = await userRegister(dataSend);
    // if (status.ok) {
    //   const { data: user } = await userGet();
    //   setUser(user);
    //   window.location.href = '/conta';
    // } else {
    //   setError('Usuario ou senha nao encontrados');
    //   setTimeout(() => {
    //     setError('');
    //   }, 2000);
    // }
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full flex flex-col gap-4 lg:max-w-[600px] items-center justify-center"
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

      <div className="flex gap-4">
        <ColorRadioButton
          id="radio-azul"
          name="color"
          value="azul"
          color={defineColor('azul')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-vermelho"
          name="color"
          value="vermelho"
          color={defineColor('vermelho')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-laranja"
          name="color"
          value="laranja"
          color={defineColor('laranja')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-roxo"
          name="color"
          value="roxo"
          color={defineColor('roxo')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-verde"
          name="color"
          value="verde"
          color={defineColor('verde')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-ciano"
          name="color"
          value="ciano"
          color={defineColor('ciano')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-amarelo"
          name="color"
          value="amarelo"
          color={defineColor('amarelo')}
          label=""
          register={register}
        />

        <ColorRadioButton
          id="radio-cinza"
          name="color"
          value="cinza"
          color={defineColor('cinza')}
          label=""
          register={register}
        />
      </div>
      <ButtonForm disabled={isSubmitting} text="CADASTRAR" />
    </form>
  );
}
