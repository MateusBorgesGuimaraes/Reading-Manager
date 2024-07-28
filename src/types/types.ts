export type FolderAPI = {
  books: string[];
  color: string;
  createdAt: Date;
  id: string;
  name: string;
};

export type UserAPI = {
  username: string;
  email: string;
  // token: string;
  folders: FolderAPI[];
};
