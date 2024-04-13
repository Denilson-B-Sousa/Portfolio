import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { List, Moon} from "phosphor-react";
import { Sun } from "phosphor-react";
import { useState } from "react";

export function Navbar() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);

    {
      dark
        ? localStorage.setItem("theme", "light")
        : localStorage.setItem("theme", "dark");
    }

    saveThemePreferences();
  };

  const saveThemePreferences = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header>
      <div className="flex w-full justify-center dark:text-primary px-8 md:px-6 py-6 md:py-8 xl:px-2 xl:mt-1">
        <div className="container flex items-center gap-14 xl:gap-6 flex-1 firefox-container">
          <div>
            <a
              href="/"
              className="font-ShadowsIntoLight font-bold text-2xl md:text-sm lg:ml-1 xl:ml-[1.5rem] xl:text-3xl focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm"
            >
              Denilson B. Sousa
            </a>
          </div>

          <div className="flex justify-end ml-8 gap-6 md:ml-48 lg:hidden xl:hidden order-1 firefox-menu">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger
                asChild
                className="border-none outline-none"
              >
                <button aria-label="Customise options">
                  <List width={32} height={32} />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="min-w-[100vw] min-h-[auto] flex flex-col gap-4 mr-8 bg-gray-600 text-primary rounded-sm p-[8px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                  sideOffset={4}
                >
                  <DropdownMenu.Label />
                  <DropdownMenu.Item className="group text-xl leading-none text-violet11 rounded-[3px] flex mt-2 mb-2 items-center h-[25px] px-[5px] py-2 relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <a href="/">Home</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="group text-xl leading-none text-violet11 rounded-[3px] flex mb-2 items-center h-[25px] px-[5px] py-2  relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <a href="#project">Projetos</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="group text-xl leading-none text-violet11 rounded-[3px] flex mb-2 items-center h-[25px] px-[5px] py-2 relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                    <a href="#habilities">Habilidades</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="group text-xl leading-none text-violet11 rounded-[3px] flex mb-6 items-center h-[25px] px-[5px] py-2 relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1  focus:text-green-900">
                    <a href="#about">Sobre</a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <button
              className="xl:hidden p-1 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm order-2"
              onClick={() => darkModeHandler()}
            >
              {dark ? <Sun width={32} height={32}/> : <Moon width={32} height={32}/>}
            </button>
          </div>
          <div className="hidden md:hidden lg:flex xl:flex items-end flex-1 justify-end">
            <nav className="flex-1">
              <ul className="md:flex justify-end items-center flex-1 gap-6 font-Poppins font-regular uppercase text-base lg:text-xs xl:text-base">
                <li className="hover:delay-75 hover:border-b-[1px] dark:hover:border-white ">
                  <a
                    href="/"
                    className="focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm"
                  >
                    Home
                  </a>
                </li>
                <li className="hover:delay-75 hover:border-b-[1px] dark:hover:border-white">
                  <a
                    href="#projects"
                    className=" focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm"
                  >
                    Projetos
                  </a>
                </li>
                <li className="hover:delay-75 hover:border-b-[1px] dark:hover:border-white">
                  <a
                    href="#habilities"
                    className=" focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm"
                  >
                    Habilidades
                  </a>
                </li>
                <li className="hover:delay-75 hover:border-b-[1px] dark:hover:border-light-500">
                  <a
                    href="#about"
                    className=" focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm"
                  >
                    Sobre mim
                  </a>
                </li>
                <li>
                  <button
                    className="p-1 mr-8  hover:border-green-900 hover:text-green-900 focus-visible:ring-2 focus-visible:ring-green-900 outline-none rounded-sm "
                    onClick={() => darkModeHandler()}
                  >
                    {dark ? <Sun width={24} height={24}/> : <Moon width={24} height={24}/>}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
