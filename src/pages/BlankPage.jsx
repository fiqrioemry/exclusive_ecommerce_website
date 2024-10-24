import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../assets/page_not_found.png";

const BlankPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* navigation info */}
        <div className="py-10 text-sm px-2">
          <div>
            <Link to="/">Home</Link> / About
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <div>
            <img className="h-[375px]" src={PageNotFound} alt="" />
          </div>
          <div>
            <button className="btn w-full bg-tertiary">
              <Link to="/">Back To Home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlankPage;
