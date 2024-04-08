import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePageContext } from "../Context/ContextFunction";
import Alien from "../Page5/alien.svg";
import Star from "./star.png";
import Loader from "./Loader";

const Page5 = () => {
  const navigate = useNavigate();
  const { setCurrentPage } = usePageContext();
  const [showLoader, setShowLoader] = useState(false); // State to control logo visibility

  useEffect(() => {
    setCurrentPage(5); // Update currentPage when component mounts
  }, [setCurrentPage]);

  const handleContinue = () => {
    setShowLoader(true); // Show loader when button is clicked

    setTimeout(() => {
      // After 3 seconds, hide loader and navigate to the specified page
      setShowLoader(false);
      navigate("/finalpage");
    }, 1500);
  };

  return (
    <div>
      {showLoader ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full mx-5 md:mx-32">
          <div className="flex flex-col md:flex-row gap-10 md:gap-36 items-center mt-9 md:mt-20">
            <img src={Alien} alt="" className="h-80 md:mr-10" />
            <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
              <h1 className="text-3xl mb-3 font-semibold text-left">
                You're on your way!
              </h1>
              <div className=" flex items-center gap-1 my-4">
                <img src={Star} alt="" className="h-10" loading="lazy" />
                <img src={Star} alt="" className="h-10" loading="lazy" />
                <img src={Star} alt="" className="h-10" loading="lazy" />
                <img src={Star} alt="" className="h-10" loading="lazy" />
                <img src={Star} alt="" className="h-10" loading="lazy" />
              </div>
              <div className="max-w-lg flex flex-col gap-2 md:gap-6">
                <p className="text-base italic">
                  "Through its engaging and well-structured courses, Brilliant
                  has taught me mathematical concepts that I previously
                  struggled to understand. I now feel confident approaching both
                  technical job interviews and real world problem-solving
                  situations."
                </p>
                <p>-Jacob S.</p>
              </div>
            </div>
          </div>
          <button
            className="bg-black text-white text-md px-8 py-2 rounded-md mt-5 md:mt-24"
            onClick={handleContinue}>
            Continue
          </button>

          {/* Render logo if showLogo is true */}
        </div>
      )}
    </div>
  );
};

export default Page5;
