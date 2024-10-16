import React from "react";
import about_image from "../assets/about_hero.png";
import { LiaStoreAltSolid } from "react-icons/lia";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";
import AboutInfoElement from "../elements/AboutInfoElement";
import profileImage1 from "../assets/about_profile1.png";
import profileImage2 from "../assets/about_profile2.png";
import profileImage3 from "../assets/about_profile3.png";
import AboutProfileElement from "../elements/AboutProfileElement";

const About = () => {
  const informationBox = [
    {
      icon: LiaStoreAltSolid,
      title: "10.5 K",
      text: "Sellers Active Our Site",
    },
    {
      icon: LuBadgeDollarSign,
      title: "33 K",
      text: "Monthly Products Sale",
    },
    {
      icon: FiShoppingBag,
      title: "45.5 K",
      text: "Customer Active In Our Site",
    },
    {
      icon: FaSackDollar,
      title: "25 K",
      text: "Annual Gross Sale In Our Site",
    },
  ];

  const aboutProfile = [
    {
      image: profileImage1,
      name: "Tom Cruise",
      position: "founder & chairman",
    },
    {
      image: profileImage2,
      name: "Emma Watson",
      position: "Managing Director",
    },
    {
      image: profileImage3,
      name: "Will Smith",
      position: "Product Designer",
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="flex flex-col">
        {/* title */}
        <div className="flex py-[30px] gap-x-2">
          <span className="text-secondary/50">Home </span>/ Contact
        </div>

        {/* our story */}
        <div className="flex flex-row mb-14">
          <div className="flex flex-col max-w-[625px] w-full h-full">
            <h1 className="h1 mb-8 tracking-[2px]">Our Story</h1>
            <div className="text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                tempore beatae, fugiat, error ullam officiis nobis odio
                doloremque et modi dolorum obcaecati soluta itaque quia impedit
                architecto eos facilis laboriosam sequi repellendus facere.
                Necessitatibus mollitia harum quibusdam facilis ad iure dolor
                beatae illum id inventore.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                explicabo sed placeat asperiores ipsum exercitationem ratione
                cumque porro. Harum error minima repellat molestiae itaque sed?
              </p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-end">
            <img src={about_image} alt="" />
          </div>
        </div>

        {/* information */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-14">
          {informationBox.map((info, index) => {
            const { icon, title, text } = info;
            return (
              <AboutInfoElement
                key={index}
                icon={icon}
                title={title}
                text={text}
              />
            );
          })}
        </div>

        {/* founder profile */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 mb-14">
          {aboutProfile.map((about, index) => {
            const { image, name, position } = about;
            return (
              <AboutProfileElement
                key={index}
                image={image}
                name={name}
                position={position}
              />
            );
          })}
        </div>

        {/* services */}
        <div></div>
      </div>
    </section>
  );
};

export default About;
