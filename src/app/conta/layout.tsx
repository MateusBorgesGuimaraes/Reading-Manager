import ContaHeader from '@/components/conta/contaHeader';

export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container min-h-[calc(100vh-81px)]">
      <ContaHeader />
      {children}
    </div>
  );
}
