// import page functionality
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/actions/productAction";

// import element and features for pages
import ImageDetailsElement from "../elements/product_details/ImageDetailsElement";
import ImageDetailsLoading from "../features/product_details/ImageDetailsLoading";
import DescriptionDetailsElement from "../elements/product_details/DescriptionDetailsElement";
import DescriptionDetailsLoading from "../features/product_details/DescriptionDetailsLoading";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productId);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  console.log("product details", product);
  return (
    <section className="py-8">
      <div className="container mx-auto">
        {/* product details page source */}
        <div className="mb-8">
          <div className="flex flex-row gap-2 text-secondary/60">
            <div>product</div>
            <div>/ category</div>
            <div>/ {product.category}</div>
          </div>
        </div>

        {/* product details image & description */}
        <div className="flex flex-wrap">
          {/* product details image */}
          <div className="w-full md:w-[60%]">
            {loading ? (
              <ImageDetailsLoading />
            ) : (
              <ImageDetailsElement product={product} />
            )}
          </div>

          {/* product details description */}
          <div className="w-full md:w-[40%]">
            {loading ? (
              <DescriptionDetailsLoading />
            ) : (
              <DescriptionDetailsElement product={product} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
