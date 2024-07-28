import LoginForm from '@/components/LoginPages/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entre na sua conta',
  description: 'Entre na sua conta do reading manager',
};

export default function LoginPage() {
  return <LoginForm />;
}
