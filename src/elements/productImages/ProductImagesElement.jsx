import React from "react";

const ProductImagesElement = ({ product, handleImage }) => {
  return (
    <div className="flex items-center  order-2 md:order-1 md:flex-col flex-wrap md:w-[15%] w-full">
      {product.images &&
        product.images.map((image, index) => {
          return (
            <div className="md:w-full w-1/4 px-2 mb-2">
              <button
                onClick={() => handleImage(image)}
                key={index}
                className="rounded-md border-2 cursor-pointer w-full flex items-center justify-center "
              >
                <img
                  className="h-[100px]"
                  src={image}
                  alt={`image_product${index}`}
                />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ProductImagesElement;
