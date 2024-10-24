import React from "react";

const ProductDescriptionsLoading = () => {
  return (
    <div className="flex lg:w-[40%] py-6 md:py-0 w-full px-4">
      <div className=" w-full">
        <div className="mb-4 h-4 w-[200px] bg-slate-300 rounded-md animate-pulse"></div>
        <div className="mb-8 h-4 w-12 bg-slate-300 rounded-md animate-pulse"></div>
        <div className="mb-4 h-4 w-full bg-slate-300 rounded-md animate-pulse"></div>
        <div className="mb-4 h-4 w-full bg-slate-300 rounded-md animate-pulse"></div>
        <div className="mb-4 h-4 w-full bg-slate-300 rounded-md animate-pulse"></div>
        <div className="flex gap-5 items-center mb-4">
          <div className="h-8 w-[175px] bg-slate-300 rounded-md animate-pulse"></div>
          <div className="h-6 w-24 bg-slate-300 rounded-md animate-pulse"></div>
        </div>
        <div className="font-medium text-xl mb-6"></div>
        <div className="flex flex-col lg:flex-row gap-2 mb-6">
          <button className="btn w-full h-[60px] bg-slate-300 animate-pulse"></button>
          <button className="btn w-full h-[60px] bg-slate-300 animate-pulse"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionsLoading;
