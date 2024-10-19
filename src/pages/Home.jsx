import React from "react";
import Banner from "../components/Banner";
import BestProduct from "../components/BestProduct";

const Home = () => {
  return (
    <section className="container mx-auto">
      <Banner />
      <BestProduct />
    </section>
  );
};

export default Home;
