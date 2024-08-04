import SingleMarkerPage from '@/components/conta/books/marker/SingleMarkerPage';
import { Metadata } from 'next';
import React from 'react';

type PageParams = {
  params: {
    markerID: string;
  };
};

export const metadata: Metadata = {
  title: 'Reading Manager',
  description: 'Marcadores',
};

export default function MarkerPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <SingleMarkerPage id={params.markerID} />
    </div>
  );
}
