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
import { useUser } from '@/context/user-context';
import { formatarData } from '@/functions/formatData';
import Image from 'next/image';
import InputForm from '@/components/FormComponents/Input';
import CreateFolder from '@/components/FormsCreatEdit/createFolder';

export default function FolderPage() {
  const { user } = useUser();

  return (
    <ul className="mx-auto mt-8 grid sm:max-w-[52rem] grid-cols-[repeat(auto-fill,minmax(192px,1fr))] justify-center gap-5 max-w-[480px] ">
      {user?.folders.map((folder) => (
        <li key={folder.id} className="flex justify-center">
          <FolderItem
            link={folder.id}
            color={defineColor(folder.color)}
            genero={folder.name}
            quantity={folder.books.length}
            data={formatarData(folder.createdAt)}
          />
        </li>
      ))}

      <li className="flex justify-center group ">
        <Dialog>
          <DialogTrigger>
            <div className="p-3 h-full bg-white min-w-48 rounded-lg shadow-sm flex  hover:shadow-md duration-300 items-center justify-center border-2 border-dashed">
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
              NOVA PASTA
            </DialogHeader>
            <DialogDescription>
              Crie uma nova pasta para organiozar suas leituras.
            </DialogDescription>
            <CreateFolder />
          </DialogContent>
        </Dialog>
      </li>
    </ul>
  );
}
