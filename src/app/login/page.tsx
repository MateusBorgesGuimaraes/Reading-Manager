'use client';

import userPost from '@/actions/user-post';
import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/zodSchema/login';
import type { User } from '@/zodSchema/login';
import React from 'react';

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<User>({ resolver: zodResolver(loginSchema), mode: 'onChange' });

  const [error, setError] = React.useState('');
  async function onSubmit(dataSend: FieldValues) {
    const user = await userPost(dataSend);
    if (user.ok) {
      console.log(user);
    } else {
      setError('Usuario ou senha nao encontrados');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  }

  return (
    <section className="container h-[calc(100vh-81px)] flex items-center justify-center lg:my-4">
      <div className="lg:bg-white lg:rounded-lg lg:shadow-md w-full h-full lg:h-5/6 flex  justify-center items-center flex-col smallest:px-8 px-1 max-w-[600px] lg:px-12 lg:py-12 ">
        <h1 className="smallest:text-3xl text-green-800 text-2xl font-title mb-8 self-start">
          LOGAR NA CONTA
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full flex flex-col gap-4 lg:max-w-[600px] items-center justify-center"
        >
          <InputForm
            name="username"
            label="nome"
            type="text"
            register={register}
            error={errors.username?.message}
          />

          {error && (
            <p className="text-red-600 text-sm self-start -mt-4">{error}</p>
          )}

          <InputForm
            name="password"
            label="senha"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          {error && (
            <p className="text-red-600 text-sm self-start -mt-4">{error}</p>
          )}

          <ButtonForm disabled={isSubmitting} text="ENTRAR" />

          <Link
            href={'/login/criar'}
            className="smallest:text-base text-sm text-gray-500 underline hover:text-gray-400 duration-300 self-start"
          >
            não tem uma conta ainda? cadastre-se já!
          </Link>
        </form>
      </div>
    </section>
  );
}
