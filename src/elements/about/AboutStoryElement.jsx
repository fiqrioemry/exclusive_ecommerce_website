import React from "react";
import AboutImage from "../../assets/about/about_hero.png";

const AboutStoryElement = () => {
  return (
    <div className="flex flex-wrap pb-12">
      {/* our story */}
      <div className="lg:w-[55%] w-full px-2">
        <h1 className="text-3xl font-semibold mb-6">Our Story</h1>
        <p className="text-justify">
          Launced in 2015, Exclusive is South Asias premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <br />
        <p className="text-justify">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      {/* images */}
      <div className="hidden lg:flex w-[45%] px-2">
        <img className="h-full" src={AboutImage} alt="" />
      </div>
    </div>
  );
};

export default AboutStoryElement;
