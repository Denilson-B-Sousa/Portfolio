import * as Dialog from "@radix-ui/react-dialog";
import {  DialogTrigger } from "@radix-ui/react-dialog";
import { Modal } from "../Modal";

type CardData = {
  id:  number;
  title: string;
  description: string;
  imageUrl: string;
  repositoryUrl: string;
  liveUrl: string;
};

export function Card({ id, title, description, imageUrl, repositoryUrl, liveUrl}: CardData) {
  return (
    <Dialog.Root>
      <DialogTrigger className="flex flex-col  rounded-md bg-slate-800 text-left p-[1.75rem] gap-2 overflow-hidden relative hover:ring-2 outline-none bg-light-500 dark:bg-gray-600 dark:hover:ring-purple-900 hover:ring-slate-600  focus-visible:2 focus-visible:ring-lime-400">
        <div>
          <img src={imageUrl} alt="" width={500} className="rounded-md"/>
        </div>

        <h4 className="text-2xl font-Poppins font-semibold dark:text-primary text-black">{title.split(":", 1)}</h4>
        <Dialog.DialogDescription className="dark:text-primary text-left">{description}</Dialog.DialogDescription>
      </DialogTrigger>
        <Modal 
          id={id}
          key={id}
          title={title}
          description={description}
          imageUrl={imageUrl}
          repositoryUrl={repositoryUrl}
          liveUrl={liveUrl}
        />
    </Dialog.Root>
  );
}
