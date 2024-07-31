import SingleBook from '@/components/conta/books/singleBook/SingleBook';
import ButtonIconForm from '@/components/FormComponents/ButtonIcon';
import React from 'react';

type PageParams = {
  params: {
    bookID: string;
  };
};

export default function SingleBookPage({ params }: PageParams) {
  return (
    <div className="my-8">
      <SingleBook id={params.bookID} />
      <div className="w-full flex items-end gap-5 mt-5 justify-end">
        <ButtonIconForm
          text="novo marker"
          icon="/assets/icons/add-marker.svg"
        />

        <ButtonIconForm
          text="atualizar status"
          icon="/assets/icons/att-infos.svg"
        />
      </div>
    </div>
  );
}
