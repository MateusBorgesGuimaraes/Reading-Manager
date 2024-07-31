'use server';

import { BOOK_DELETE } from '@/functions/api';
import { cookies } from 'next/headers';

export default async function deleteBook(id: string) {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw new Error('Token não encontrado');

    const { url } = BOOK_DELETE(id);
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        ok: false,
        error: errorData.error || 'Erro desconhecido',
      };
    }

    return { ok: true, error: '' };
  } catch (error: unknown) {
    console.log(error);
    return { data: null, ok: false, error: 'Erro ao deletar livro' };
  }
}
