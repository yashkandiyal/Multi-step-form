import React, { useEffect, useState } from "react";
import Arrow from './arrow.png'
import Earth from './earth.png'
import Eyes from './eyes.png'
import Think from './think.png'
import Graph from './graph.png'
import { useNavigate } from "react-router-dom";
import { usePageContext } from "../Context/ContextFunction";

const Page1 = () => {
  const { currentPage, setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage(2); // Update currentPage when component mounts
  }, [setCurrentPage]);
  console.log(currentPage);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Deselect the option if it's already selected
    } else {
      setSelectedOption(option); // Select the option if it's not already selected
    }
  };
  const isButtonDisabled = !selectedOption;
  const handleContinue = () => {
    if (!isButtonDisabled) {
      // Navigate to Page3 if button is not disabled
      navigate("/page3");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full md:w-[50%] mt-9 px-4">
        <h1 className="text-3xl md:text-4xl font-medium mb-6 text-center">
          Which describes you best?
        </h1>
        <h3 className="text-base md:text-lg mb-10 text-center">
          This will help us personalize your experience
        </h3>
        <div className="flex flex-col space-y-4 items-center">
          <OptionButton
            icon={Graph}
            text="Learning specific skills to advance my career"
            selected={selectedOption === "student"}
            onClick={() => handleOptionSelect("student")}
          />
          <OptionButton
            icon={Earth}
            text="Exploring new topics I'm interested in"
            selected={selectedOption === "professional"}
            onClick={() => handleOptionSelect("professional")}
          />
          <OptionButton
            icon={Think}
            text="Refreshing my math foundations"
            selected={selectedOption === "parent"}
            onClick={() => handleOptionSelect("parent")}
          />
          <OptionButton
            icon={Arrow}
            text="Exercising my brain to stay sharp"
            selected={selectedOption === "lifelongLearner"}
            onClick={() => handleOptionSelect("lifelongLearner")}
          />
          <OptionButton
            icon={Eyes}
            text="Something else"
            selected={selectedOption === "teacher"}
            onClick={() => handleOptionSelect("teacher")}
          />

          <button
            className={`${
              isButtonDisabled
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-black text-white"
            } text-md px-8 py-2 rounded-md`}
            disabled={isButtonDisabled}
            onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const OptionButton = ({ icon, text, selected, onClick }) => {
  return (
    <button
      className={`border-2 border-gray-100 w-full h-13 flex items-center gap-3 py-2 px-3 cursor-pointer ${
        selected && "bg-gray-200"
      }`}
      onClick={onClick}>
      <img src={icon} alt="" className="h-9" />
      <p>{text}</p>
    </button>
  );
};

export default Page1;
