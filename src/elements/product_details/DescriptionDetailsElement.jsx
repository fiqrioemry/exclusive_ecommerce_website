import React, { useState } from "react";
import ReviewScoreElement from "../general/ReviewScoreElement";
import { MdAdd, MdRemove } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiBackForth } from "react-icons/gi";
const DescriptionDetailsElement = ({ product }) => {
  return (
    <div>
      {/* product title */}
      <div className="mb-4">
        <h1>{product.title}</h1>
      </div>
      {/* product review */}
      <div className="flex items-center gap-x-4 mb-4">
        <ReviewScoreElement product={product} />
      </div>

      {/* product price */}
      <div className="text-xl">$ {product.price}</div>
      {/* product description */}
      <div className="py-4 mb-4 border-b-2">{product.description}</div>
      {/* product option if any */}
      <div></div>
      {/* product quantity and add box */}
      <div className="flex gap-5 items-center mb-4">
        <div className="flex items-center border rounded-md">
          <button className="p-4 border-r rounded-l-md hover:bg-tertiary transition duration-300">
            <MdRemove />
          </button>
          <div className="text-center w-[100px]">242</div>
          <button className="p-4 border-l rounded-r-md hover:bg-tertiary transition duration-300">
            <MdAdd />
          </button>
        </div>
        <div className="text-xl">Stock : {product.stock}</div>
      </div>
      {/* product price in total */}
      <div className="font-medium text-xl mb-6">
        Subtotal : ${product.price}{" "}
      </div>
      {/* button */}
      <div className="flex flex-col lg:flex-row gap-2 mb-6">
        <button className="btn w-full">Add to Cart</button>
        <button className="btn w-full">Checkout</button>
      </div>

      {/* information */}
      <div className="border rounded-md">
        <div className="flex flex-row p-2 items-center border-b">
          <div className="p-4">
            <TbTruckDelivery className="text-3xl" />{" "}
          </div>
          <div>
            <p className="text-xl font-semibold">Free Delivery</p>
            <p>Enter Your Postal code for Delivery Availability</p>
          </div>
        </div>
        <div className="flex flex-row p-2 items-center">
          <div className="p-4">
            <GiBackForth className="text-3xl" />{" "}
          </div>
          <div>
            <p className="text-xl font-semibold">Free Delivery</p>
            <p>Enter Your Postal code for Delivery Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionDetailsElement;
