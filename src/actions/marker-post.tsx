'use server';

import { MARKER_POST } from '@/functions/api';
import { MarkerPost } from '@/zodSchema/markerPost';
import { cookies } from 'next/headers';

export default async function postMarker(data: MarkerPost, bookId: string) {
  try {
    const token = cookies().get('token')?.value;
    console.log(`token`, token);

    if (!token) throw new Error('Token não encontrado');

    const dadosTratados = {
      bookId,
      markerName: data.markerName,
      page: +data.page,
      color: data.color,
      content: data.content,
    };

    console.log('dadosd tradadpds', dadosTratados);

    const { url } = MARKER_POST();
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
    return { data: null, ok: false, error: 'Erro ao enviar marker' };
  }
}
