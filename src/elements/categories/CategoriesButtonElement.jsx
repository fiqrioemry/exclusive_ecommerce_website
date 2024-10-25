import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const CategoriesButtonElement = ({ previous, next }) => {
  return (
    <div className="flex items-center gap-x-4">
      <button className="p-3 bg-tertiary rounded-full" onClick={previous}>
        <FaArrowLeft className="text-lg md:text-xl text-white" />
      </button>
      <button className="p-3 bg-tertiary rounded-full">
        <FaArrowRight
          className="text-lg md:text-xl text-white"
          onClick={next}
        />
      </button>
    </div>
  );
};

export default CategoriesButtonElement;
