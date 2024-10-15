import React from "react";
import { BiMailSend } from "react-icons/bi";
import Barcode from "../assets/barcode.png";
import GooglePlay from "../assets/google_play.png";
import PlayStore from "../assets/play_store.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-secondary">
      <div className="flex flex-wrap justify-none md:justify-between md:gap-x-8 py-10  text-white container mx-auto">
        {/* 1. exclusive */}
        <div className="flex flex-col w-1/2 md:w-auto  gap-y-4 lg:mb-0 mb-8">
          <h1 className="text-lg font-semibold">Exclusive</h1>
          <div className="flex flex-col gap-y-3 font-light text-md">
            <p>Subscribe.</p>
            <p>Get 10% off your first order</p>
            <div className="relative flex items-center">
              <form action="">
                <input
                  type="search "
                  className="border-none p-2 outline-none rounded-md"
                  placeholder="Your email here "
                />
              </form>
              <BiMailSend className="cursor-pointer absolute md:right-4 right-8 text-black" />
            </div>
          </div>
        </div>

        {/* 2.support */}
        <div className="flex flex-col w-1/2 md:w-auto  gap-y-4 lg:mb-0 mb-8">
          <h1 className="text-lg font-semibold">Support</h1>
          <div className="flex flex-col gap-y-3 font-light text-md ">
            <p>Jalan Kelapa Raya Rispa 4</p>
            <p>exclusive@gmail.com</p>
            <p>0821-6094-5033.</p>
          </div>
        </div>

        {/* 3.account */}
        <div className="flex flex-col w-1/2 md:w-auto gap-y-4 lg:mb-0 mb-8">
          <h1 className="text-lg font-semibold">Account</h1>
          <div className="flex flex-col gap-y-3 font-light text-md ">
            <p>My account</p>
            <p>Login /Register</p>
            <p>Cart</p>
            <p>Whistlist</p>
            <p>Shop</p>
          </div>
        </div>

        {/* 4. Quick Link */}
        <div className="flex flex-col  w-1/2 md:w-auto gap-y-4 lg:mb-0 mb-8">
          <h1 className="text-lg font-semibold">Quick Link</h1>
          <div className="flex flex-col gap-y-3 font-light text-md ">
            <p>Privacy Policy</p>
            <p>Term of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        {/* 5.Download app */}
        <div className="flex flex-col  md:w-auto w-full md:text-start text-center  gap-y-4 md:max-w-[275px] lg:mb-0 mb-8">
          <h1 className="text-lg font-semibold">Download App</h1>
          <div className="flex flex-col gap-y-3 font-light text-md md:mb-0 mb-4 ">
            <p>Save 3% with Apps New User Only</p>
            <div className="flex flex-row justify-between w-full">
              <div className="md:w-auto w-[40%]">
                <img className="w-full" src={Barcode} alt="" />
              </div>
              <div className="flex flex-col gap-y-2 w-1/2">
                <div>
                  <img src={GooglePlay} alt="" />
                </div>
                <div>
                  <img src={PlayStore} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:w-auto w-full justify-between flex-row gap-x-4 text-2xl cursor-pointer transition-all ">
            <FaFacebook className="hover:text-tertiary transition-all duration-300 " />
            <FaTwitter className="hover:text-tertiary transition-all duration-300 " />
            <FaInstagram className="hover:text-tertiary transition-all duration-300 " />
            <FaLinkedin className="hover:text-tertiary transition-all duration-300 " />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-6 text-primary/40 text-light text-sm tracking-[0.5px] border-t border-primary/40 ">
        &copy; Copyright Exclusive 2024. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
