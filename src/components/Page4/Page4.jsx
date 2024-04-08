import React, { useEffect, useState } from "react";
import { usePageContext } from "../Context/ContextFunction";
import { useNavigate } from "react-router-dom";
import Introductory from './basicmaths.png'
import Basic from './normalmaths.png'
import Intermediate from './uppermaths.png'
import Advanced from './highestmaths.png'
const Page4 = () => {
  const { setCurrentPage } = usePageContext();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(4); // Update currentPage when component mounts
  }, [setCurrentPage]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption) {
      // Navigate to Page5 only if an option is selected
      navigate("/page5");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-4 mt-9">
        <h1 className="text-3xl font-semibold">
          What is your math comfort level?
        </h1>
        <h2 className="text-base mb-10">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </h2>
        <div className="flex items-center flex-wrap justify-center gap-3">
          <OptionButton
            text="Arithmetic"
            icon={Introductory}
            description="Introductory"
            onClick={() => handleOptionSelect("arithmetic")}
            selected={selectedOption === "arithmetic"}
          />
          <OptionButton
            text="Basic Algebra"
            icon={Basic}
            description="Foundational"
            onClick={() => handleOptionSelect("basicAlgebra")}
            selected={selectedOption === "basicAlgebra"}
          />
          <OptionButton
            text="Intermediate Algebra"
            icon={Intermediate}
            description="Intermediate"
            onClick={() => handleOptionSelect("intermediateAlgebra")}
            selected={selectedOption === "intermediateAlgebra"}
          />
          <OptionButton
            text="Calculus"
            icon={Advanced}
            description="Advanced"
            onClick={() => handleOptionSelect("calculus")}
            selected={selectedOption === "calculus"}
          />
        </div>
        <button
          className={`bg-black text-white text-md px-8 py-2 rounded-md mt-10 md:mt-24 ${
            selectedOption ? "" : "bg-gray-300 cursor-not-allowed"
          }`}
          onClick={handleContinue}
          disabled={!selectedOption}>
          Continue
        </button>
      </div>
    </div>
  );
};

const OptionButton = ({ text, description, onClick, selected,icon }) => {
  return (
    <div
      className={`border-2 border-gray-100 rounded-md h-56 w-56 flex flex-col justify-between px-4 py-6 items-center ${
        selected ? "border-yellow-400" : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}>
      <img src={icon} alt="" className="h-24" loading="lazy"/>
      <div>
        <h1 className="font-medium">{text}</h1>
      <p className="text-gray-400">{description}</p>
      </div>
      
    </div>
  );
};

export default Page4;
