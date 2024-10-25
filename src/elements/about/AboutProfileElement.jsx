import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutProfile1 from "../../assets/about/about_profile1.png";
import AboutProfile2 from "../../assets/about/about_profile2.png";
import AboutProfile3 from "../../assets/about/about_profile3.png";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const AboutProfileElement = () => {
  const aboutProfile = [
    {
      image: AboutProfile1,
      name: "Tom Cruise",
      position: "founder & chairman",
    },
    {
      image: AboutProfile2,
      name: "Emma Watson",
      position: "Managing Director",
    },
    {
      image: AboutProfile3,
      name: "Will Smith",
      position: "Product Designer",
    },
    {
      image: AboutProfile3,
      name: "John Doe",
      position: "Brand Manager",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mx-auto  max-w-[800px] mb-12">
      <div className="slider-container space-x-4">
        <Slider {...settings}>
          {aboutProfile.map((about, index) => {
            const { image, name, position } = about;
            return (
              <div className="rounded-lg overflow-hidden mb-8 px-2" key={index}>
                <img className="h-[250px]" src={image} alt="" />
                <div>
                  <h2 className="text-xl font-medium mt-4">{name}</h2>
                  <div className="mt-4">{position}</div>
                  <div className="flex flex-row items-center mt-4 gap-x-4 text-2xl">
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AboutProfileElement;
