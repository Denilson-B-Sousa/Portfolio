import { Code, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import profile from "../../assets/perfil.png";

export function About() {
  return (
    <>
      <div className="text-center" id="about">
        <span className="text-green-900 text-base font-MontSerrat font-light line uppercase tracking-widest">Sobre</span>
        <h3 className="dark:text-primary text-light-800 font-Poppins font-black text-3xl">Sobre mim:</h3>
      </div>
      <section className="">
        <div className="m-auto container dark:bg-gray-600 bg-light-500 w-[80vw] md:w-[90vw]  rounded-md p-8 my-4">
          <div className="flex flex-col md:flex-row justify-center items-center md:gap-16 lg:gap-32 xl:gap-40 m-auto">
            <div className="">
              <img
                src={profile}
                alt="Imagem de perfil"
                className="rounded-full w-48"
              />
              <ul className="flex justify-center gap-6 my-4 list-none"> 
                <li>
                  <a href="#" title="Linkedin" className="dark:text-white text-gray-600 hover:text-purple-900 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm">
                    <LinkedinLogo width={32} height={32}/>
                  </a>
                </li>
                <li>
                  <a href="#" title="Github" className="dark:text-white text-gray-600 hover:text-purple-900 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm">
                    <GithubLogo width={32} height={32}/>
                  </a>
                </li>
                <li>
                  <a href="#" title="Dev Community" className="dark:text-white text-gray-600 hover:text-purple-900 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm">
                    <Code width={32} height={32}/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="font-Kalam text-2xl my-2 text-green-900 ">Sobre mim:</h4>
              <ul className="inline-grid gap-4 font-Poppins font-light text-sm dark:text-primary text-black ">
                <li>👨🏾‍💻 · Desenvolvedor web front-end</li>
                <li>🎓 · Cursando sistemas de informação</li>
                <li>📚 · Aprendendo back-end</li>
                <li>🎯 · Procurando oportunidades na área</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
