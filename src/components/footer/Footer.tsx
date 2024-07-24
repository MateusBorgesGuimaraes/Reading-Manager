import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-green-600">
      <div className="container flex flex-col gap-4 items-center justify-center py-6">
        <div className="md:self-start">
          <Image
            src={'/assets/icons/logo-white.svg'}
            width={100}
            height={64.66}
            alt="logo de cor branca"
          />
        </div>

        <div className="w-full md:w-10/12 flex flex-col items-center justify-center gap-5 my-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-0">
          <div className="flex flex-col gap-3">
            <h4 className="font-title text-green-900 text-xl text-center sm:text-start">
              REDES SOCIAIS
            </h4>
            <div className="text-white flex flex-col gap-1 text-center sm:text-start underline">
              <p>@instagram</p>
              <p>@facebook</p>
              <p>@twitter</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-title text-green-900 text-xl text-center sm:text-start">
              CONTATOS
            </h4>
            <div className="text-white flex flex-col gap-1 text-center sm:text-start">
              <p>readingmanager@gmail.com</p>
              <p>readingmanager2</p>
              <p>(38) 9 6566-6546</p>
              <p>(33) 9 2334-0980</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-title text-green-900 text-xl text-center sm:text-start">
              SOBRE
            </h4>
            <div className="text-white flex flex-col gap-1 text-center sm:text-start">
              <p>nosso objetivo</p>
              <p>fundadores</p>
              <p>ações sociais</p>
              <p>curiosidades</p>
            </div>
          </div>
        </div>

        <p className="text-green-800">
          reading manager ©todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
