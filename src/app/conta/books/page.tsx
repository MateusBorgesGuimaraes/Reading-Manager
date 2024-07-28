import FolderItem from '@/components/conta/books/folder/folderItem';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livros | Minha Conta',
};

export default async function BooksPage() {
  return (
    <div className="max-w-[50rem] min-w-48  mx-auto mt-8 justify-center items-center">
      <div className="flex gap-5 flex-wrap items-center">
        <FolderItem />
        <FolderItem />
        <FolderItem />
        <FolderItem />
        <FolderItem />
      </div>
    </div>
  );
}
