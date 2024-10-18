import React, { useState, useEffect } from "react";
import ButtonElement from "../elements/ButtonElement";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { ProductsElement } from "../elements/ProductsElement";
import { getAllProducts } from "../redux/actions/productAction";
import ProductsCardLoading from "../features/ProductsCardLoading";
import { ProductsCardElement } from "../elements/ProductsCardElement";

const BestProduct = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);

  const { products, loading, total } = useSelector(
    (state) => state.allProducts
  );

  const loadMoreProduct = () => {
    setLimit(limit + 4);
    scroll.scrollMore(375, {
      duration: 300,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [dispatch, limit]);

  const productLoadingBtn =
    "btn w-full md:w-auto min-w-[300px] flex justify-center";

  return (
    <section className="py-6">
      <div className="container mx-auto">
        {/* title section */}
        <div className="flex flex-col gap-y-5 px-2 mb-[60px]">
          <div className="flex flex-row items-center gap-4 text-tertiary font-semibold">
            <div className="w-5 h-10 rounded-md bg-tertiary"></div>
            <h4>This Month</h4>
          </div>
          <div className="flex items-center justify-between">
            <h1>Best Selling Products</h1>
            <div>
              <button className="btn">View All</button>
            </div>
          </div>
        </div>

        {/* products section */}
        {!products ? (
          // animation while fetching product
          <ProductsCardLoading />
        ) : (
          <div>
            {/* product card section */}
            <div className="flex flex-wrap mb-[60px]">
              {products.map((product, index) => {
                return <ProductsCardElement product={product} key={index} />;
              })}
            </div>

            {/* animation while fetching product */}
            {loading && <ProductsCardLoading />}

            {/* product button loading */}
            <div className="flex justify-center items-center">
              {limit === total ? (
                <></>
              ) : (
                <ButtonElement
                  style={productLoadingBtn}
                  loading={loading}
                  action={loadMoreProduct}
                  title="Load More Products"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestProduct;
