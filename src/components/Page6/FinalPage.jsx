import React, { useEffect } from "react";
import { usePageContext } from "../Context/ContextFunction";
import AdvancedMaths from "./advancedmaths.png";
import BasicMaths from "./basicmaths.png";

const FinalPage = () => {
  const { setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage(6); // Update currentPage when component mounts
  }, [setCurrentPage]);

  return (
    <div className="flex flex-col items-center gap-8 mt-28">
      <h1 className="text-3xl font-bold text-center">
        Learning paths based on your answers
      </h1>
      <p className="text-base text-gray-400 text-center">
        Choose one to get started. You can switch anytime.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:absolute md:top-[31.5%] left-[29rem] md:transform md:-translate-x-1/2 bg-yellow-400 text-xs py-1 px-2 rounded-xl font-semibold z-10">
          MOST POPULAR
        </div>
        <div className="relative flex items-center justify-between w-[22rem] h-32 border border-gray-200 rounded-lg px-5 py-20">
          <p className="text-left">
            <span className="font-bold">Foundational Math</span> Build <br />{" "}
            your foundational skills in <br /> algebra, geometry, and <br />{" "}
            probability.
          </p>
          <img src={BasicMaths} alt="" className="h-20 mb-4" />
        </div>

        <div className="flex items-center justify-between w-[22rem] h-32 border border-gray-200 rounded-lg px-5 py-20">
          {" "}
          <p className="text-left">
            <span className="font-bold">Mathematical Thinking</span>
            <br /> Build your foundational <br /> skills in algebra, geometry,
            <br /> and probability.
          </p>
          <img src={AdvancedMaths} alt="" className="h-20 mb-4" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
