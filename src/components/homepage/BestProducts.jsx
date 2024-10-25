import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import ButtonElement from "../../elements/ButtonElement";
import { getAllProducts } from "../../redux/action/productAction";
import ProductsCardLoading from "../../features/loading/ProductsCardLoading";
import ProductsCardElement from "../../elements/ProductsCardElement";

const BestProducts = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(4);
  const { products, total, loading } = useSelector((state) => state.products);

  const loadMoreProducts = () => {
    setLimit(limit + 4);
    scroll.scrollMore(350, {
      duration: 300,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [dispatch, limit]);

  const buttonStyle =
    "btn w-full md:w-auto min-w-[300px] bg-tertiary text-white hover:opacity-80 ";
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* section title */}
        <div className="flex justify-between items-center px-2 mb-6">
          {/* title */}
          <div className="flex flex-row items-center gap-x-2">
            <div className="h-10 w-4 rounded-md bg-tertiary"></div>
            <h1 className="text-2xl font-medium">Best Products</h1>
          </div>
        </div>

        {/* section details */}

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
                  style={buttonStyle}
                  loading={loading}
                  action={loadMoreProducts}
                  title="More Products"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestProducts;
