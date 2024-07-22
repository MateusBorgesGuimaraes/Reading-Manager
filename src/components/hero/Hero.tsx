import Image from 'next/image';
import ButtonLink from '../ButtonLink/ButtonLink';

export default async function Hero() {
  return (
    <section className="flex items-center justify-center h-[calc(100vh-81px)]">
      <div className="flex items-center flex-col justify-center lg:items-start">
        <div className="mb-6 w-full flex flex-col gap-3 justify-center items-center lg:items-start ">
          <p className="text-center lg:text-start max-w-[640px] text-gray-800">
            “A melhor plataforma de acompanhamento de leitura, aqui você
            gerencia suas leituras de maneira tao fácil quanto em um livro com
            marcadores”
          </p>
          <h1 className="font-title text-green-950 smallest:text-7xl text-5xl text-center lg:text-start">
            Gerencie as Suas Leituras.
          </h1>
        </div>

        <div className="flex lg:max-w-[640px] lg:gap-8">
          <div className="flex flex-col w-full justify-between gap-4 md:h-44">
            <Image
              src={'/assets/icons/dec-hero.svg'}
              width={300}
              height={31}
              alt="decoração"
            />

            <div className="max-w-[300px] lg:min-w-[300px]">
              <ButtonLink link="#" text="GET STARTED" />
            </div>
          </div>

          <div className="hidden md:flex">
            <p className="max-w-96 lg:max-w-full text-gray-800">
              “Aqui você tem controle total do que le, suas anotações,
              marcações, metas de horas lidas, tudo em um site minimalista e
              super fácil de ser utilizado, perfeito para quem quer algo
              especifico sem muitas funcionalidades que acebem dificultando a
              navegação.”
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <Image
          src={'/assets/icons/hero-vector.svg'}
          width={400}
          height={400}
          alt="mulher lendo um livro encostada em uma arvore, esta usando uma roupa para o frio."
        />
      </div>
    </section>
  );
}
