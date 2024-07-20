import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  return (
    <header className="container flex justify-between items-center mt-4">
      <div>
        <Image
          src={'/assets/icons/logo-green.svg'}
          alt="logo"
          width={100}
          height={65}
        />
      </div>

      <nav>
        <ul className="flex gap-8 text-xl">
          <li className="group">
            <a href="#" className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>{' '}
              inicio
            </a>
          </li>
          <li className="group">
            <a href="#" className="flex items-center gap-1">
              {' '}
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              minhas leituras
            </a>
          </li>
          <li className="group">
            <a href="#" className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              contato
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 font-title text-xl items-center">
        <Link href={'./'} className="text-green-600">
          LOGAR
        </Link>
        <Link
          href={'./'}
          className="bg-green-600 px-4 py-3 rounded-lg text-white hover:bg-green-700 duration-300"
        >
          INSCREVER-SE
        </Link>
      </div>
    </header>
  );
}
