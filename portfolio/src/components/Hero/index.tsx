import Programming from "../../assets/programming.svg";
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { TypeAnimationWriter } from "../TypeAnimation";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      staggerChildren: 0.1,
    }, 
  },
};
export function Hero() {
  return (
    <section className="flex justify-center items-center w-40rem lg:gap-28 lg:max-w-[70rem] xl:gap-32 mx-auto xl:max-w-[76rem] p-4">
        
        <motion.div className="max-w-[100vw] xl:max-w-xl lg:max-w-lg text-left md:text-center lg:text-left " variants={textVariants} initial="initial" animate="animate">
          <div className="flex md:justify-center lg:hidden xl:hidden">
            <img
              src={Programming}
              alt="Imagem"
              className="p-[12px] hover:animate-pulse cursor-default"
            />
          </div>
          <motion.div className="flex flex-col gap-2 px-6 md:px-0 lg:px-0 xl:px-0" variants={textVariants}>
            <motion.span className="hidden lg:flex xl:flex bg-gradient-to-r from-purple-900 to-purple-500 dark:from-green-900 dark:to-green-500 bg-clip-text text-transparent tracking-widest lg:mb-0 xl:mb-2" variants={textVariants}>WEB DEVELOPER</motion.span>
            <motion.h1 className="font-Poppins font-semibold mt-4 lg:mt-0 xl:mt-0 lg:font-bold xl:font-bold w-[100vw] text-3xl lg:text-4xl xl:text-5xl firefox-title dark:text-primary text-purple-800 " variants={textVariants}>
              Olá, Eu sou Denilson!
            </motion.h1>
            <motion.span variants={textVariants}>
              <TypeAnimationWriter />
            </motion.span>

            <motion.p className="md:max-w-[80vw] max-w-[100vw] xl:max-w-[40vw] mt-1 font-Poppins font-light xl:font-light dark:text-primary text-black" variants={textVariants}>
              Estudante de sistemas de informação no Instituto Federal de Goiás. Especializando-se para desenvolver páginas web com ReactTS e Angular 17.
            </motion.p>
          </motion.div>
          <motion.div className="flex justify-center md lg:justify-start xl:justify-start my-6 mx-6 gap-4 md:gap-4 lg:mx-0 xl:gap-4 xl:mx-0 uppercase font-semibold firefox-button-position" variants={textVariants}>
            <motion.div className="bg-gradient-to-r from-purple-500 via-purple-800 to-purple-900 p-1 rounded-lg hover:shadow-purple-800 hover:shadow-lg hover:transition-shadow active:bg-primary-700 active:shadow-purple-900 firefox-button" variants={textVariants}>
              <motion.a
                href="https://github.com/Denilson-B-Sousa"
                target="_blank"
                className="inline-flex items-center gap-2 p-4 px-8 bg-light-background dark:bg-black-background dark:text-primary text-black font-Poppins rounded-md focus-visible:ring-8 focus-visible:ring-green-900 outline-none"
                whileTap={{ scale: 0.90 }}

              >
                <GithubLogo />
                Github
              </motion.a>
            </motion.div>
            <motion.div className="bg-gradient-to-r from-purple-500 via-purple-800 to-purple-900 p-1 rounded-lg hover:shadow-lg hover:box-decoration-slice hover:shadow-purple-800 active:shadow-purple-900 firefox-button">
              <motion.a
                href="https://www.linkedin.com/in/denilson-bezerra-de-sousa-38b964257/"
                target="_blank"
                className="inline-flex items-center gap-2 p-4 px-[1.65rem] bg-light-background dark:bg-black-background dark:text-primary text-black font-Poppins rounded-md focus-visible:ring-8 focus-visible:ring-green-900 outline-none"
                whileTap={{ scale: 0.90 }}

              >
                <LinkedinLogo />
                Linkedin
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="hidden lg:flex xl:flex">
          <img
            src={Programming}
            alt=""
            className="hover:animate-pulse cursor-default lg:w-96 xl:w-full"
          />
        </div>
    </section>
  );
}
