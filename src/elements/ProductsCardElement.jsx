import React from "react";
import { BsEye } from "react-icons/bs";
import ButtonElement from "./ButtonElement";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";
import ReviewScoreElement from "./general/ReviewScoreElement";

export const ProductsCardElement = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);

  const handleSee = (id) => {
    navigate(`/product/${id}`);
  };

  const handleFavorite = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCart = (id, amount) => {
    dispatch(addToCart(id, amount));
  };

  const buttonStyle =
    "flex justify-center items-center py-4 px-12 w-full h-[50px] bg-secondary text-white rounded-md absolute cursor-pointer group-hover:bottom-0 -bottom-14 transition-all ease-in-out duration-300";
  return (
    <div className="flex flex-wrap w-full mb-[50px]">
      {products.map((product, index) => {
        const { id, title, thumbnail, discountPercentage, price } = product;
        return (
          <div className="lg:w-1/4 md:w-1/3 w-1/2 px-2 py-2" key={index}>
            {/* image product */}
            <div className="bg-gray-200/50 rounded-md relative mb-4 max-h-[250px] group overflow-hidden">
              <img
                className="object-center scale-[0.7] group-hover:opacity-60 transition-all durationn-300"
                src={thumbnail}
                alt={title}
              />
              <div className="absolute flex flex-col gap-y-2 mt-2 mr-2 items-center justify-center top-0 group-hover:right-0 -right-14 transition-all ease-in-out duration-300">
                <BsEye
                  onClick={() => handleSee(product.id)}
                  className="text-2xl cursor-pointer"
                />

                <MdFavorite
                  onClick={() => handleFavorite(product.id)}
                  className="text-2xl cursor-pointer"
                />
              </div>
              <ButtonElement
                style={buttonStyle}
                action={() => handleCart(id, 1)}
                title="Add to Cart"
                loading={loading}
              />
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

              <ReviewScoreElement product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
};