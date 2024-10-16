import React from "react";
import Spinner from "./Spinner";

const PageLoading = () => {
  return (
    <section className="bg-gray-200/50 ">
      <div className="container mx-auto flex items-center justify-center h-screen">
        <Spinner color={"text-tertiary"} />
      </div>
    </section>
  );
};

export default PageLoading;
