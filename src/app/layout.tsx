import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${kollektif.variable} ${norwester.variable} bg-gray-50`}
        style={{
          fontFamily: 'var(--font-kollektif)',
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
