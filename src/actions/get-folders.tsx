'use server';

import { FOLDERS_GET } from '@/functions/api';
import { cookies } from 'next/headers';

export default async function getFolders() {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw new Error('Token não encontrado');

    const { url } = FOLDERS_GET();
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
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
    return { data: null, ok: false, error: 'Erro ao pegar folders' };
  }
}
