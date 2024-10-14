import React from "react";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handleCart } from "../redux/actions/activeAction";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { openCart } = useSelector((state) => state.active);

  const handleOpenCart = () => {
    dispatch(handleCart(!openCart));
  };
  return (
    <header className="fixed w-full py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-primary font-semibold tracking-[5px]">
            Exclusive
          </h1>
        </div>
        <nav>
          <button>
            <Link>Home</Link>
          </button>
          <button>
            <Link>Contact</Link>
          </button>
          <button>
            <Link>About</Link>
          </button>
          <button>
            <Link>Sign Up</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
