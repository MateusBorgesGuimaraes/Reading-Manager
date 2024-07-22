import Hero from '@/components/hero/Hero';
import Interface from '@/components/interfaces/Interface';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Interface />
    </main>
  );
}
