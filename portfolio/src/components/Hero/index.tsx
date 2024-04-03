import Programming from "../../assets/programming.svg";
//import Arrow from "../../assets/arrow-down.svg";

import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { TypeAnimationWriter } from "../TypeAnimation";

export function Hero() {
  return (
    <section className="">
      <div className="container flex flex-col lg:flex-row xl:flex-row md:justify-center gap-4 md:gap-6 m-auto items-center">
        <div className="lg:hidden xl:hidden my-8">
          <img
            src={Programming}
            alt=""
            className="hover:animate-pulse cursor-default w-[90vw]"
          />
        </div>
        <div className=" w-full md:w-[100vw] md:m-auto xl:w-[50vw] text-left md:text-center lg:text-left ">
          <div className="mx-6">
            <h1 className="font-Poppins font-bold text-3xl lg:text-3xl xl:text-4xl firefox-title dark:text-primary text-purple-800">
              Olá, Eu sou Denilson!
            </h1>
            <TypeAnimationWriter />
            <p className="w-[90vw] md:w-[85vw] lg:w-[45vw] xl:w-[45vw] text-sm md:text-xs mt-2 font-Poppins font-light xl:font-medium dark:text-primary text-black">
              Atualmente estou cursando sistemas de informação no Instituto
              federal de goiás - Campus Luziânia. Possuo conhecimentos em
              front-end e Back-end e estou em busca primeira oportunidade na
              área.
            </p>
          </div>
          <div className="flex justify-left md:justify-center lg:justify-start xl:justify-start my-6 mx-6 gap-4 md:gap-4 xl:gap-2 uppercase font-semibold firefox-button-position">
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
        <div className="hidden xl:flex lg:flex lg:w-[80vw]">
          <img
            src={Programming}
            alt=""
            className="hover:animate-pulse cursor-default"
          />
        </div>
      </div>
    </section>
  );
}
