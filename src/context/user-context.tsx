'use client';

import { UserAPI } from '@/types/types';
import React from 'react';

type IUserContext = {
  user: UserAPI | null;
  setUser: React.Dispatch<React.SetStateAction<UserAPI | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error('Use context deve estar dentro de um provider');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserAPI | null;
}) {
  const [userState, setUser] = React.useState<UserAPI | null>(user);
  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
