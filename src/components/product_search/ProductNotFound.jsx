import React from "react";
import NotFoundImage from "../../assets/product_not_found.png";

const ProductNotFound = () => {
  return (
    <div className="px-4 w-full">
      <div className="flex space-x-6 rounded-md py-4 px-4 bg-white shadow-xl">
        <div className="flex items-center justify-center">
          <img src={NotFoundImage} alt="product_not_found" />
        </div>
        <div className="space-y-4 flex flex-col  items-center">
          <div className="text-2xl font-semibold">
            Oops, Product Nggak ditemukan
          </div>
          <div className="text-md font-light">
            Coba ubah keyword pencarian atau kurangi filter anda
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
