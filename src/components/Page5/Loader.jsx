import React from "react";
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader border-8 border-yellow-400 border-solid rounded-full h-20 w-20 animate-spin"></div>
      <h1 className="mt-5 text-center font-semibold text-xl">
        Finding learning path recommendations for you based on <br /> your
        responses
      </h1>
    </div>
  );
};

export default Loader;
