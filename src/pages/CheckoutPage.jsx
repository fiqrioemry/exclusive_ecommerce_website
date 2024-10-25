import React from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <section className="bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        {/* navigation info */}
        <div className="py-10 text-sm px-2">
          <div>
            <Link to="/">Home</Link> / cart / checkout
          </div>
        </div>
        {/* content */}
        <div>
          <h1 className="text-2xl font-medium px-2 mb-4">Purchasement</h1>
          <div className="flex flex-wrap">
            {/* product list */}
            <div className="w-full md:w-[65%] px-2 space-y-4">
              <div className="bg-white rounded-md p-4">
                <div className="uppercase text-md font-semibold text-gray-500">
                  alamat pengiriman
                </div>
              </div>
              <div className="bg-white rounded-md h-20"></div>
            </div>
            {/* detail box */}
            <div className="w-full md:w-[35%] px-2">
              <div className="bg-white rounded-md h-screen"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
