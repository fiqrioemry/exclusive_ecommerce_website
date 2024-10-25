/* eslint-disable react-hooks/exhaustive-deps */
import debounce from "lodash/debounce";
import { useDispatch } from "react-redux";
import { FaArrowUp } from "react-icons/fa";
// import ReviewScoreElement from "./general/ReviewScoreElement";
import React, { useCallback, useEffect, useState } from "react";
import { getSearchResults } from "../../redux/action/productAction";
import ReviewScoreElement from "../../elements/ReviewScoreElement";

const FilterBoxProducts = ({ searchParams }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999);

  const debounceSearch = useCallback(
    debounce(() => {
      dispatch(getSearchResults(searchParams, minPrice, maxPrice, minRating));
    }, 500),
    [searchParams, minPrice, maxPrice, minRating]
  );

  useEffect(() => {
    if (minPrice || maxPrice !== 99999 || minRating) {
      if (Number(minPrice) <= Number(maxPrice)) {
        debounceSearch();
      } else {
        setError(true);
      }
    }
  }, [searchParams, minPrice, maxPrice, minRating, debounceSearch]);

  const [openDropdowns, setOpenDropdowns] = useState({
    price: false,
    rating: false,
  });

  const handleRating = (e) => setMinRating(Number(e.target.value));
  const handleInputMin = (e) => {
    setError(false);
    setMinPrice(e.target.value);
  };
  const handleInputMax = (e) => {
    setError(false);
    setMaxPrice(e.target.value === "" ? 99999 : e.target.value);
  };

  const toggleDropdown = (key) =>
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex flex-col rounded-md shadow-xl w-full mb-4">
      <div className="flex items-center font-semibold text-xl border-b px-4 py-4">
        Filter
      </div>

      <div>
        {/* Price Filter */}
        <div className="overflow-hidden ">
          <div className="flex items-center px-4 py-4 justify-between">
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
              openDropdowns.price ? "h-[130px]" : "h-0"
            } px-4 transition-all bg-gray-500 duration-300 overflow-hidden `}
          >
            {/* Minimum price */}
            <div className="flex flex-col mb-4 mt-4 gap-y-2">
              <div className="flex items-center h-10">
                <span className="flex items-center h-full py-2 px-4 text-lg font-bold rounded-l-md border border-gray-200 bg-gray-100">
                  $
                </span>
                <input
                  type="number"
                  className={`h-full py-2 px-4 rounded-r-md border outline-none bg-white w-full ${
                    error ? "border-red-500" : "border-gray-200"
                  }`}
                  placeholder="Minimum price"
                  value={minPrice === 0 ? "" : minPrice}
                  onChange={handleInputMin}
                />
              </div>
              {error && (
                <div className="text-sm text-red-500">Exceed max. price</div>
              )}
            </div>

            {/* Maximum price */}
            <div className="flex items-center h-10">
              <span className="flex items-center h-full text-lg font-bold py-2 px-4 rounded-l-md border border-gray-200 bg-gray-100">
                $
              </span>
              <input
                type="number"
                className="h-full py-2 px-4 outline-none rounded-r-md border border-gray-200 bg-white w-full"
                placeholder="Maximum price"
                value={maxPrice === 99999 ? "" : maxPrice}
                onChange={handleInputMax}
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="overflow-hidden ">
          <div className="flex items-center px-4 py-4  justify-between">
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
              openDropdowns.rating ? "h-[80px]" : "h-0"
            } px-4 transition-all bg-gray-500 duration-300 overflow-hidden `}
          >
            <div className="flex flex-col items-center h-10 mb-4 mt-4">
              <input
                type="range"
                className="w-full"
                min="1"
                max="5"
                step="1"
                value={minRating}
                onChange={handleRating}
              />
              <div className="mt-2 text-lg font-semibold">
                <div className="flex items-center">
                  <ReviewScoreElement reviews={minRating} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBoxProducts;
