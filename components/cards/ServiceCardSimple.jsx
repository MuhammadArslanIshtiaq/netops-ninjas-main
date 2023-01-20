import React from "react";
import { useState } from "react";

const ContactCard = ({ items }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="service-card relative h-full transition-all duration-500 group hover:bg-black/50 border-2 border-gray-600 hover:border-l-secondary hover:border-t-secondary hover:border-r-pink-500 hover:border-b-pink-500 rounded-xl">
      <div className="p-6 flex flex-col items-start">
        <h5 className="text-white group-hover:text-secondary capitalize text-xl line-clamp-2 font-bold mb-3">
          {items.title}
        </h5>
        <p className="text-md font-medium text-gray-400 group-hover:text-white line-clamp-6 mb-4">
          {items.description}
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
