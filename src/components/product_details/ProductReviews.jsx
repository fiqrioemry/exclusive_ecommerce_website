import React from "react";

import CommentReviewsElement from "../../elements/productReviews/CommentReviewsElement";
import AverageReviewsElement from "../../elements/productReviews/AverageReviewsElement";

const ProductReviews = ({ reviews }) => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap py-4 ">
          {/* 1. average review score*/}
          <AverageReviewsElement reviews={reviews} />

          {/* 2. lists review comment */}
          <CommentReviewsElement reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;
