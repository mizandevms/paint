import React from "react";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import { IoCaretDown } from "react-icons/io5";

export default function Header() {

  return (
    <div className="w-full px-5 md:px-0">
      <header className="bg-white rounded-full max-w-6xl mx-auto ">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between py-2 px-4 lg:px-8"
        >
          <div className="flex justify-start md:justify-center w-full flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="logo"
                src="/Images/logo.png"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"

              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="flex lg:justify-end lg:gap-10 text-black text-lg font-semibold">
            <PopoverGroup className="flex lg:gap-x-12">
              <Popover className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-black outline-none">
                  <img
                    alt="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
                    className="h-4 w-auto object-contain"
                  />
                  <IoCaretDown
                    aria-hidden="true"
                    className="size-5 flex-none text-black"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-[#262626] text-white shadow-lg outline-1 outline-none transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in ring-none"
                >
                  Uk
                </PopoverPanel>
              </Popover>
            </PopoverGroup>
          </div>
        </nav>
      </header>
    </div>
  );
}
