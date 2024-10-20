import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd, MdFavorite, MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCart,
  increaseCart,
  deleteCart,
  addCheckout,
  removeCheckout,
} from "../redux/actions/cartAction";

const CartProductElement = ({ item }) => {
  const dispatch = useDispatch();
  const { error, checkout } = useSelector((state) => state.cart);

  const deleteItem = (id) => {
    dispatch(deleteCart(id));
  };

  const increaseAmount = (id) => {
    dispatch(increaseCart(id));
  };

  const descreaseAmount = (id) => {
    dispatch(decreaseCart(id));
  };

  const handleCheckout = (e) => {
    const id = Number(e.target.value);

    if (e.target.checked) {
      dispatch(addCheckout(id));
    } else {
      dispatch(removeCheckout(id));
    }
  };

  return (
    <div className="flex flex-row w-full gap-x-2 mb-2 border-b-2 py-2 bg-white">
      <div className="flex gap-x-2">
        <input
          onChange={handleCheckout}
          type="checkbox"
          className="w-4 h-4"
          value={item.id}
          checked={checkout.some((id) => id === item.id)}
        />
      </div>
      <div className="w-[130px] h-[100px] flex items-center border rounded-md">
        <img className="object-cover" src={item.thumbnail} alt="" />
      </div>
      <div className="flex flex-col justify-between w-full">
        {/* product title */}
        <div className="text-md font-semibold">{item.title}</div>
        {/* product price */}
        <div>$ {item.price}</div>
        {/* product amount */}
        <div className="flex justify-between items-center ">
          <div className="flex w-[120px] items-center h-10 border rounded-full font-meidum">
            {/* remove icon */}
            <button
              onClick={() => deleteItem(item.id)}
              className={`${
                item.amount === 1 ? "flex" : "hidden"
              } w-10 px-2 justify-center items-center cursor-pointer`}
            >
              <FaTrashAlt />
            </button>
            <button
              onClick={() => descreaseAmount(item.id)}
              className={`${
                item.amount > 1 ? "flex" : "hidden"
              } w-10 px-2 justify-center items-center cursor-pointer`}
            >
              <MdRemove />
            </button>
            {/* amount */}
            <div className="w-full flex justify-center items-center">
              {item.amount}
            </div>
            {/* add icon */}
            <button
              onClick={() => increaseAmount(item.id)}
              className={`${
                item.amount === item.stock
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } w-10 px-2 flex justify-center items-center`}
              disabled={item.amount === item.stock}
            >
              <MdAdd />
            </button>
          </div>
          <div className="text-red-500 text-[12px]">
            {item.stock === item.amount ? `max = ${item.stock}` : ""}
          </div>
          <button>
            <MdFavorite className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductElement;
