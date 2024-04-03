import * as Dialog from "@radix-ui/react-dialog";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { GithubLogo, X, ArrowSquareOut, Globe } from "phosphor-react";

type Card = {
  title: string;
  description: string;
  imageURI: string;
};

export function Card({ title, description, imageURI }: Card) {
  return (
    <Dialog.Root>
      <DialogTrigger className="rounded-md flex justify-center flex-col md:flex-row-2 h-80 w-80 md:w-64 md:h-72 text-left p-4 md:p-4 gap-2 bg-light-500 dark:bg-gray-600  hover:ring-2 hover:ring-purple-800 focus-visible:ring-2 focus-visible:ring-purple-800 outline-none firefox-card">
        <img src={imageURI} alt="" width={500} />

        <h4 className="text-xl font-Poppins font-semibold dark:text-primary text-black">{title}</h4>
        <p className="dark:text-primary text-black">{description.split("", 80)}... <br/><span className="dark:text-purple-500 text-purple-800">Ver mais</span></p>
      </DialogTrigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/90 md:bg-black/90" />
        <Dialog.Content className="flex flex-col fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[90vh] md:rounded-md bg-light-500 dark:bg-gray-600 my-8 outline-none">
          <DialogClose className="absolute right-0 top-0 p-8 md:p-2 text-white hover:text-white/40 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-md">
            <X width={32} height={32} />
          </DialogClose>

          <ScrollArea.Root className="flex justify-center items-center m-auto w-[100vw] md:w-[85%] p-4 rounded overflow-hidden ">
            <ScrollArea.Viewport className="w-[80vw] h-[62vh] md:h-[80vh] rounded bg-light-500 dark:bg-gray-600 p-6">
              <img src={imageURI} alt="" width={600} className="rounded-lg transition-transform  hover:scale-110 cursor-pointer" />
              <div className="dark:text-primary text-black">
                
                <h4 className="text-3xl font-semibold mt-4">{title}</h4>
                <p className="dark:text-primary text-black text-base leading-6">{description}</p>
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex items-center justify-between  w-full p-2 rounded-md bg-white text-black uppercase mt-6 mb-2 focus-visible:ring-4 focus-visible:ring-green-900 outline-none"
                >
                  <GithubLogo width={24} height={24}/>
                  Repo
                  <ArrowSquareOut width={24} height={24}/>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex items-center justify-between w-full p-2 rounded-md bg-white text-black uppercase mt-2 focus-visible:ring-4 focus-visible:ring-green-900 outline-none"
                >
                  <Globe width={24} height={24}/>
                  Live
                  <ArrowSquareOut width={24} height={24}/>
                </a>
              </div>
              <ScrollArea.Scrollbar
                orientation="vertical"
                className="hidden md:flex justify-end select-none touch-none p-0.5 bg-light-600 dark:bg-gray-600 transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-[100%] rounded-full"
              >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px] bg-green-900 dark:bg-purple-900 rounded-full" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner className="dark:bg-black bg-light-800 rounded-full" />
            </ScrollArea.Viewport>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
