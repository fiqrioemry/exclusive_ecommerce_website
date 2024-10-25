import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

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
        <div className="pb-12">
          <h1 className="text-2xl font-medium px-2 mb-4">Purchasement</h1>
          <div className="flex flex-wrap space-y-4 md:space-y-0 ">
            {/* product and shipment detail */}
            <div className="w-full md:w-[65%] px-2 space-y-4">
              {/* shipment details */}
              <div className="bg-white rounded-md p-4 space-y-4">
                <div className="uppercase text-md font-semibold text-gray-500">
                  alamat pengiriman
                </div>
                <div className="flex items-center gap-x-2 text-md font-medium">
                  <MdLocationOn className="text-tertiary" /> Home - Ahmad Fiqri
                  Oemry
                </div>
                <div className="font-light text-sm px-2">
                  jalan kelapa raya komp. rispa 4 no. 11 perumahan gedung Johor,
                  Medan Johor, Medan 20144 (rumah pagar coklat yang ada pohon
                  beringin), Medan Johor, Kota Medan, Sumatera Utara,
                  6282160945033
                </div>
                <button className="rounded-md border text-sm px-3 py-2">
                  Ganti Lokasi
                </button>
              </div>

              {/* 1. product details */}
              <div className="bg-white rounded-md p-4 space-y-4">
                <div className="uppercase text-md font-semibold text-gray-500">
                  pesanan 1
                </div>
                <div className="flex flex-row space-x-4">
                  <div>
                    <img
                      className="w-[70px] h-[70px] bg-white rounded-md"
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex flex-row justify-between items-center ">
                      <div>Nama Barang</div>
                      <div>5 x Rp. 500.000</div>
                    </div>
                    <div className="flex flex-row justify-end items-center ">
                      <div className="text-md font-bold">Rp. 2.500.000</div>
                    </div>
                    <div className="flex items-center justify-center h-12 w-full py-2 px-4 border rounded-md">
                      Pilih metode pengiriman
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. product details */}
              <div className="bg-white rounded-md p-4 space-y-4">
                <div className="uppercase text-md font-semibold text-gray-500">
                  pesanan 1
                </div>
                <div className="flex flex-row space-x-4">
                  <div>
                    <img
                      className="w-[70px] h-[70px] bg-white rounded-md"
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex flex-row justify-between items-center ">
                      <div>Nama Barang</div>
                      <div>5 x Rp. 500.000</div>
                    </div>
                    <div className="flex flex-row justify-end items-center ">
                      <div className="text-md font-bold">Rp. 2.500.000</div>
                    </div>
                    <div className="flex items-center justify-center h-12 w-full py-2 px-4 border rounded-md">
                      Pilih metode pengiriman
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* payment detail*/}
            <div className="w-full md:w-[35%] px-2">
              <div className="bg-white rounded-md p-4">
                <div>RINGKASAN BELANJA</div>
                <div className="text-sm font-light space-y-1 border-b-2 py-4">
                  {" "}
                  <div className="flex flex-row justify-between items-center">
                    <div>Price (4 Items)</div>
                    <div>Rp. 800.000</div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div>Delivery Cost</div>
                    <div>Rp. 69.500</div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div>Insurance</div>
                    <div>Rp. 57.000</div>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div>Aplication Fee</div>
                    <div>Rp. 20.000</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center py-4 border-b-2">
                  <div>Total Amount</div>
                  <div>Rp. 800.000</div>
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
