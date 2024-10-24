import React from "react";

const CategoriesLoading = () => {
  return (
    <div className="flex flex-wrap">
      {[...Array(6)].map((index) => {
        return (
          <div className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 p-2" key={index}>
            <div className="h-[130px] md:h-[145px] lg:h-[165px] w-full p-2 border rounded-md flex flex-col gap-y-2">
              <div className="px-2 py-2 w-full h-full animate-pulse rounded-md bg-gray-200"></div>
              <div className="h-4 w-full animate-pulse rounded-full bg-gray-200"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesLoading;
