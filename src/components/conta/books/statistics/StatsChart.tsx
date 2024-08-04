'use client';

import React from 'react';
import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

type StatsChartProps = {
  data: { genero: string; quantidade: number; fill: string }[];
  config: ChartConfig;
};

const StatsChart: React.FC<StatsChartProps> = ({ data, config }) => {
  return (
    <div>
      <ChartContainer
        config={config}
        className="mx-auto aspect-square max-h-[300px]"
      >
        <PieChart className="lowercase text-gray-600">
          <Pie data={data} dataKey="quantidade" nameKey="genero" />
          <ChartLegend
            content={<ChartLegendContent nameKey="genero" />}
            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default StatsChart;
