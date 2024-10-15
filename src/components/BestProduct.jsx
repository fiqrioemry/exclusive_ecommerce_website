import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";

const BestProduct = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.allProducts);

  const [limit, setLimit] = useState(8);

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [dispatch]);
  return (
    <section className="py-6">
      <div className="container mx-auto">
        {/* title section */}
        <div className="flex flex-col gap-y-5 mb-[60px]">
          <div className="flex flex-row items-center gap-4 text-tertiary font-semibold">
            <div className="w-5 h-10 rounded-md bg-tertiary"></div>
            <h4>This Month</h4>
          </div>
          <div className="flex items-center justify-between">
            <h1>Best Selling Products</h1>
            <div>
              <button></button>
            </div>
          </div>
        </div>

        {/* products section */}
        <div className="flex flex-wrap justify-between items-center mb-8 ">
          {products.map((product, index) => {
            return (
              <div className="max-w-[200px] h-[200px]" key={index}>
                <img src={product.thumbnail} alt="" />
              </div>
            );
          })}
        </div>
        {/* button section */}
        <div className="flex justify-center items-center">
          <button className="btn w-full md:w-auto  ">Load More Products</button>
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
