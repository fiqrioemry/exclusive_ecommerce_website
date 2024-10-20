import React from "react";
import { MdFavorite } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CartProductElement from "../elements/CartProductElement";
import { addCheckout, removeCheckout } from "../redux/actions/cartAction";

const MiniCart = ({ openCart, handleOpenCart }) => {
  const dispatch = useDispatch();
  const { cart, checkout } = useSelector((state) => state.cart);

  const handleClick = (e) => {
    const allSelected = e.target.checked; // Check if the "Select All" checkbox is checked
    const ids = cart.map((item) => item.id); // Get all IDs from the cart

    if (allSelected) {
      // If the checkbox is checked, dispatch addCheckout with all IDs
      dispatch(addCheckout(ids));
    } else {
      dispatch(removeCheckout(ids));
    }
  };

  console.log(checkout);

  return (
    <div
      className={`${
        openCart ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20`}
    >
      <div className="flex flex-col h-full justify-between px-4">
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
        {cart.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            KERANJANG KAMU MASIH KOSONG
          </div>
        ) : (
          <div className="flex flex-col h-full justify-between">
            <div className="overflow-y-auto max-h-[470px]">
              {cart.map((item, index) => (
                <CartProductElement item={item} key={index} />
              ))}
            </div>

            {/* checkout */}
            <div className="py-4">
              <div className="flex justify-between py-2">
                <div className="flex items-center gap-x-2">
                  <input
                    onChange={handleClick}
                    type="checkbox"
                    className="w-4 h-4"
                    checked={cart.every((item) =>
                      checkout.some((id) => id === item.id)
                    )}
                  />
                  <div>Pilih semua</div>
                </div>

                <div>
                  Total harga: $
                  {cart
                    .reduce((total, item) => {
                      return total + item.amount * item.price;
                    }, 0)
                    .toFixed(2)}
                </div>
              </div>

              <button className="btn w-full">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCart;
