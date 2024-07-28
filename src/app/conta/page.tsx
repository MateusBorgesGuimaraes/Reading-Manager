'use client';

import { useUser } from '@/context/user-context';
import React from 'react';

export default function ContaPage() {
  const { user } = useUser();
  return (
    <section>
      <h1 className="font-title">Conta Page {user?.username} </h1>
    </section>
  );
}
