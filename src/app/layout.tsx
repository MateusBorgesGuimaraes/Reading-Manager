import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { UserContextProvider } from '@/context/user-context';
import userGet from '@/actions/user-get';

const kollektif = localFont({
  src: [
    {
      path: '../../public/fonts/Kollektif/Kollektif.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Kollektif/Kollektif-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-kollektif',
});

const norwester = localFont({
  src: '../../public/fonts/Norwester/norwester.otf',
  display: 'swap',
  variable: '--font-norwester',
});

export const metadata: Metadata = {
  title: 'Reading Manager',
  description: 'Site de Gerenciamento de Leituras',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await userGet();

  return (
    <html lang="pt-BR">
      <body
        className={`${kollektif.variable} ${norwester.variable} bg-gray-50`}
        style={{
          fontFamily: 'var(--font-kollektif)',
        }}
      >
        <UserContextProvider user={user}>
          <Header />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
