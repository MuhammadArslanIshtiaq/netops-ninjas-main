import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ items }) => {
  return (
    <div className="service-card relative h-full transition-all duration-500 group hover:bg-black/50 border-2 border-gray-600 hover:border-l-secondary hover:border-t-secondary hover:border-r-pink-500 hover:border-b-pink-500 rounded-xl">
      <span className="absolute bottom-0 right-0 h-28 w-52 opacity-0 group-hover:opacity-100">
        <Image
          className="object-cover"
          fill
          src="/assets/images/card-p.png"
          alt="..."
        />
      </span>
      <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row items-start relative gap-6 p-6">
        <div className="bg-white group-hover:bg-g-primary rounded-full p-2">
          <span className="block h-14 min-w-[3.5rem] relative">
            <Image
              className="filter group-hover:invert"
              fill
              src={items.iconUrl}
            />
          </span>
        </div>
        <div className="flex flex-col">
          <h5 className="text-white group-hover:text-secondary capitalize text-2xl line-clamp-2 font-bold mb-3">
            {items.title}
          </h5>
          <p className="text-lg font-medium text-gray-400 group-hover:text-white line-clamp-3 mb-4">
            {items.description}
          </p>
          <Link
            href={items.link}
            className="flex items-center gap-2 text-lg font-semibold text-gray-400"
          >
            <span className="group-hover:text-gradient">Learn More</span>
            <span className="group-hover:text-secondary">
              <ArrowRightIcon className="block h-7" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
