import CardTestimonial from '../CardTestimonial/CardTestimonial';

export default function CardsContainer() {
  return (
    <section className="lg:mt-0 mt-16 mb-16">
      <h1 className="text-center mb-5 lg:hidden font-title text-3xl text-green-700 smallest:text-5xl">
        Testemunhos
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <CardTestimonial
          name="antony taylor"
          text={`"Eu estou adorando o Gerenciador de Leituras! Ele me ajuda a manter todos os meus livros, mangás e artigos organizados em um só lugar. As anotações e observações são extremamente úteis, e a possibilidade de marcar onde parei na leitura é simplesmente fantástica. Recomendo a todos os leitores ávidos!"`}
          image={'/assets/images/antony-taylor.jpg'}
        />
        <CardTestimonial
          name="marta costa"
          text={`"Como estudante, uso o Gerenciador de Leituras para acompanhar minhas leituras acadêmicas e pessoais. As estatísticas de leitura me ajudam a monitorar meu progresso. A interface é muito amigáve, e adoro poder fazer anotações diretamente na plataforma.Os desenvolvedores realmente pensaram em tudo."`}
          image={'/assets/images/marta-costa.jpg'}
        />
        <CardTestimonial
          name="camilla aleto"
          text={`"O Gerenciador de Leituras tem sido uma ferramenta essencial para mim. As tags e categorias tornam a organização das minhas leituras muito mais eficiente, e adoro poder fazer anotações diretamente na plataforma. Os desenvolvedores realmente pensaram em tudo para proporcionar a melhor experiência possível aos usuários!"`}
          image={'/assets/images/camilla-aleto.jpg'}
        />
      </div>
    </section>
  );
}
