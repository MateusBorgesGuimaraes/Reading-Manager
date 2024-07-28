import CadastrarForm from '@/components/LoginPages/CadastrarForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crie uma conta',
  description: 'Cria a sua conta no reading manager',
};

export default function CriarConta() {
  return <CadastrarForm />;
}
