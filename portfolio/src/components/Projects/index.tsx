import { Card } from "../Card";

export function Project() {
  const Cards = [
    {
      id: 1,
      title: "Notes",
      description:
        "Aplicação produzida durante evento nlw da rocketseat, a aplicação trata-se de um criador de notas, tanto digitada quanto a partir da gravação de voz.",
      image: "../../src/assets/notes.png",
    },
    {
      id: 2,
      title: "Notes",
      description:
        "Aplicação produzida durante evento nlw da rocketseat, a aplicação trata-se de um criador de notas, tanto digitada quanto a partir da gravação de voz.",
      image: "../../src/assets/notes.png",
    },
    {
      id: 3,
      title: "Notes",
      description:
        "Aplicação produzida durante evento nlw da rocketseat, a aplicação trata-se de um criador de notas, tanto digitada quanto a partir da gravação de voz.",
      image: "../../src/assets/notes.png",
    },
    {
      id: 4,
      title: "Notes",
      description:
      "Aplicação produzida durante evento nlw da rocketseat, a aplicação trata-se de um criador de notas, tanto digitada quanto a partir da gravação de voz.",
      image: "../../src/assets/notes.png",
    }
  ];
  return (
    <section
      className="flex justify-center flex-col my-8"
    >
      <div className="text-center w-[100vw]" id="projects">
        <span className="text-green-900 text-2xl font-Kalam">Projetos</span>
        <h3 className="dark:text-primary text-light-800 text-3xl laptop:text-2xl">
          Meus projetos!
        </h3>
      </div>
      <div className="grid grid-cols-1 m-auto md:gap-8 lg:grid-cols-2 xl:grid-cols-3 lg:gap-4 px-8 py-10 gap-6 auto-rows-[auto]">
        {Cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageURI={card.image}
          />
        ))}
      </div>
    </section>
  );
}
