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
      <DialogTrigger className="rounded-md flex justify-center flex-col md:flex-row-2 h-80 w-80 md:w-64 md:h-72 text-left p-4 md:p-4 gap-2 bg-light-500 dark:bg-gray-600  hover:ring-2 hover:ring-purple-800 focus-visible:ring-2 focus-visible:ring-purple-800 outline-none firefox-card">
        <img src={imageUrl} alt="" width={500} />

        <h4 className="text-xl font-Poppins font-semibold dark:text-primary text-black">{title.split(":", 1)}</h4>
        <Dialog.DialogDescription className="dark:text-primary">{description.split("", 80)}</Dialog.DialogDescription>
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
