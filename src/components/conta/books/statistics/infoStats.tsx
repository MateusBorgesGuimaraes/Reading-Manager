'use client';

import CheckedIcon from '@/icons/checkdIcon';
import Image from 'next/image';
import React from 'react';
import ProgressBar from '../singleBook/ProgressBar';
import StatsChart from './StatsChart';
import getUsreStats from '@/actions/get-user-sats';
import { StatsData } from '@/types/types';
import { ChartConfig } from '@/components/ui/chart';

export default function InfoStats() {
  const [stats, setStats] = React.useState<StatsData | null>(null);
  React.useEffect(() => {
    async function carregaStats() {
      const data = await getUsreStats();
      if (data.ok) {
        setStats(data.data);
      } else {
        console.log('erro');
      }
    }
    carregaStats();
  }, []);

  if (!stats) return <div>Estatisticas nao existem</div>;
  else {
    const sortedCategories = Object.entries(stats.booksByCategory)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    const fixedColors = ['#8B5CF6', '#22C55E', '#F97316', '#EAB308', '#EF4444'];
    const chartData = sortedCategories.map(([key, value], index) => ({
      genero: key,
      quantidade: value,
      fill: fixedColors[index],
    }));

    const chartConfig: ChartConfig = {
      generos: {
        label: 'Generos',
      },
    };

    sortedCategories.forEach(([key], index) => {
      chartConfig[key] = {
        label: key,
        color: `hsl(var(--chart-${index + 1}))`,
      };
    });

    return (
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-5 justify-center mb-6">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 lg:text-xl text-lg text-gray-700 bg-white shadow-sm p-6 rounded-md uppercase">
            <Image
              src={'/assets/icons/books-total.svg'}
              width={26}
              height={26}
              alt="icone de total de livros"
            />{' '}
            total de livros lidos: {stats.totalBooks}
          </div>
          <div className="flex flex-col text-base text-gray-700 bg-white shadow-sm p-6 rounded-md gap-4">
            <p className="flex items-center gap-2">
              <CheckedIcon color="#22C55E" />
              TERMINOU {stats.booksByStatus.completo} LIVROS 😀
            </p>
            <p className="flex items-center gap-2">
              <CheckedIcon color="#EF4444" />
              DROPOU {stats.booksByStatus.dropado} LIVROS 😔
            </p>
            <p className="flex items-center gap-2">
              <CheckedIcon color="#06B6D4" />
              ESTA LENDO {stats.booksByStatus.lendo} LIVROS 😮
            </p>
            <p className="flex items-center gap-2">
              <CheckedIcon color="#8B5CF6" />
              pausou {stats.booksByStatus.pausado} livros 😅
            </p>
          </div>
          <div className="flex flex-col text-base text-gray-700 bg-white shadow-sm p-6 rounded-md gap-4">
            <p className="text-xl text-gray-700">
              você tem uma taxa de conclusão de leitura de:
            </p>
            <ProgressBar
              completionRate={stats.completionRate * 100}
              totalPages={56}
              currentPage={34}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex lg:flex-row flex-col gap-5">
            <div className="shadow-sm p-6 rounded-md bg-white">
              <h3 className="lg:text-xl text-lg  flex flex-col text-gray-700 uppercase">
                5 categorias mais lidas:
                <StatsChart data={chartData} config={chartConfig} />
              </h3>
            </div>
            <div className="lg:w-40 w-full sm:text-2xl text-lg flex flex-col text-gray-700 shadow-sm p-6 rounded-md bg-white items-center justify-center">
              <Image
                src={'/assets/icons/timer.svg'}
                width={56}
                height={56}
                alt="iconde de timer"
              />

              <p className="text-center">
                você passou {stats.totalReadingTime}h lendo
              </p>
            </div>
          </div>
          <div className="flex text-gray-700 gap-2 items-center shadow-sm p-6 rounded-md bg-white ">
            <div className="bg-green-500 p-1 rounded-sm">
              <Image
                src={'/assets/icons/notes.svg'}
                width={24}
                height={24}
                alt="iconde de timer"
              />
            </div>
            <p>você ja escreveu mais de {stats.totalMarkers} anotações.</p>
          </div>
        </div>
      </section>
    );
  }
}
