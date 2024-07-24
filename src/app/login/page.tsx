import ButtonForm from '@/components/FormComponents/Button';
import InputForm from '@/components/FormComponents/Input';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="container h-[calc(100vh-81px)] flex items-center justify-center lg:my-4">
      <div className="lg:bg-white lg:rounded-lg lg:shadow-md w-full h-full lg:h-5/6 flex  justify-center items-center flex-col smallest:px-8 px-1 max-w-[600px] lg:px-12 lg:py-12 ">
        <h1 className="smallest:text-3xl text-green-800 text-2xl font-title mb-8 self-start">
          LOGAR NA CONTA
        </h1>
        <form
          action=""
          className=" w-full flex flex-col gap-4 lg:max-w-[600px] items-center justify-center"
        >
          <InputForm name="nome" label="nome" type="text" />

          <InputForm name="senha" label="senha" type="password" />

          <ButtonForm text="ENTRAR" />

          <Link
            href={'/login/criar'}
            className="smallest:text-base text-sm text-gray-500 underline hover:text-gray-400 duration-300 self-start"
          >
            não tem uma conta ainda? cadastre-se já!
          </Link>
        </form>
      </div>
    </section>
  );
}
