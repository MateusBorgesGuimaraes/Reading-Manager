'use server';

import { USER_POST } from '@/functions/api';

export default async function userPost(data: any) {
  try {
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      return {
        data: null,
        ok: false,
        error: errorData.error || 'Erro desconhecido',
      };
    }

    const dataRes = await response.json();

    return { data: dataRes, ok: true, error: '' };
  } catch (error: unknown) {
    console.log(error);
    return { data: null, ok: false, error: 'Erro ao logar' };
  }
}
