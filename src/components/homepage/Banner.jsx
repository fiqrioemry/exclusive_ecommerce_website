import React from "react";
import BannerElement from "../../elements/banner/BannerElement";

const Banner = () => {
  return (
    <section>
      <div className="py-2 w-full h-full flex justify-center items-center text-2xl font-bold  px-4">
        <BannerElement />
      </div>
    </section>
  );
};

export default Banner;
