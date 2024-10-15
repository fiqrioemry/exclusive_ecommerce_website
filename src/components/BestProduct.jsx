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
        <div className="grid grid-cols-4 gap-x-6">
          {products.map((product, index) => {
            return (
              <div className="max-w-[200px] h-[200px]" key={index}>
                <img src={product.thumbnail} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
