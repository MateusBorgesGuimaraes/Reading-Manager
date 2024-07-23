import CardsContainer from '@/components/cardsContainer/CardsContainer';
import Hero from '@/components/hero/Hero';
import Interface from '@/components/interfaces/Interface';
import SlideBar from '@/components/slideBar/SlideBar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Interface />
      <SlideBar />
      <CardsContainer />
    </main>
  );
}
