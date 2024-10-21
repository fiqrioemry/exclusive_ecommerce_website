import React from "react";
import { toast } from "react-toastify";
import { BsEye } from "react-icons/bs";
import ButtonElement from "./ButtonElement";
import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";
import ReviewScoreElement from "./general/ReviewScoreElement";
import { addWishlist, removeWishlist } from "../redux/actions/wishlistAction";

export const ProductsCardElement = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  const handleSee = (id) => {
    navigate(`/product/${id}`);
  };

  const handleFavorite = (id) => {
    const existId = wishlist.some((item) => item === id);

    if (existId) {
      dispatch(removeWishlist(id));
    } else {
      dispatch(addWishlist(id));
    }
  };

  const handleCart = (product, amount) => {
    const results = cart.findIndex((item) => item.id === product.id);
    if (results >= 0) {
      if (cart[results].amount + amount <= product.stock) {
        toast.info("Berhasil menambahkan ke keranjang");
        dispatch(addToCart(product.id, amount));
      } else {
        toast.error("Keranjang Melebihi Stock Product");
      }
    } else {
      toast.info("Berhasil menambahkan ke keranjang");
      dispatch(addToCart(product.id, amount));
    }
  };

  const buttonStyle =
    "flex justify-center items-center py-4 px-12 w-full h-[50px] bg-secondary text-white rounded-md absolute cursor-pointer group-hover:bottom-0 -bottom-14 transition-all ease-in-out duration-300";
  return <div>product card</div>;
};
