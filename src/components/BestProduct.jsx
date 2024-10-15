import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import { LiaStarSolid } from "react-icons/lia";
import { BsEye } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const BestProduct = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.allProducts);

  console.log(products);

  const [limit, setLimit] = useState(8);

  useEffect(() => {
    dispatch(getAllProducts(limit));
  }, [dispatch, limit]);

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
              <button className="btn">View All</button>
            </div>
          </div>
        </div>

        {/* products section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-x-3 md:gap-x-5 lg:gap-x-7 gap-y-[60px] mb-[60px]">
          {products.map((product, index) => {
            const { title, price, discountPercentage, reviews, thumbnail } =
              product;

            // Calculate the average rating
            const averageRating = (
              reviews.reduce(
                (accumulator, review) => accumulator + review.rating,
                0
              ) / reviews.length
            ).toFixed(1);

            // Determine the number of full, half, and empty stars
            const fullStars = Math.floor(averageRating); // Full stars
            const halfStar = averageRating % 1 >= 0.5 ? 1 : 0; // Half star condition
            const emptyStars = 5 - fullStars - halfStar; // Empty stars

            return (
              <div className="w-auto" key={index}>
                {/* image product */}
                <div className="bg-gray-200/50 rounded-md relative mb-4 max-h-[250px] group overflow-hidden">
                  <img
                    className="object-center scale-[0.7] group-hover:opacity-60 transition-all durationn-300"
                    src={thumbnail}
                    alt={title}
                  />
                  <div className="absolute flex flex-col gap-y-2 mt-2 mr-2 items-center justify-center top-0 group-hover:right-0 -right-14 transition-all ease-in-out duration-300">
                    <button className="p-2 rounded-full bg-white">
                      <BsEye className="text-xl" />
                    </button>
                    <button className="p-2 rounded-full bg-white">
                      <MdFavorite className="text-xl " />
                    </button>
                  </div>

                  <button className="py-4 px-12 w-full bg-secondary text-white rounded-md absolute cursor-pointer group-hover:bottom-0 -bottom-14 transition-all ease-in-out duration-300">
                    Add to Cart
                  </button>
                </div>
                {/* details product */}
                <div className="flex flex-col gap-2">
                  <h4>{title}</h4>
                  <div className="flex flex-row items-center gap-x-4">
                    <p className="text-tertiary">
                      ${(price - (price * discountPercentage) / 100).toFixed(2)}
                    </p>
                    <p className="line-through text-secondary/50">${price}</p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <div className="flex text-lg items-center">
                      {/* Render full stars */}
                      {[...Array(fullStars)].map((_, idx) => (
                        <LiaStarSolid
                          key={`full-${idx}`}
                          className="text-yellow-500"
                        />
                      ))}

                      {/* Render half star */}
                      {halfStar === 1 && (
                        <LiaStarSolid key="half" className="text-yellow-500" />
                      )}

                      {/* Render empty stars */}
                      {[...Array(emptyStars)].map((_, idx) => (
                        <LiaStarSolid
                          key={`empty-${idx}`}
                          className="text-gray-400"
                        />
                      ))}
                    </div>
                    <div>{averageRating}</div>
                    <div>({reviews.length})</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* button section */}
        <div className="flex justify-center items-center">
          <button className="btn w-full md:w-auto">Load More Products</button>
        </div>
      </div>
    </section>
  );
};

export default BestProduct;
