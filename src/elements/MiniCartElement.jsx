import React from "react";
import { useSelector } from "react-redux";
import { MdFavorite } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import CartProductElement from "./CartProductElement";

const MiniCartElement = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="fixed top-0 right-0 bottom-0 w-[420px] bg-white shadow-xl z-20">
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
              <button>
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

export default MiniCartElement;
