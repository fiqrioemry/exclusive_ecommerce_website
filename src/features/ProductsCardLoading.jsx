import React from "react";

const ProductsCardLoading = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 justify-between items-center gap-x-3 md:gap-x-5 lg:gap-x-7 gap-y-[60px] mb-[60px]">
      {[...Array(4)].map((_, index) => {
        return (
          <div className="w-auto animate-pulse" key={index}>
            {/* image product */}
            <div className=" bg-slate-300 rounded-md mb-4 min-h-[250px] min-w-[270px] "></div>

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
        );
      })}
    </div>
  );
};

export default ProductsCardLoading;
