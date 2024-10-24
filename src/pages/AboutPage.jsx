import React from "react";

import AboutInfoElement from "../elements/about/AboutInfoElement";
import AboutProfileElement from "../elements/about/AboutProfileElement";
import AboutServicesElement from "../elements/about/AboutServicesElement";
import AboutStoryElement from "../elements/about/AboutStoryElement";

const AboutPage = () => {
  return (
    <section>
      <div className="container mx-auto ">
        {/* navigation info */}
        <div className="py-10 text-sm px-2">
          <div>Home / About</div>
        </div>

        {/* 1. story  */}
        <AboutStoryElement />

        {/* 2. information */}
        <AboutInfoElement />

        {/* 3. profile */}
        <AboutProfileElement />

        {/* 4. services */}
        <AboutServicesElement />
      </div>
    </section>
  );
};

export default AboutPage;
