import Programming from "../../assets/programming.svg";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { TypeAnimationWriter } from "../TypeAnimation";

export function Hero() {
  return (
    <section className="lg:px-0">
      <div className="container flex flex-col items-center  lg:flex-row xl:flex-row md:justify-center lg:justify-center lg:gap-0 xl:gap-2 gap-4 md:gap-6 m-auto">
        <div className="flex md:hidden lg:hidden xl:hidden">
          <img
            src={Programming}
            alt=""
            className="p-[12px]  hover:animate-pulse cursor-default w-full"
          />
        </div>
        <div className="w-full md:w-full lg:w-[70vw] xl:w-[50vw] text-left md:text-center lg:text-left ">
          <div className="px-6 md:px-0 lg:px-0 xl:px-0">
            <h1 className="font-Poppins font-bold text-3xl lg:text-3xl xl:text-4xl firefox-title dark:text-primary text-purple-800">
              Olá, Eu sou Denilson!
            </h1>
            <TypeAnimationWriter />
            <p className="w-[90%] text-sm md:text-xs mt-2 font-Poppins font-light xl:font-light dark:text-primary text-black">
              Sou estudante de sistemas de informação no Instituto Federal de Goiás - IFG. Especializando-se para desenvolver páginas web com ReactTS e Angular framework.
            </p>
          </div>
          <div className="flex justify-start lg:justify-start xl:justify-start my-6 mx-6 gap-4 md:gap-4 lg:mx-0 xl:gap-4 xl:mx-0 uppercase font-semibold firefox-button-position">
            <div className="bg-gradient-to-r from-purple-500 via-purple-800 to-purple-900 p-1 rounded-lg hover:shadow-purple-800 hover:shadow-lg hover:transition-shadow active:bg-primary-700 active:shadow-purple-900 firefox-button">
              <a
                href="https://github.com/Denilson-B-Sousa"
                target="_blank"
                className="inline-flex items-center gap-2 p-4 px-8 bg-light-background dark:bg-black-background dark:text-primary text-black font-Poppins rounded-md focus-visible:ring-8 focus-visible:ring-green-900 outline-none"
              >
                <GithubLogo />
                Github
              </a>
            </div>
            <div className="bg-gradient-to-r from-purple-500 via-purple-800 to-purple-900 p-1 rounded-lg hover:shadow-lg hover:box-decoration-slice hover:shadow-purple-800 active:shadow-purple-900 firefox-button">
              <a
                href="https://www.linkedin.com/in/denilson-bezerra-de-sousa-38b964257/"
                target="_blank"
                className="inline-flex items-center gap-2 p-4 px-[1.65rem] bg-light-background dark:bg-black-background dark:text-primary text-black font-Poppins rounded-md focus-visible:ring-8 focus-visible:ring-green-900 outline-none"
              >
                <LinkedinLogo />
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block xl:block lg:w-[50%] xl:w-[40%]">
          <img
            src={Programming}
            alt=""
            className="hover:animate-pulse cursor-default w-full"
          />
        </div>
      </div>
    </section>
  );
}
