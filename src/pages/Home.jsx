import React from "react";
import Banner from "../components/Banner";
import BestProduct from "../components/BestProduct";
import Categories from "../components/Categories";
import GuessImageGame from "./GuessImageGame";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Banner />
      <BestProduct />
      <GuessImageGame />
    </section>
  );
};

export default Home;
