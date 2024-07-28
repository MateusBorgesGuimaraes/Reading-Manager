'use server';

import { USER_GET } from '@/functions/api';
import { UserAPI } from '@/types/types';
import { cookies } from 'next/headers';

export default async function userGet() {
  try {
    const token = cookies().get('token')?.value;
    console.log('Token:', token);
    if (!token) throw new Error('Token não encontrado');

    const { url } = USER_GET();
    console.log('URL:', url);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    });
    console.log('Response status:', response.status);
    if (!response.ok) {
      const errorData = await response.json();
      return {
        data: null,
        ok: false,
        error: errorData.error || 'Erro ao pegar o usuario',
      };
    }

    const dataRes = (await response.json()) as UserAPI;

    return { data: dataRes, ok: true, error: '' };
  } catch (error: unknown) {
    console.log(error);
    return { data: null, ok: false, error: 'Erro ao logar' };
  }
}
