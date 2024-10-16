import React from "react";
import Banner from "../components/Banner";
import BestProduct from "../components/BestProduct";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <section>
      <Banner />
      <BestProduct />
      <Categories />
    </section>
  );
};

export default Home;
