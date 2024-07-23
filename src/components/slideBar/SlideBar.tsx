import ItemSlideBar from './ItemSlideBar';

export default function SlideBar() {
  const frases = ['+ 27.000 usuarios', '+100 MIL LIVROS', '+600 mil marcacoes'];

  return (
    <section className="my-16 lg:block hidden">
      <div className="w-full h-9 relative overflow-hidden mask-custom-gradient">
        <ul className="flex w-full min-w-[calc(w-80)*3] group">
          {frases.map((frase, i) => (
            <ItemSlideBar key={i} index={i} text={frase} />
          ))}
        </ul>
      </div>
    </section>
  );
}
