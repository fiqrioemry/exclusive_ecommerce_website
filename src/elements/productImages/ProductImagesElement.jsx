import React from "react";

const ProductImagesElement = ({ product, handleImage }) => {
  return (
    <div className="flex order-2 md:order-1 md:flex-col flex-wrap md:w-[15%] w-full">
      {product.images &&
        product.images.map((image, index) => {
          return (
            <div className="md:w-full w-1/4 px-2">
              <button
                onClick={() => handleImage(image)}
                key={index}
                className="rounded-md border-2 cursor-pointer"
              >
                <img src={image} alt="" />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductImagesElement;
