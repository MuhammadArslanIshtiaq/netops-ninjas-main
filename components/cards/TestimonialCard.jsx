import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const TestimonialCard = ({ items }) => {
  return (
    <div className="text-center">
      <h5 className="text-xl font-bold capitalize text-secondary mb-2">
        {items.name}
      </h5>
      <h6 className="text-2xl font-medium text-pink-600">{items.role}</h6>
      <div className="flex gap-3 justify-center my-6">
        {items.stars === 1 && <StarIcon className="h-8 w-8 text-yellow-500" />}
        {items.stars === 2 && (
          <>
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
          </>
        )}
        {items.stars === 3 && (
          <>
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
          </>
        )}
        {items.stars === 4 && (
          <>
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
          </>
        )}
        {items.stars === 5 && (
          <>
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
            <StarIcon className="h-8 w-8 text-yellow-500" />
          </>
        )}
      </div>
      <i className="text-lg sm:text-3xl sm:leading-snug font-medium text-gray-400">
        {items.review}
      </i>
    </div>
  );
};

export default TestimonialCard;
