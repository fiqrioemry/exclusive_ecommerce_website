import React, { useState } from "react";
import ReviewScoreElement from "../general/ReviewScoreElement";
import { MdAdd, MdRemove } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GiBackForth } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { toast } from "react-toastify";
const DescriptionDetailsElement = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);

  const handleCart = () => {
    const results = cart.findIndex((item) => item.id === product.id);
    if (results >= 0) {
      const available = cart[results].amount + count <= product.stock;
      if (available === true) {
        toast.info("Berhasil menambahkan ke keranjang");
        dispatch(addToCart(product.id, count));
      } else {
        toast.error("Keranjang Melebihi stock product");
      }
    } else {
      toast.info("Berhasil menambahkan ke keranjang");
      dispatch(addToCart(product.id, count));
    }
  };

  const handleIncrease = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
          <button
            onClick={handleDecrease}
            className={`${
              count === 1
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-tertiary"
            } p-4 border-r rounded-l-md  transition duration-300`}
            disabled={count === 1}
          >
            <MdRemove />
          </button>
          <div className="text-center w-[100px]">{count}</div>
          <button
            onClick={handleIncrease}
            className={`${
              count === product.stock
                ? "cursor-not-allowed"
                : "cursor-pointer hover:bg-tertiary"
            } p-4 border-l rounded-r-mdtransition duration-300`}
            disabled={count === product.stock}
          >
            <MdAdd />
          </button>
        </div>
        <div className="text-xl">Stock : {product.stock}</div>
      </div>
      {/* product price in total */}
      <div className="font-medium text-xl mb-6">
        Subtotal : ${(product.price * count).toFixed(2)}
      </div>
      {/* button */}
      <div className="flex flex-col lg:flex-row gap-2 mb-6">
        <button onClick={handleCart} className="btn w-full">
          Add to Cart
        </button>
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
