'use server';

import { FOLDER_POST } from '@/functions/api';
import { cookies } from 'next/headers';

export default async function postFolder(data: any) {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw new Error('Token não encontrado');

    const { url } = FOLDER_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
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
    return { data: null, ok: false, error: 'Erro ao enviar folder' };
  }
}
