import React, { useState, useEffect } from "react";
import ButtonElement from "../elements/ButtonElement";
import { useSelector, useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { getAllProducts } from "../redux/actions/productAction";
import ProductsCardLoading from "../features/ProductsCardLoading";
import { ProductsCardElement } from "../elements/ProductsCardElement";

const BestProduct = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);

  const loadMoreProduct = () => {
    setLimit(limit + 4);
    scroll.scrollMore(375, {
      duration: 300,
      smooth: "easeInOutQuint",
    });
  };

  const { products, loading, total } = useSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [dispatch, limit]);

  return (
    <section className="mb-[50px]">
      {/* title section */}
      <div className="flex flex-col gap-y-4 px-2 ">
        <div className="flex flex-row items-center gap-4 text-tertiary font-semibold">
          <div className="w-5 h-10 rounded-md bg-tertiary"></div>
          <h4>This Month</h4>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-4xl">Best Selling Products</h1>
          <button className="btn">View All</button>
        </div>
      </div>

      {/* products section */}
      {!products ? (
        // animation while fetching product
        <ProductsCardLoading />
      ) : (
        <div>
          {/* showing product card */}
          <ProductsCardElement products={products} />

          {/* animation while fetching product */}
          {loading && <ProductsCardLoading />}

          {/* product button loading */}
          <div className="flex justify-center items-center">
            {limit === total ? (
              <></>
            ) : (
              <ButtonElement
                style={"btn w-full md:w-auto min-w-[300px] flex justify-center"}
                loading={loading}
                action={loadMoreProduct}
                title="Load More Products"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BestProduct;
