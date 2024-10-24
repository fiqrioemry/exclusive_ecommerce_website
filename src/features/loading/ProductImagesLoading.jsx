import React from "react";

const ProductImagesLoading = () => {
  return (
    <div className="flex flex-wrap w-full lg:w-[60%] ">
      {/* 1.images*/}
      <div className="flex order-2 md:order-1 md:flex-col flex-wrap md:w-[15%] w-full">
        <div className="md:w-full w-1/4 px-2 py-2">
          <div className="rounded-md h-[100px] bg-slate-300 animate-pulse border-2 cursor-pointer"></div>
        </div>
        <div className="md:w-full w-1/4 px-2 py-2">
          <div className="rounded-md h-[100px] bg-slate-300 animate-pulse border-2 cursor-pointer"></div>
        </div>
        <div className="md:w-full w-1/4 px-2 py-2">
          <div className="rounded-md h-[100px] bg-slate-300 animate-pulse border-2 cursor-pointer"></div>
        </div>
      </div>

      {/* 2.thumbnail images */}
      <div className="flex order-1 md:order-2 md:w-[85%] w-full py-2 px-2 mb-4">
        <div className=" w-full h-[500px] rounded-md bg-slate-300 animate-pulse "></div>
      </div>
    </div>
  );
};

export default ProductImagesLoading;
