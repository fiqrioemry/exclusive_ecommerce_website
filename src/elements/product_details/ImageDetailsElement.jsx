import React, { useState } from "react";

const ImageDetailsElement = ({ product }) => {
  const [thumbnail, setThumbnail] = useState(product.thumbnail);

  const handleImage = (image) => {
    setThumbnail(image);
  };

  return (
    <div className="flex flex-col lg:flex-row mr-0 md:mr-4">
      {/* more images */}
      <div className="flex order-2 lg:order-1 flex-row lg:flex-col justify-normal lg:justify-normal w-full lg:w-auto gap-x-4 lg:gap-y-4 mr-4 mb-4 ">
        {product.images &&
          product.images.map((image, index) => {
            return (
              <button
                onClick={() => handleImage(image)}
                key={index}
                className=" w-[100px] h-[100px] rounded-md bg-gray-100 cursor-pointer"
              >
                <img src={image} alt="" />
              </button>
            );
          })}
      </div>
      {/* thumbnail images */}
      <div className="flex order-1 lg:order-2 items-center justify-center w-full rounded-md bg-gray-100 mb-4">
        <img className="object-cover lg:h-[500px] " src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default ImageDetailsElement;
