import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsCardElement from "../elements/ProductsCardElement";
import { getProductCategories } from "../redux/action/productAction";
import ProductsCardLoading from "../features/loading/ProductsCardLoading";
import ProductNotFound from "../components/product_search/ProductNotFound";

const ProductCategories = () => {
  const { categories } = useParams();
  const dispatch = useDispatch();
  const { categoryProducts, loading } = useSelector(
    (state) => state.categoryProducts
  );

  console.log(categoryProducts);

  useEffect(() => {
    dispatch(getProductCategories(categories));
  }, [dispatch, categories]);

  return (
    <section>
      <div className="container mx-auto">
        {/* 1. navigation path info */}
        <div className="py-6 lg:py-10 px-4 text-sm ">
          <div>Home / product / category / {categories}</div>
        </div>
        <div className="flex flex-wrap">
          {/* 2. Product display area */}
          <div className="flex w-full px-2 md:px-0">
            {loading ? (
              <ProductsCardLoading />
            ) : categoryProducts.length === 0 ? (
              <ProductNotFound />
            ) : (
              <ProductsCardElement products={categoryProducts.products} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
