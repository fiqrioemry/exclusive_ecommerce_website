import React from "react";
import ReviewScoreElement from "../general/ReviewScoreElement";

const DescriptionDetailsElement = ({ product }) => {
  return (
    <div>
      {/* product title */}
      <div className="mb-4">
        <h1>{product.title}</h1>
      </div>
      {/* product review */}
      <div className="flex items-center gap-x-4 mb-4">
        {/* start */}
        <ReviewScoreElement product={product} />
      </div>

      {/* product price */}
      <div></div>
      {/* product description */}
      <div></div>
      {/* product option if any */}
      <div></div>
      {/* product quantity and add box */}
      <div></div>
      {/* product price in total */}
      <div></div>
      {/* button */}
      <div></div>

      {/* information */}
      <div>
        <div>Free Delivery</div>
        <div>Return Delivery</div>
      </div>
    </div>
  );
};

export default DescriptionDetailsElement;
