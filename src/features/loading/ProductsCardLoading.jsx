import React from "react";

const ProductsCardLoading = () => {
  return (
    <div className="flex flex-wrap w-full mb-[50px]">
      {[...Array(4)].map((_, index) => {
        return (
          <div className="lg:w-1/4 md:w-1/3 w-1/2 px-2 py-2" key={index}>
            <div className="w-auto animate-pulse">
              {/* image product */}
              <div className=" bg-slate-300 rounded-md mb-4 min-h-[250px] "></div>

              {/* details product */}
              <div className="flex flex-col gap-3">
                <div className="h-3 w-24 rounded-lg bg-slate-300"></div>
                <div className="h-3 w-16 rounded-lg bg-slate-300"></div>
                <div className="flex flex-row items-center gap-2">
                  <div className="h-3 w-24 rounded-lg bg-slate-30"></div>
                  <div className="h-3 w-8 rounded-lg bg-slate-30"></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCardLoading;
