'use client';

import logout from '@/actions/logout';
import { useUser } from '@/context/user-context';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const [loginActive, setLoginActive] = React.useState(false);
  const [mobileActive, setMobileActive] = React.useState(false);
  const { user, setUser } = useUser();

  async function handlLeogout() {
    await logout();
    setUser(null);
  }

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

      <nav className="md:flex hidden">
        <ul className="flex gap-8 text-xl">
          <li className="group text-gray-800">
            <a href="/" className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>{' '}
              inicio
            </a>
          </li>
          <li className="group text-gray-800">
            <a href="#" className="flex items-center gap-1">
              {' '}
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              minha conta
            </a>
          </li>
          <li className="group text-gray-800">
            <a href="#footer" className="flex items-center gap-1">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              contato
            </a>
          </li>
        </ul>
      </nav>

      <div className="gap-4 font-title text-xl items-center md:flex hidden">
        {user ? (
          <ul className="text-green-600 hover:text-green-500 duration-300">
            <li
              onClick={() => setLoginActive(!loginActive)}
              className="relative"
            >
              <div className="flex gap-2 cursor-pointer">
                <Image
                  src={'/assets/icons/avatar-header.svg'}
                  width={24}
                  height={24}
                  alt="avatar de login"
                />{' '}
                <p className="font-body text-green-700">{user.username}</p>{' '}
                <Image
                  src={'/assets/icons/arrow-down-header.svg'}
                  width={24}
                  height={24}
                  alt="seta para baixo"
                  className={`${
                    loginActive ? 'rotate-180' : 'rotate-0'
                  } duration-300`}
                />
              </div>
              <ul
                className={`${
                  loginActive ? 'flex' : 'hidden'
                } flex-col gap-3 absolute bg-white right-0 w-max px-6 py-3 shadow-sm rounded-lg`}
              >
                <li className="group">
                  <button
                    onClick={handlLeogout}
                    className="flex items-center gap-1 text-green-700"
                  >
                    <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
                    logout
                  </button>
                </li>
                <li className="group">
                  <Link
                    href={'/conta'}
                    className="flex items-center gap-1 text-green-700"
                  >
                    <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
                    minha conta
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        ) : (
          <>
            <Link
              href={'/login'}
              className="text-green-600 hover:text-green-500 duration-300 text-lg"
            >
              LOGAR
            </Link>
            <Link
              href={'/login/criar'}
              className="bg-green-600 px-3 py-2 rounded-lg text-white hover:bg-green-500 duration-300 text-lg"
            >
              INSCREVER-SE
            </Link>
          </>
        )}
      </div>

      <div className="relative md:hidden">
        <button onClick={() => setMobileActive(!mobileActive)}>
          <Image
            src={'/assets/icons/menu-mobile.svg'}
            width={32}
            height={32}
            alt="menu mobile"
            className={`${
              mobileActive ? 'rotate-90' : 'rotate-0'
            } duration-300`}
          />
        </button>

        <ul
          className={`${
            mobileActive ? 'flex' : 'hidden'
          } flex-col gap-4 bg-white shadow-sm w-full px-8 py-5 min-w-60 absolute right-0 text-green-700 rounded-lg`}
        >
          <li className="group">
            <Link href={'/'} className="flex gap-1 items-center">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              inicio
            </Link>
          </li>

          <li className="group">
            <Link href={'/conta'} className="flex gap-1 items-center">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              minha conta
            </Link>
          </li>

          <li className="group">
            <Link href={'#'} className="flex gap-1 items-center">
              <span className="w-3 h-3 bg-green-800 block rounded-full group-hover:bg-green-400 duration-300"></span>
              contato
            </Link>
          </li>

          {user ? (
            <li className="group bg-green-600 text-white rounded text-xl hover:bg-green-500 duration-300">
              <button className="flex items-center justify-between w-full px-3 py-1 ">
                <p>sair</p>
                <Image
                  src={'/assets/icons/logout.svg'}
                  width={24}
                  height={24}
                  alt="logout icon"
                />
              </button>
            </li>
          ) : (
            <li className="group bg-green-600 text-white rounded text-base hover:bg-green-500 duration-300">
              <Link
                href={'/login'}
                className="flex items-center justify-between px-3 py-1 "
              >
                entrar/cadastrar
                <Image
                  src={'/assets/icons/login-white.svg'}
                  width={24}
                  height={24}
                  alt="login icon"
                />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
