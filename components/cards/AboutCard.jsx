import Image from "next/image";
import React from "react";

const AboutCard = ({ items }) => {
  return (
    <div className="px-8 xl:px-14 relative h-full md:h-[21.90rem] bg-no-repeat bg-contain md:bg-[url('/assets/images/border.svg')] border-2 md:border-none border-l-secondary border-t-secondary border-r-pink-500 border-b-pink-500">
      <div className="bg-no-repeat bg-cover bg-[url('/assets/images/bg-icon.svg')] h-20 w-20 -translate-y-10 flex items-center justify-center">
        <span className="relative block w-1/2 h-1/2">
          <Image className="object-contain" fill src={items.iconUrl} />
        </span>
      </div>
      <div className="pb-8 -mt-6 lg:mt-0">
        <h5 className="text-secondary capitalize text-2xl line-clamp-2 font-bold mb-4 lg:mb-6">
          {items.title}
        </h5>
        <p className="text-lg font-medium text-gray-500 group-hover:text-white line-clamp-3">
          {items.description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
