import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* title */}
        <div>
          <div className="flex flex-row items-center gap-4 text-tertiary font-semibold mb-5">
            <div className="w-5 h-10 rounded-md bg-tertiary"></div>
            <h4>This Month</h4>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h1>Browse By Category</h1>
            <div className="flex gap-x-4">
              <div className="p-3 rounded-full bg-secondary/20 cursor-pointer">
                <FaArrowLeft className="text-xl block" />
              </div>
              <div className="p-3 rounded-full  bg-secondary/20 cursor-pointer">
                <FaArrowRight className="text-xl block" />
              </div>
            </div>
          </div>
        </div>

        {/* card */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4"></div>
      </div>
    </section>
  );
};

export default Categories;
