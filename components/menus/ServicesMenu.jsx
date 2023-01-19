import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const links = [
  { link: "/networking", name: "Networking" },
  { link: "#", name: "Infrastructure" },
  { link: "#", name: "Clouds" },
  { link: "#", name: "Firewalls" },
  { link: "#", name: "Quality Assurance" },
  { link: "#", name: "UX/UI" },
  { link: "#", name: "Digital Marketing" },
];

const ServicesMenu = ({ onClick }) => {
  return (
    <>
      <Menu.Item>
        <div className="px-3">
          {links.map((item, index) => (
            <Link
              key={`service-link-${index}`}
              href={item.link}
              onClick={onClick}
              className={
                "block py-2 text-base font-medium text-white text-opacity-80 hover:text-opacity-100 capitalize border-b-2 border-gray-500"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Menu.Item>
    </>
  );
};

export default ServicesMenu;
