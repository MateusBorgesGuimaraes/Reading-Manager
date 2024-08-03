'use client';

import React from 'react';
import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

const chartData = [
  {
    genero: 'fantasia',
    quantidade: 15,
    fill: '#8B5CF6',
  },
  {
    genero: 'terror',
    quantidade: 12,
    fill: '#22C55E',
  },
  {
    genero: 'aventura',
    quantidade: 10,
    fill: '#F97',
  },
  {
    genero: 'romance',
    quantidade: 8,
    fill: '#EAB308',
  },
  {
    genero: 'classicos',
    quantidade: 8,
    fill: '#EF4444',
  },
];

const chartConfig = {
  generos: {
    label: 'Generos',
  },
  terror: {
    label: 'terror',
    color: 'hsl(var(--chart-1))',
  },
  aventura: {
    label: 'aventura',
    color: 'hsl(var(--chart-2))',
  },
  romance: {
    label: 'romance',
    color: 'hsl(var(--chart-3))',
  },
  classicos: {
    label: 'classicos',
    color: 'hsl(var(--chart-4))',
  },
  fantasia: {
    label: 'fantasia',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export default function StatsChart() {
  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <PieChart className="lowercase  text-gray-600">
          <Pie data={chartData} dataKey="quantidade" />
          <ChartLegend
            content={<ChartLegendContent nameKey="genero" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
