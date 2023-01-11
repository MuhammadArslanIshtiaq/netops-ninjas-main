import Image from "next/image";
import React from "react";

const BrandCard = ({ items }) => {
  return (
    <div className="brand-card h-20 w-52 bg-contain bg-center bg-no-repeat bg-[url('/assets/images/brand-card.svg')] flex justify-center items-center">
      <span className="relative h-[70%] w-[70%]">
        <Image className="object-contain" fill src={items.logoUrl} alt="..." />
      </span>
    </div>
  );
};

export default BrandCard;
