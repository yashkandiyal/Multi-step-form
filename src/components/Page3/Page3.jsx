import React, { useEffect } from "react";
import { usePageContext } from "../Context/ContextFunction";
import Pulley from "./physics.png";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const navigate = useNavigate();
  const { setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage(3); // Update currentPage when component mounts
  }, [setCurrentPage]);
  const handleContinue = () => {
   
      // Navigate to Page 4
      navigate("/page4");
    
  };
  return (
    <div className="flex flex-col items-center justify-center h-full mx-5 md:mx-32">
      <div className="flex flex-col md:flex-row gap-10 md:gap-36 items-center mt-32">
        <img src={Pulley} alt="" className="h-80 md:mr-10" />
        <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
          <h1 className="text-3xl mb-5 font-semibold text-left">
            You're in the right place
          </h1>
          <div className="max-w-lg">
            <p className="text-base">
              Brilliant gets you hands-on to help improve your professional
              skills and knowledge. You'll interact with concepts and solve fun
              problems in math, science, and computer science.
            </p>
          </div>
        </div>
      </div>
      <button
        className="bg-black text-white text-md px-8 py-2 rounded-md mt-10 md:mt-24"
        onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Page3;
