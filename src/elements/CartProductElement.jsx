import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd, MdFavorite, MdRemove } from "react-icons/md";

const CartProductElement = ({ item }) => {
  return (
    <div className="flex flex-row w-full gap-x-2 mb-2 border-b-2 py-2 bg-white">
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
            <button className=" w-10 px-2 flex justify-center items-center cursor-pointer">
              <MdRemove />
            </button>
            {/* amount */}
            <div className="w-full flex justify-center items-center">
              {item.amount}
            </div>
            {/* add icon */}
            <button className=" w-10 px-2 flex justify-center items-center cursor-pointer">
              <MdAdd />
            </button>
          </div>
          <div className="flex gap-x-4">
            <FaTrashAlt />
            <MdFavorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductElement;
