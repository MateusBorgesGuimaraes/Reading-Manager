import markerDelete from '@/actions/marker-delete';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import defineColor from '@/functions/defineColor';
import { formatarData } from '@/functions/formatData';
import { BookType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SingleBookMakers({
  book,
  onBookUpdate,
}: {
  book: BookType;
  onBookUpdate: () => void;
}) {
  const { toast } = useToast();
  const handleDeleteMarker = async (markerId: string) => {
    const result = await markerDelete(markerId);
    if (result.ok) {
      toast({
        title: 'Marcador deletado',
        description: 'Marcador deletado com sucesso',
      });
      await onBookUpdate();
    } else {
      toast({
        variant: 'destructive',
        title: 'Oh não! Erro ao deletar o marcador',
        description: 'Algum problema ocorreu ao deletar o marcador.',
      });
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>Marcadores no livro.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-body text-green-600 text-xl">
              Abrir
            </TableHead>
            <TableHead className="font-body text-green-600 text-xl">
              marcador
            </TableHead>
            <TableHead className="font-body text-green-600 text-xl">
              pagina
            </TableHead>
            <TableHead className="font-body text-green-600 text-xl">
              criação
            </TableHead>
            <TableHead className="font-body text-green-600 text-xl">
              excluir
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-base text-gray-600">
          {book.markers?.map((marker) => (
            <TableRow key={marker.id}>
              <TableCell className="text-blue-600 underline">
                <Link href={`/conta/book/marker/${marker.id}`}>ver mais</Link>
              </TableCell>
              <TableCell
                style={{
                  color: `${defineColor(marker.color)}`,
                }}
              >
                {marker.markerName}
              </TableCell>
              <TableCell>{marker.page}</TableCell>
              <TableCell>{formatarData(book.createdAt)}</TableCell>
              <TableCell>
                <button
                  className="flex text-lg items-center justify-between p-2 w-full sm:gap-0 gap-4 rounded hover:text-red-500 hover:scale-110 duration-300 "
                  onClick={() => handleDeleteMarker(marker.id)}
                >
                  excluir
                  <Image
                    src={`/assets/icons/delete.svg`}
                    height={14}
                    width={14}
                    alt="icone de excluir livro"
                  />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
