import React from "react";

// icons
import { BsEye } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import ReviewScoreElement from "./general/ReviewScoreElement";

export const ProductsElement = ({ product }) => {
  const { title, price, discountPercentage, thumbnail } = product;

  return (
    <div className="w-auto">
      {/* image product */}
      <div className="bg-gray-200/50 rounded-md relative mb-4 max-h-[250px] group overflow-hidden">
        <img
          className="object-center scale-[0.7] group-hover:opacity-60 transition-all durationn-300"
          src={thumbnail}
          alt={title}
        />
        <div className="absolute flex flex-col gap-y-2 mt-2 mr-2 items-center justify-center top-0 group-hover:right-0 -right-14 transition-all ease-in-out duration-300">
          <button className="p-2 rounded-full bg-white">
            <BsEye className="text-xl" />
          </button>
          <button className="p-2 rounded-full bg-white">
            <MdFavorite className="text-xl " />
          </button>
        </div>

        <button className="py-4 px-12 w-full bg-secondary text-white rounded-md absolute cursor-pointer group-hover:bottom-0 -bottom-14 transition-all ease-in-out duration-300">
          Add to Cart
        </button>
      </div>
      {/* details product */}
      <div className="flex flex-col gap-2">
        <h4>{title}</h4>
        <div className="flex flex-row items-center gap-x-4">
          <p className="text-tertiary">
            ${(price - (price * discountPercentage) / 100).toFixed(2)}
          </p>
          <p className="line-through text-secondary/50">${price}</p>
        </div>

        <ReviewScoreElement product={product} />
      </div>
    </div>
  );
};
