import React from "react";

const ProductReviewsLoading = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap py-4 ">
          {/* 1. average review score*/}
          <div className="w-full lg:w-[25%] py-6 px-2">
            <div className=" mb-4 flex items-center justify-between ">
              <div className="h-8 w-[100px] rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex flex-col py-6 items-center  mb-6  rounded-md bg-gray-300 animate-pulse"></div>
          </div>

          <div className="w-full lg:w-[75%] py-6 px-2">
            <div className=" mb-4 flex items-center justify-between ">
              <div className="h-8 w-[100px] rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex flex-col py-6 items-center  mb-6  rounded-md bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewsLoading;
