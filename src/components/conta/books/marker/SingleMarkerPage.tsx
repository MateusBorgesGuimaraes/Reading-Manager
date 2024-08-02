'use client';

import getMarker from '@/actions/marker-get';
import { useToast } from '@/components/ui/use-toast';
import { MarkerPost } from '@/zodSchema/markerPost';
import Image from 'next/image';
import React from 'react';

export default function SingleMarkerPage({ id }: { id: string }) {
  const [marker, setMarker] = React.useState<MarkerPost | null>(null);
  const { toast } = useToast();

  const carregarMaracador = React.useCallback(async () => {
    const data = await getMarker(id);
    if (!data.ok) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Erro ao carregar marcador',
      });
      return;
    }
    if (data.ok) {
      setMarker(data.data);
    }
  }, [id, toast]);

  React.useEffect(() => {
    carregarMaracador();
  }, [carregarMaracador]);

  function copyOnClick() {
    if (marker?.content) {
      navigator.clipboard.writeText(marker?.content);
      toast({
        title: 'Copiado!!!',
        description: 'Texto copiado com sucesso com sucesso',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Oh não! Erro ao copiar o texto',
        description: 'Algum problema ocorreu ao copiar o texto.',
      });
    }
  }

  return (
    <section className="bg-white lg:p-8  p-4 rounded-lg shadow-sm flex flex-col lg:gap-8 gap-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-body font-bold text-green-800 text-3xl">
          {marker?.markerName}
        </h1>
        <p className="font-title text-gray-700 text-3xl">{marker?.page}</p>
      </div>
      <div className="min-h-[calc(100vh-320px)] bg-gray-100 lg:p-8 p-4 rounded-lg relative">
        <p className="text-gray-700 lg:text-xl text-base leading-6">
          {marker?.content}
        </p>

        <button
          className="absolute right-2 bottom-2 hover:bg-gray-200 hover:p-2 hover:rounded duration-300"
          onClick={copyOnClick}
          title="copiar conteudo"
        >
          <Image
            src={'/assets/icons/copy.svg'}
            width={32}
            height={32}
            alt="icone de copiar texto"
          />
        </button>
      </div>
    </section>
  );
}
