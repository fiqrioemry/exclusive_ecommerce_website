import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const FilterBoxElement = () => {
  // State to manage multiple dropdowns in an object
  const [openDropdowns, setOpenDropdowns] = useState({
    price: false,
    rating: false,
  });

  // Generic toggle function
  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div className="flex flex-col rounded-md shadow-xl mr-0 md:mr-4 w-full mb-8">
      <div className="flex items-center font-semibold text-xl border-b px-4 py-4">
        Filter
      </div>

      <div>
        {/* 1. Filter by price */}
        <div className="overflow-hidden">
          <div className="flex items-center px-4 mt-4 justify-between">
            <div className="text-xl font-semibold">Price</div>
            <button
              className="rounded-full bg-gray-200 p-2"
              onClick={() => toggleDropdown("price")}
            >
              <FaArrowUp
                className={`${
                  openDropdowns.price ? "rotate-180" : ""
                } duration-300 transition-all text-lg`}
              />
            </button>
          </div>
          <div
            className={`${
              openDropdowns.price ? "h-[115px]" : "h-0"
            } px-4 transition-all duration-300 overflow-hidden`}
          >
            {/* Minimum price */}
            <div className="flex items-center h-10 mb-4 mt-4">
              <div className="flex items-center h-full py-2 px-4 text-lg font-bold rounded-l-md border border-gray-200 bg-gray-100">
                $
              </div>
              <input
                type="text"
                className="h-full py-2 px-4 outline-none rounded-r-md border border-gray-200 bg-white w-full"
                placeholder="Minimum price"
              />
            </div>

            {/* Maximum price */}
            <div className="flex items-center h-10">
              <div className="flex items-center h-full text-lg font-bold py-2 px-4 rounded-l-md border border-gray-200 bg-gray-100">
                $
              </div>
              <input
                type="text"
                className="h-full py-2 px-4 outline-none rounded-r-md border border-gray-200 bg-white w-full"
                placeholder="Maximum price"
              />
            </div>
          </div>
        </div>

        {/* 2. Filter by rating */}
        <div className="overflow-hidden">
          <div className="flex items-center px-4 py-4 justify-between">
            <div className="text-xl font-semibold">Rating</div>
            <button
              className="rounded-full bg-gray-200 p-2"
              onClick={() => toggleDropdown("rating")}
            >
              <FaArrowUp
                className={`${
                  openDropdowns.rating ? "rotate-180" : ""
                } duration-300 transition-all text-lg`}
              />
            </button>
          </div>
          <div
            className={`${
              openDropdowns.rating ? "h-[125px]" : "h-0"
            } px-4 transition-all duration-300 overflow-hidden`}
          >
            {/* Minimum rating */}
            <div className="flex items-center h-10 mb-4 mt-4">
              <input
                type="number"
                className="h-full py-2 px-4 outline-none rounded-md border border-gray-200 bg-white w-full"
                placeholder="Minimum rating"
                min="1"
                max="5"
              />
            </div>
            <div className="flex items-center h-10">
              <input
                type="number"
                className="h-full py-2 px-4 outline-none rounded-md border border-gray-200 bg-white w-full"
                placeholder="Maximum rating"
                min="1"
                max="5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBoxElement;
