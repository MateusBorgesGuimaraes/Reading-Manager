'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import defineColor from '@/functions/defineColor';
import FolderItem from './folderItem';
import { formatarData } from '@/functions/formatData';
import Image from 'next/image';
import CreateFolder from '@/components/FormsCreatEdit/createFolder';
import React from 'react';
import getFolders from '@/actions/get-folders';
import { FolderAPI } from '@/types/types';
import deleteFolder from '@/actions/folder-delete';
import { useToast } from '@/components/ui/use-toast';

export default function FolderPage() {
  const [folders, setFolders] = React.useState<FolderAPI[] | null>(null);
  const { toast } = useToast();

  const fetchFolders = async () => {
    const data = await getFolders();
    if (data.ok) {
      setFolders(data.data);
    }
  };

  React.useEffect(() => {
    fetchFolders();
  }, []);

  const handleFolderCreated = () => {
    fetchFolders();
  };

  const handleDeleteFolder = async (id: string) => {
    const result = await deleteFolder(id);
    if (result.ok) {
      fetchFolders();
      toast({
        title: 'Pasta deletada',
        description: `Pasta deletada com sucesso`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'oh não! Erro ao deletar a pasta',
        description: 'Algum problema ocorreu ao deletar a pasta.',
      });
    }
  };

  if (folders === null) {
    return (
      <div>
        <h1>Não esxitem folders</h1>
      </div>
    );
  } else {
    return (
      <ul className="mx-auto mt-8 grid sm:max-w-[52rem] grid-cols-[repeat(auto-fill,minmax(192px,1fr))] justify-center gap-5 max-w-[480px] pb-8">
        {folders.map((folder) => (
          <li key={folder.id} className="flex justify-center">
            <FolderItem
              link={folder.id}
              color={defineColor(folder.color)}
              genero={folder.name}
              quantity={folder.books.length}
              data={formatarData(folder.createdAt)}
              onDelete={() => handleDeleteFolder(folder.id)}
            />
          </li>
        ))}

        <li className="flex justify-center group ">
          <Dialog>
            <DialogTrigger>
              <div className="p-3 sm:h-full min-h-[9.5rem] bg-white min-w-48 rounded-lg shadow-sm flex  hover:shadow-md duration-300 items-center justify-center border-2 border-dashed">
                <div className="bg-gray-100 w-14 h-14 rounded-full flex items-center justify-center group-hover:bg-gray-200 group-hover:scale-110 duration-300">
                  <Image
                    src={'/assets/icons/add-more.svg'}
                    height={32}
                    width={32}
                    alt="icone para adicioar nova pasta"
                  />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="font-title text-2xl text-green-800">
                <DialogTitle>NOVA PASTA</DialogTitle>

                <DialogDescription className="font-body text-gray-500">
                  Crie uma nova pasta para organizar suas leituras.
                </DialogDescription>
              </DialogHeader>
              <CreateFolder onFolderCreated={handleFolderCreated} />
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    );
  }
}
