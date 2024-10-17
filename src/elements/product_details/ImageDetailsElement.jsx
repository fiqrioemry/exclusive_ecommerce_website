import React from "react";

const ImageDetailsElement = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row mr-0 md:mr-4">
      {/* more images */}
      <div className="flex flex-row lg:flex-col gap-x-2 lg:gap-y-4 mr-4 ">
        {product.images.map((image, index) => {
          return (
            <div
              key={index}
              className=" w-[100px] h-[100px] rounded-md bg-gray-100 cursor-pointer"
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
      {/* thumbnail images */}
      <div className="flex items-center justify-center w-full rounded-md bg-gray-100">
        <img
          className="object-cover h-[500px] "
          src={product.thumbnail}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageDetailsElement;
