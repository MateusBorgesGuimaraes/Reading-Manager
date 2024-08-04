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

export type BookType2 = {
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
  markers: string[];
};

export type MarkerType = {
  markerName: string;
  page: number;
  color: ColorOptions;
  createdAt: string;
  id: string;
};

type BooksByCategory = Record<string, number>;

type MarkersByBook = Record<string, number>;

type BooksByStatus = {
  completo: number;
  lendo: number;
  dropado: number;
  pausado: number;
};

export type StatsData = {
  totalBooks: number;
  booksByCategory: BooksByCategory;
  totalMarkers: number;
  markersByBook: MarkersByBook;
  booksByStatus: BooksByStatus;
  completionRate: number;
  totalReadingTime: number;
};
