import ContainerImage from '../containerImage/ContainerImage';

export default async function Interface() {
  return (
    <section className="flex flex-col gap-5 justify-center items-center lg:flex-row lg:gap-16">
      <div className="flex flex-col gap-5">
        <ContainerImage
          alt="exemplo de estatisticas que existem como funcionalidade do site"
          image="/assets/images/stats-1.png"
        />
        <ContainerImage
          alt="exemplo da organização das pastas do site"
          image="/assets/images/folder-1.png"
        />
      </div>

      <div className="order-first flex flex-col gap-3 lg:order-none lg:w-4/12">
        <p className="text-center lg:text-start">
          “Aqui, você e sua experiencia de leitura seção prioridades, sem
          anúncios, sem complicações.”
        </p>
        <h1 className="font-title smallest:text-7xl text-5xl text-green-950 text-center lg:text-start">
          Interfaces super simples e Intuitivas
        </h1>
        <p className="text-center max-w-[600px] self-center lg:text-start lg:self-start">
          “Nossos designers e desenvolvedores projetaram um site feito
          especificamente para você que deseja ter uma experiência sem
          complicações, super simples de ser utilizado, e muito intuitivo,
          facilitando enormemente a sua navegação.”
        </p>
      </div>
    </section>
  );
}
