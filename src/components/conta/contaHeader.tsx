'use client';

import Image from 'next/image';
import ButtonContaHeader from './buttonContaHeader';
import logout from '@/actions/logout';
import { useUser } from '@/context/user-context';
import TitleDec from '../titleDec/titleDec';
import { usePathname } from 'next/navigation';

export default function ContaHeader() {
  const { setUser } = useUser();

  async function handlLeogout() {
    await logout();
    setUser(null);
  }

  function defineTitle(pathname: string): string {
    switch (pathname) {
      case '/conta/books':
        return 'Pastas';
      case '/conta/statistics':
        return 'Estatisticas';
      default:
        return 'Inicio';
    }
  }

  const pathname = usePathname();

  return (
    <nav className=" smallest:my-0 my-4">
      <ul className="flex justify-between">
        <div className="mt-4">
          <TitleDec text={defineTitle(pathname)} />
        </div>
        <div className="flex smallest:gap-6  smallest:justify-end justify-evenly">
          <ButtonContaHeader
            pathname={pathname}
            link="/conta"
            alt="icone da home da pagina do usuario"
            icon="/assets/icons/home-dash.svg"
          />

          <ButtonContaHeader
            pathname={pathname}
            link="/conta/statistics"
            alt="icone de estatisticas da pagina do usuario"
            icon="/assets/icons/stats-dash.svg"
          />

          <ButtonContaHeader
            pathname={pathname}
            link="/conta/books"
            alt="icone dos livros da pagina do usuario"
            icon="/assets/icons/book-dash.svg"
          />

          <li className="bg-green-500 smallest:h-14 smallest:w-14  w-10 h-10 flex items-center justify-center rounded-lg  hover:bg-green-700 duration-300">
            <button onClick={handlLeogout}>
              <Image
                src={'/assets/icons/logout.svg'}
                width={32}
                height={32}
                alt="icone de logout"
                className="w-6 h-6 smallest:w-8 smallest:h-8"
              />
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}
