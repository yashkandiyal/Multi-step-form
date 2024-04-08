import React, { useEffect, useState } from "react";
import StudentSvg from "../../assets/Student.svg";
import ProfessionalSvg from "../../assets/Proffesional.svg";
import ParentSvg from "../../assets/Parent.svg";
import LifelongLearnerSvg from "../../assets/LifelongLearner.svg";
import TeacherSvg from "../../assets/Teacher.svg";
import OtherSvg from "../../assets/other.svg";
import { useNavigate } from "react-router-dom";
import { usePageContext } from "../Context/ContextFunction";

const Page1 = () => {
  const { currentPage, setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage(1); // Update currentPage when component mounts
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
      // Navigate to Page2 if button is not disabled
      navigate("/page2");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full md:w-[50%] px-4">
        <h1 className="text-3xl md:text-4xl mt-9 font-medium mb-6 text-center">
          Which describes you best?
        </h1>
        <h3 className="text-base md:text-lg mb-10 text-center">
          This will help us personalize your experience
        </h3>
        <div className="flex flex-col space-y-4 items-center">
          <OptionButton
            icon={StudentSvg}
            text="Student or soon to be enrolled"
            selected={selectedOption === "student"}
            onClick={() => handleOptionSelect("student")}
          />
          <OptionButton
            icon={ProfessionalSvg}
            text="Professional pursuing a career"
            selected={selectedOption === "professional"}
            onClick={() => handleOptionSelect("professional")}
          />
          <OptionButton
            icon={ParentSvg}
            text="Parent of a school age child"
            selected={selectedOption === "parent"}
            onClick={() => handleOptionSelect("parent")}
          />
          <OptionButton
            icon={LifelongLearnerSvg}
            text="Lifelong learner"
            selected={selectedOption === "lifelongLearner"}
            onClick={() => handleOptionSelect("lifelongLearner")}
          />
          <OptionButton
            icon={TeacherSvg}
            text="Teacher"
            selected={selectedOption === "teacher"}
            onClick={() => handleOptionSelect("teacher")}
          />
          <OptionButton
            icon={OtherSvg}
            text="Other"
            selected={selectedOption === "other"}
            onClick={() => handleOptionSelect("other")}
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
      <img src={icon} alt="" />
      <p>{text}</p>
    </button>
  );
};

export default Page1;
