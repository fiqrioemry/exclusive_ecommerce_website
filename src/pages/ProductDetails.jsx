// import page functionality
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../redux/actions/productAction";
import { MdFavorite } from "react-icons/md";

// import element and features for pages
import ImageDetailsElement from "../elements/product_details/ImageDetailsElement";
import ImageDetailsLoading from "../features/product_details/ImageDetailsLoading";
import DescriptionDetailsElement from "../elements/product_details/DescriptionDetailsElement";
import DescriptionDetailsLoading from "../features/product_details/DescriptionDetailsLoading";
import ReviewScoreElement from "../elements/general/ReviewScoreElement";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.productId);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

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
        <div className="flex flex-wrap mb-6 ">
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

        {/* product reviews */}
        <div className="flex flex-wrap border-t-2 py-4 mr-4 ">
          {/* review score*/}
          <div className="w-full lg:w-[25%] mb-4 ">
            <div className="flex flex-col py-6 items-center mr-6 mb-6  rounded-md border-2">
              <div className="uppercase text-2xl font-semibold mb-4">
                Review Score
              </div>
              <div className="text-4xl font-bold mb-4">4.9 / 5.0</div>
              <div>90 Rating - 40 Ulasan</div>
            </div>
            <div></div>
          </div>
          {/* review comment */}
          <div className="w-full lg:w-[75%] py-6">
            <div className=" mb-4 flex justify-between ">
              <div className="uppercase text-2xl font-semibold">
                Review Comment
              </div>
              <button className="btn">Urutkan</button>
            </div>

            <div>
              {[...Array(4)].map((_, index) => {
                return (
                  <div className="border-b-2 mb-4" key={index}>
                    <div className="flex flex-row items-center mb-4">
                      <div>
                        <ReviewScoreElement product={product} />
                      </div>
                      8 Bulan lalu
                    </div>
                    <div className="flex flex-row items-center gap-x-4 mb-4">
                      <div className="h-12 w-12 bg-black rounded-full"></div>
                      <div>Ahmad Fiqri</div>
                    </div>
                    <div className="mb-6">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Enim quam natus blanditiis tempore veritatis quasi harum
                      ducimus dolores iure ut! Velit sunt earum voluptatem ut.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* product related */}
      </div>
    </section>
  );
};

export default ProductDetails;
