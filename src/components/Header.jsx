import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdFavorite, MdOutlineMenu } from "react-icons/md";
import SearchInput from "../elements/SearchInput";

const Header = () => {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 36) {
        setStick(true);
      } else {
        setStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="z-10">
      <div className="flex justify-center items-center h-[40px] bg-tertiary/90 text-white">
        <div className="text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          Shop Now
        </div>
      </div>

      <div
        className={`${
          stick ? "fixed top-0 bg-white" : "bg-transparent"
        } w-full transition-all py-4  z-50 border-b border-gray-200`}
        style={{ transitionProperty: "transform, padding, background" }} // smooth transitions
      >
        <div className="container mx-auto flex justify-between items-center mb-3 lg:mb-0">
          {/* website logo */}
          <div className="logo">
            <h1 className="text-xl lg:text-2xl font-primary font-semibold tracking-[5px]">
              Exclusive
            </h1>
          </div>

          {/* menu list */}
          <nav className="hidden lg:flex items-center justify-between md:gap-x-3 lg:gap-x-6 max-w-[400px] text-md">
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
            <button>
              <Link to="/about">About</Link>
            </button>
            <button>
              <Link to="/signup">Sign Up</Link>
            </button>
          </nav>

          {/* search input and cart */}
          <div className="flex justify-around items-center max-w-[600px] gap-x-4 lg:gap-x-6">
            {/* search input */}
            <div className="hidden md:flex">
              <SearchInput />
            </div>

            {/* favorite & cart */}
            <div className="flex items-center justify-between gap-x-4">
              <button>
                <MdFavorite className="text-lg lg:text-xl" />
              </button>
              <button>
                <BsCart3 className="text-lg lg:text-xl" />
              </button>
              <button>
                <MdOutlineMenu className="block md:hidden text-lg lg:text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-center w-full md:hidden">
          <SearchInput />
        </div>
      </div>
    </header>
  );
};

export default Header;
