import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../redux/action/productAction";
import ProductImages from "../components/product_details/ProductImages";
import ProductReviews from "../components/product_details/ProductReviews";
import ProductImagesLoading from "../features/loading/ProductImagesLoading";
import ProductReviewsLoading from "../features/loading/ProductReviewsLoading";
import ProductDescriptions from "../components/product_details/ProductDescriptions";
import ProductDescriptionsLoading from "../features/loading/ProductDescriptionsLoading";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <section>
      <div className="container mx-auto px-2">
        {/* 1. navigation path info */}
        <div className="py-6 lg:py-10 px-2 text-sm ">
          <div>Home / product / {product.title}</div>
        </div>

        {/* 2. product details image & description */}
        <div className="flex flex-wrap mb-6">
          {/*3. product details image */}
          {loading || product.length === 0 ? (
            <ProductImagesLoading />
          ) : (
            <ProductImages product={product} />
          )}

          {/*4. product details description */}
          {loading || product.length === 0 ? (
            <ProductDescriptionsLoading />
          ) : (
            <ProductDescriptions product={product} />
          )}
        </div>

        {/*5. product reviews */}
        {loading || product.reviews === undefined ? (
          <ProductReviewsLoading />
        ) : (
          <ProductReviews reviews={product.reviews} />
        )}
      </div>
    </section>
  );
};

export default ProductDetailPage;
