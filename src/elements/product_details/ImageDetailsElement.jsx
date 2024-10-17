import React from "react";

const ImageDetailsElement = ({ product }) => {
  return (
    <div className="flex flex-cols md:flex-row md:gap-x-4 md:gap-y-0 gap-y-4 bg-black">
      {/* more images */}
      <div className="flex flex-row md:flex-col gap-x-2 md:gap-y-2 md:gap-x-0 w-auto ">
        {product.images.map((image, index) => {
          return (
            <div className="rounded-md bg-gray-100">
              <img
                className="w-[100px] h-[100px] object-container"
                src={image}
                alt=""
              />
            </div>
          );
        })}
      </div>
      {/* thumbnail images */}
      <div className="rounded-md bg-gray-100">
        <img className="w-full h-[550px]" src={product.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default ImageDetailsElement;
