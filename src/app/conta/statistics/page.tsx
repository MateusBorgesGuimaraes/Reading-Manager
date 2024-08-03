import InfoStats from '@/components/conta/books/statistics/infoStats';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estatisticas | Minha Conta',
};

export default async function StatisticsPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <InfoStats />
    </div>
  );
}
