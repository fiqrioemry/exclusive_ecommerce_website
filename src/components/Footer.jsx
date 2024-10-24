import React from "react";
import Barcode from "../assets/footer/barcode.png";
import PlayStore from "../assets/footer/play_store.png";
import GooglePlay from "../assets/footer/google_play.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const information = [
  {
    title: "Support",
    subtitle: [
      "Jalan kelapa Raya Rispa 4",
      "exclusive@gmail.com",
      "Phone : 021-8791655",
      "Fax : 021-998866",
    ],
  },
  {
    title: "Account",
    subtitle: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
  },
  {
    title: "Quick Link",
    subtitle: ["Privacy Policy", "Term of Use", "FAQ", "Contact"],
  },
];

const socialStyle = "hover:text-tertiary text-xl transition-all duration-300 ";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto py-12 ">
        <div className="flex flex-wrap">
          {information.map((info, index) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/4 mb-5  px-4" key={index}>
                <div className="text-center lg:text-start">
                  <h1 className="text-xl font-medium mb-4">{info.title}</h1>
                  <div className="text-sm font-light">
                    {info.subtitle.map((item, index) => {
                      return (
                        <div className="mb-2" key={index}>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-5 px-4 flex flex-col items-center md:items-start justify-center">
            <h1 className="text-xl font-medium mb-4">Download App</h1>
            <div className="mb-2 text-sm font-light">
              Save 3% with Apps New User Only
            </div>
            <div className="flex flex-col gap-y-3 font-light text-md mb-4 ">
              <div className="flex flex-row justify-between gap-x-2 scale-90 md:scale-100 ">
                <div className="w-[40%]">
                  <img className="w-full" src={Barcode} alt="" />
                </div>
                <div className="w-[60%]">
                  <div>
                    <img src={GooglePlay} alt="" />
                  </div>
                  <div>
                    <img src={PlayStore} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-[80%] justify-between gap-x-4 cursor-pointer transition-all ">
              <FaFacebook className={socialStyle} />
              <FaTwitter className={socialStyle} />
              <FaInstagram className={socialStyle} />
              <FaLinkedin className={socialStyle} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-6 text-md text-primary/40 text-light text-sm tracking-[0.5px] border-t border-primary/40 items-center justify-center">
        &copy; Copyright Exclusive 2024. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
