'use server';

import { BOOK_PUT } from '@/functions/api';
import { BookType2 } from '@/types/types';
import { cookies } from 'next/headers';

export default async function putBook(data: BookType2) {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw new Error('Token não encontrado');

    const { url } = BOOK_PUT(data.id);
    const response = await fetch(url, {
      method: 'PUT',
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
    return { data: null, ok: false, error: 'Erro atualizar status do livro' };
  }
}
