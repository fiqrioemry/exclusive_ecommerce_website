/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const { checkout } = useSelector((state) => state.checkout);
  const [state, setState] = useState({
    productQty: 0,
    productPrice: 0,
    productPayment: [],
  });

  const shipmentMethods = [
    {
      method: "nextday",
      time: "Estimated Time Today or Tomorrow",
      price: 5.99,
    },
    {
      method: "regular",
      time: "Estimated Time 4 - 7 Days",
      price: 3.99,
    },
    {
      method: "cargo",
      time: "Estimated Time 1 - 2 Weeks",
      price: 1.99,
    },
  ];

  const totalPayment = () => {
    const selectedItem = cart.filter((item) => checkout.includes(item.id));
    const totalPriceProduct = selectedItem.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
    const totalQtyProduct = selectedItem.reduce(
      (total, item) => total + item.amount,
      0
    );

    const productPayment = selectedItem.map((item) => ({
      ...item,
      shipmentMethod: null,
    }));

    setState((prevState) => ({
      ...prevState,
      productQty: totalQtyProduct,
      productPrice: totalPriceProduct,
      productPayment,
    }));
  };

  useEffect(() => {
    totalPayment();
  }, [cart, checkout]);

  const handleShipmentChange = (event, index) => {
    const selectedMethod = shipmentMethods.find(
      (method) => method.method === event.target.value
    );

    setState((prevState) => {
      const updatedProductPayment = [...prevState.productPayment];
      updatedProductPayment[index] = {
        ...updatedProductPayment[index],
        shipmentMethod: selectedMethod,
      };

      return {
        ...prevState,
        productPayment: updatedProductPayment,
      };
    });
  };

  const totalShipmentCost = state.productPayment.reduce((total, item) => {
    return total + (item.shipmentMethod?.price || 0);
  }, 0);

  return (
    <section className="bg-gray-200 min-h-screen">
      <header className="bg-white fixed top-0 w-full ">
        <div className="container mx-auto flex items-center py-6 px-2">
          <Link to="/" className="text-xl font-semibold tracking-[2px]">
            Exclusive
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-1">
        {/* navigation info */}
        <div className="py-10 text-sm px-2">
          <div>
            <Link to="/">Home</Link> / cart / checkout
          </div>
        </div>
        {/* content */}
        <div className="pb-12">
          <h1 className="text-2xl font-medium px-2 mb-4">Purchasement</h1>
          <div className="flex flex-wrap space-y-4 md:space-y-0 ">
            {/* product and shipment detail */}
            <div className="w-full md:w-[65%] px-2 space-y-4">
              {/* 1. shipment details */}
              <div className="bg-white rounded-md p-4 space-y-4">
                <div className="uppercase text-md font-semibold text-gray-500">
                  Shipment Address
                </div>
                <div className="flex items-center gap-x-2 text-md font-medium">
                  <MdLocationOn className="text-tertiary" /> Home -{" "}
                  {user.firstName} {user.lastName}
                </div>
                <div className="font-light text-sm px-2">
                  {user.address.address}, {user.address.city},{" "}
                  {user.address.state}
                </div>
                <button className="rounded-md border text-sm px-3 py-2">
                  Change Location
                </button>
              </div>

              {/* product details */}
              {state.productPayment.map((item, index) => (
                <div className="bg-white rounded-md p-4 space-y-4" key={index}>
                  <div className="uppercase text-md font-semibold text-gray-500">
                    Order {index + 1}
                  </div>
                  <div className="flex flex-row space-x-4">
                    {/* product images */}
                    <div className="w-[25%]">
                      <img
                        className="w-[70px] h-[70px] bg-white rounded-md"
                        src={item.thumbnail}
                        alt=""
                      />
                    </div>
                    {/* product price description */}
                    <div className="w-[75%] space-y-2 ">
                      <div className="flex flex-row justify-between items-center ">
                        <div>{item.title}</div>
                        <div>
                          {item.amount} x $ {item.price}
                        </div>
                      </div>
                      <div className="flex flex-row justify-end items-center ">
                        <div className="text-md font-bold">
                          $ {(item.amount * item.price).toFixed(2)}
                        </div>
                      </div>
                      {/* shipment method */}
                      <div className="flex flex-col mt-4">
                        <label className="text-sm font-medium">
                          Shipment Method
                        </label>
                        <select
                          className="border rounded-md p-2 mt-2"
                          value={item.shipmentMethod?.method || ""}
                          onChange={(e) => handleShipmentChange(e, index)}
                        >
                          <option value="">Select Shipment Method</option>
                          {shipmentMethods.map((method) => (
                            <option
                              className="w-[200px]"
                              key={method.method}
                              value={method.method}
                            >
                              {method.method} - ${method.price} ({method.time})
                            </option>
                          ))}
                        </select>
                        {item.shipmentMethod && (
                          <div className="mt-2 text-sm text-gray-600">
                            Cost: ${item.shipmentMethod.price}, Delivery:{" "}
                            {item.shipmentMethod.time}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* payment detail*/}
            <div className="w-full md:w-[35%] px-2">
              <div className="bg-white rounded-md p-4">
                <div>Shopping Details</div>
                <div className="text-sm font-light space-y-1 border-b-2 py-4">
                  <div className="flex flex-row justify-between items-center">
                    <div>Price ({state.productQty} Items)</div>
                    <div>$. {state.productPrice}</div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div>Delivery Cost</div>
                    <div>${totalShipmentCost}</div>
                  </div>
                  {/* other costs */}
                </div>
                <div className="flex flex-row justify-between items-center py-4 border-b-2">
                  <div>Total Amount</div>
                  <div>
                    $ {(state.productPrice + totalShipmentCost).toFixed(2)}
                  </div>
                </div>
                <div>
                  <button className="btn w-full bg-tertiary text-white tracking-[2px] font-bold uppercase text-lg">
                    Make Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
