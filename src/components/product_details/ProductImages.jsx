import React, { useState, useEffect } from "react";
import ProductImagesElement from "../../elements/productImages/ProductImagesElement";

const ProductImages = ({ product }) => {
  const [thumbnail, setThumbnail] = useState(product.thumbnail);

  const handleImage = (image) => {
    setThumbnail(image);
  };

  useEffect(() => {
    setThumbnail(product.thumbnail);
  }, [product]);

  return (
    <div className="flex flex-wrap w-full lg:w-[60%] ">
      {/* 1.images*/}
      <ProductImagesElement product={product} handleImage={handleImage} />

      {/* 2.thumbnail images */}
      <div className="flex order-1 md:order-2 md:w-[85%] w-full px-2 mb-4">
        <div className=" w-full flex justify-center items-center rounded-md border-2 ">
          <img className="object-cover" src={thumbnail} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
