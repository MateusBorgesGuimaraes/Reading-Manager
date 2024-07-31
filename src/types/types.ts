type ReadingStatus = 'Completo' | 'Lendo' | 'Dropado' | 'Pausado';

type ColorOptions =
  | 'amarelo'
  | 'azul'
  | 'ciano'
  | 'verde'
  | 'vermelho'
  | 'laranja'
  | 'roxo'
  | 'cinza';

export type FolderAPI = {
  books: string[];
  color: ColorOptions;
  createdAt: Date;
  id: string;
  name: string;
};

export type UserAPI = {
  username: string;
  email: string;
  // token: string;
  // folders: FolderAPI[];
};

export type BookType = {
  bookname: string;
  id: string;
  author: string;
  pagesNumber: number;
  stopInPage: number;
  statusOfreading: ReadingStatus;
  timeSpent: string;
  folder: string;
  createdAt: Date;
  updatedAt: Date;
  markers: MarkerType[];
};

export type MarkerType = {
  markerName: string;
  page: number;
  // content?: string;
  // book: string;
  color: ColorOptions;
  createdAt: string;
  id: string;
};
