/* eslint-disable react/style-prop-object */

import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdRemove } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonElement from "../../elements/ButtonElement";
import { addCheckout } from "../../redux/action/checkoutAction";
import { addToCart, resetStatus } from "../../redux/action/cartAction";
import InformationDetailsElement from "../../elements/productDetails/InformationDetailsElement";

const ProductDescriptions = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const accessToken = Cookies.get("accessToken");
  const { cart, loading, success, fail } = useSelector((state) => state.cart);

  const handleCart = () => {
    dispatch(addToCart(product.id, count));
  };

  const handleCheckout = () => {
    if (accessToken) {
      dispatch(addToCart(product.id, count));
      dispatch(addCheckout(product.id));
      navigate("/checkout");
    } else if (!accessToken) {
      navigate("/signin");
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (success) {
      toast.info("Berhasil menambahkan Product ke Cart");
      dispatch(resetStatus());
    } else if (fail) {
      toast.error("Total Amount melebihi Stock Product");
      dispatch(resetStatus());
    }
  }, [dispatch, cart, success, fail]);

  return (
    <div className="flex lg:w-[40%] w-full px-4">
      <div>
        {/* product title */}
        <div className="mb-2">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
        </div>

        {/* product price */}
        <div className="text-xl font-medium">$ {product.price}</div>

        {/* product description */}
        <div className="py-4 mb-4 border-b-2">{product.description}</div>

        {/* product quantity and add box */}
        <div className="flex gap-5 items-center mb-4">
          <div className="flex items-center border rounded-md">
            <button
              onClick={handleDecrease}
              className={`${
                count === 1 ? "cursor-not-allowed" : ""
              } p-4 border-r rounded-l-md`}
              disabled={count === 1}
            >
              <MdRemove />
            </button>
            <div className="text-center w-[100px]">{count}</div>
            <button
              onClick={handleIncrease}
              className={`${
                count === product.stock ? "cursor-not-allowed" : ""
              } p-4 border-l rounded-r-md`}
              disabled={count === product.stock}
            >
              <MdAdd />
            </button>
          </div>
          <div className="text-xl">Stock : {product.stock}</div>
        </div>

        {/* product price in total */}
        <div className="font-medium h text-xl mb-6">
          Subtotal : ${(product.price * count).toFixed(2)}
        </div>

        {/* button */}
        <div className="flex flex-col lg:flex-row gap-2 mb-6">
          <ButtonElement
            style={"btn h-14 w-full bg-tertiary text-white"}
            action={handleCart}
            title="Add To Cart"
            loading={loading}
          />

          <button
            onClick={handleCheckout}
            className="btn w-full bg-tertiary text-white"
          >
            Checkout
          </button>
        </div>

        {/* information */}
        <InformationDetailsElement />
      </div>
    </div>
  );
};

export default ProductDescriptions;
