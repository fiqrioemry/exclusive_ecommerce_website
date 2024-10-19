import React from "react";
import { useSelector } from "react-redux";
import { MdFavorite } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import CartProductElement from "../elements/CartProductElement";

const MiniCart = ({ openCart, handleOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div
      className={`${
        openCart ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20`}
    >
      <div className="flex flex-col h-full justify-between px-4">
        <div>
          {" "}
          {/* title */}
          <div className="flex justify-between items-center py-6 border-b-2">
            {/* title */}
            <div>Shopping Cart</div>
            <div className="flex justify-between gap-x-4 text-xl">
              <button>
                <MdFavorite />
              </button>
              <button onClick={handleOpenCart}>
                <FaArrowRight />
              </button>
            </div>
          </div>
          {/* product */}
          <div className="overflow-y-auto max-h-[470px]">
            {cart.map((item, index) => {
              return <CartProductElement item={item} key={index} />;
            })}
          </div>
        </div>

        {/* checkout */}
        <div className="py-4">
          <button className="btn w-full">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
