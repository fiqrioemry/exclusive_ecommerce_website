import React from "react";
import Banner from "../components/homepage/Banner";
import BestProducts from "../components/homepage/BestProducts";
import Categories from "../components/homepage/Categories";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Categories />
      <BestProducts />
    </section>
  );
};

export default HomePage;
