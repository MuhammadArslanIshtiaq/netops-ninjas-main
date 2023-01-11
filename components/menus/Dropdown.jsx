import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function Dropdown({ title, link, children }) {
  const router = useRouter();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${
            router.pathname == link
              ? "text-opacity-100 border-white"
              : "text-opacity-80 border-transparent"
          } inline-flex w-full justify-center text-white text-base font-medium hover:text-opacity-100 border hover:border-white py-2 px-6 rounded-md capitalize`}
        >
          {title}
          <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-52 origin-top-right rounded-md shadow-lg focus:outline-none bg-[#433b4b59] after:absolute after:top-0 after:left-0 after:flex-initial after:bg-[#433b4be3] after:blur-[16px] after:h-full after:w-full">
          <div className="pt-1 pb-6 relative z-10">{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
