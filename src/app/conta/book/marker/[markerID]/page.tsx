import SingleMarkerPage from '@/components/conta/books/marker/SingleMarkerPage';
import React from 'react';

type PageParams = {
  params: {
    markerID: string;
  };
};

export default function MarkerPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <SingleMarkerPage id={params.markerID} />
    </div>
  );
}
