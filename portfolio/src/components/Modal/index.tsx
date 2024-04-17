import * as Dialog from "@radix-ui/react-dialog";
import { DialogClose,  } from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
  GithubLogo,
  X,
  ArrowSquareOut,
  Globe,
  CaretLeft,
  CaretRight,
} from "phosphor-react";
import { Tags } from "../Tags";

type ModalData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl: string;
};

export function Modal({
  title,
  description,
  imageUrl,
  repositoryUrl,
  liveUrl,
}: ModalData) {
  return (
    <Dialog.Portal>
      <Dialog.DialogOverlay className="inset-0 fixed bg-black/90 md:bg-black/90" />
        <Dialog.Content className="xl:flex xl:flex-row fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] xl:max-w-[80vw] xl:max-h-[90vh] w-full h-full  md:rounded-md bg-light-500 dark:bg-gray-600 my-6 outline-none">
          <ScrollArea.Root className="w-[100%] h-[100%] overflow-hidden m-auto">
            <ScrollArea.Viewport className="w-full h-full relative">
              <DialogClose className="absolute right-0 top-0 p-8 md:p-2 xl:p-4 text-gray-600 hover:text-gray-600/70 dark:text-white  dark:hover:text-white/40 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-md">
                <X width={32} height={32} />
              </DialogClose>
              <section className="flex gap-6 p-6 mt-6">
                <div className="flex flex-col gap-3 p-6 dark:text-primary text-black xl:w-[45vw] xl:p-0">
                  <div className="hidden xl:flex gap-4">
                    <button
                      aria-label="Previous"
                      title="Anterior"
                      className="inline-flex items-center justify-center h-8 w-8 p-0 dark:hover:bg-black-background hover:bg-light-600  rounded-lg transition duration-200 ease-in-out"
                    >
                      <CaretLeft width={32} height={32} />
                    </button>
                    <button
                      aria-label="Next"
                      title="Próximo"
                      className="inline-flex items-center justify-center h-8 w-8 p-0 dark:hover:bg-black-background hover:bg-light-600 rounded-lg transition duration-200 ease-in-out"
                    >
                      <CaretRight width={32} height={32} />
                    </button>
                  </div>
                  <img
                      src={imageUrl}
                      alt=""
                      width={600}
                      className="rounded-lg transition-transform  hover:scale-110 cursor-pointer xl:hidden"
                  />
                  <h4 className="text-[1.5rem] font-semibold">{title}</h4>
                  <div className="text-base leading-6">
                    <div className="p-2 px-4 border-l-[1px] border-black dark:text-primary text-black dark:border-purple-900 font-Poppins font-light dark:font-extralight text-sm">
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="inline-flex gap-4">
                    <Tags />
                  </div>
                  <div className="font-extralight text-xs">JAN 23 · 2024</div>
                  <a
                    href={repositoryUrl}
                    target="_blank"
                    className="xl:hidden inline-flex items-center justify-between  w-full p-2 rounded-md bg-white text-black uppercase mt-6 mb-2 focus-visible:ring-4 focus-visible:ring-green-900 outline-none"
                  >
                    <GithubLogo width={24} height={24} />
                    Repo
                    <ArrowSquareOut width={24} height={24} />
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    className="xl:hidden inline-flex items-center justify-between w-full p-2 rounded-md bg-white text-black uppercase mt-2 focus-visible:ring-4 focus-visible:ring-green-900 outline-none"
                  >
                    <Globe width={24} height={24} />
                    Live
                    <ArrowSquareOut width={24} height={24} />
                  </a>
                  <div className="hidden xl:flex mb-8">
                    <img
                      src="../../src/assets/Modal/Notes.png"
                      alt=""
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="border-r-[1px] border-black dark:border-purple-900"></div>
                <div className="hidden xl:flex xl:flex-col xl:gap-12">
                  <div className="border-[1px] border-black dark:border-purple-900 dark:text-light-500 rounded-xl p-4">
                    <h4 className="text-base font-semibold">Aprendizados:</h4>
                    <ul className="inline-flex flex-col list-inside list-disc font-Poppins font-light text-sm mt-2">
                      <li>Configuração Tailwindcss</li>
                      <li>Responsividade com grid</li>
                      <li>Acessibilidade com outline</li>
                    </ul>
                  </div>
                  <div className="hidden xl:flex xl:flex-col border-[1px] dark:text-light-500  border-black dark:border-purple-900 rounded-xl p-4 xl:h-[13.6rem]">
                    <h4 className="text-base font-semibold ">
                      Links Importantes:
                    </h4>
                    <a
                      href={repositoryUrl}
                      target="_blank"
                      className="inline-flex items-center justify-between p-2 rounded-md bg-white text-black  mt-4 focus-visible:ring-4 focus-visible:ring-green-900 outline-none max-w-[12rem]"
                    >
                      <GithubLogo />
                      Repositório
                      <ArrowSquareOut />
                    </a>
                    <a
                      href={liveUrl}
                      target="_blank"
                      className="inline-flex items-center justify-between p-2 rounded-md bg-white text-black  mt-4 focus-visible:ring-4 focus-visible:ring-green-900 outline-none max-w-[12rem]"
                    >
                      <Globe />
                      Visualizar
                      <ArrowSquareOut />
                    </a>
                  </div>
                </div>
              </section>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA5" />
          </ScrollArea.Root>
        </Dialog.Content>
    </Dialog.Portal>
  );
}
