import React from "react";
import SpinnerLoading from "./SpinnerLoading";

const PageLoading = () => {
  return (
    <section className="bg-gray-200/50 ">
      <div className="container mx-auto flex items-center justify-center h-[75vh]">
        <SpinnerLoading color={"text-tertiary"} />
      </div>
    </section>
  );
};

export default PageLoading;
