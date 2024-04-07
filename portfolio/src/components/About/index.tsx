import profile from "../../assets/perfil.png";

export function About() {
  return (
    <>
      <div className="text-center" id="about">
        <span className="text-green-900 text-base font-MontSerrat font-light line uppercase tracking-widest">Sobre</span>
        <h3 className="dark:text-primary text-light-800 font-Poppins font-black text-3xl">Sobre mim:</h3>
      </div>
      <section className="m-auto dark:bg-gray-600 bg-light-500 w-[80vw] md:w-[92vw] rounded-md p-8 my-4">
        <div className="flex flex-col md:flex-row justify-center gap-6 m-auto">
          <div className="m-auto">
            <img
              src={profile}
              alt="Imagem de perfil"
              className="rounded-full w-48"
            />
          </div>

          <div className="m-auto">
            <h4 className="font-Kalam text-2xl my-2 text-green-900 ">Sobre mim:</h4>
            <ul className="inline-grid gap-2 text-md dark:text-primary text-black ">
              <li>👨🏾‍💻 · Desenvolvedor web front-end</li>
              <li>🎓 · Cursando sistemas de informação</li>
              <li>📚 · Aprendendo front-end e back-end</li>
              <li>🎯 · Procurando oportunidades na área</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
