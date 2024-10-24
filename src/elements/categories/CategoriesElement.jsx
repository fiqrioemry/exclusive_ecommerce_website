import React from "react";

const CategoriesElement = ({ categories }) => {
  return (
    <div className="flex flex-wrap">
      {categories.map((category, index) => {
        return (
          <div className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 p-2" key={index}>
            <div className="h-[135px] w-full p-2 border bg-red-500">
              {category}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesElement;
