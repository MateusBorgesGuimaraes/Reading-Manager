import FolderPage from '@/components/conta/books/folder/folderPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Livros | Minha Conta',
};

export default async function BooksPage() {
  return <FolderPage />;
}
