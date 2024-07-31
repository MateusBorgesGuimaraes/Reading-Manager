'use server';

import { BOOK_POST } from '@/functions/api';
import { BookPost } from '@/zodSchema/bookPosts';
import { cookies } from 'next/headers';

export default async function postBook(data: BookPost, folderId: string) {
  try {
    const token = cookies().get('token')?.value;

    if (!token) throw new Error('Token não encontrado');
    console.log(`folder id:`, folderId);
    const dadosTratados = {
      folderId,
      bookname: data.bookname,
      author: data.author,
      pagesNumber: +data.pagesNumber,
      stopInPage: +data.pagesNumber,
      statusOfreading: data.statusOfreading,
      timeSpent: data.timeSpent,
    };

    const { url } = BOOK_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dadosTratados),
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
    return { data: null, ok: false, error: 'Erro ao enviar Livro' };
  }
}
