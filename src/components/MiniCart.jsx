import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import CartProductElement from "../elements/CartProductElement";
import { addCheckout, removeCheckout } from "../redux/actions/cartAction";

const MiniCart = ({ openCart, handleOpenCart }) => {
  const dispatch = useDispatch();
  const { cart, checkout } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  const handleSelectAll = (e) => {
    const ids = cart.map((item) => item.id);

    if (cart.length !== checkout.length) {
      dispatch(addCheckout(ids));
    } else {
      dispatch(removeCheckout(ids));
    }
  };

  useEffect(() => {
    const totalAmount = cart
      .filter((item) => checkout.includes(item.id))
      .reduce((acc, item) => acc + item.amount * item.price, 0);
    setTotal(totalAmount);
  }, [checkout, cart]);

  return (
    <div
      className={`${
        openCart ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20`}
    >
      <div className="flex flex-col h-full justify-between px-4">
        {/* title */}
        <div className="flex justify-between items-center py-6 border-b-2">
          <div>Shopping Cart</div>
          <div className="flex justify-between gap-x-4 text-xl">
            <button onClick={handleOpenCart}>
              <FaArrowRight />
            </button>
          </div>
        </div>

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
                  {/* Select All Checkbox */}
                  <input
                    onChange={handleSelectAll}
                    type="checkbox"
                    className="w-4 h-4"
                    checked={checkout.length === cart.length}
                  />
                  <div>Pilih semua</div>
                </div>

                <div>Total harga: ${total.toFixed(2)}</div>
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
