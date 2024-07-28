import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estatisticas | Minha Conta',
};

export default async function StatisticsPage() {
  return (
    <div className="h-full">
      <h1 className="font-title">Estatisticas</h1>
    </div>
  );
}
