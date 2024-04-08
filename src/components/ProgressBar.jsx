import React, { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { usePageContext } from "./Context/ContextFunction";
import { useNavigate } from "react-router-dom";

const ProgressBar = () => {
  const navigate = useNavigate();
  const { currentPage } = usePageContext();
  const [showIcon, setShowIcon] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Hide the back button on the first page
    setShowIcon(currentPage !== 1);
  }, [currentPage]);

  const goBack = () => {
    // Navigate back to the previous page
    if (currentPage === 2) {
      navigate("/");
    } else {
      navigate(`/page${currentPage - 1}`);
    }
  };
  const updateProgress = (currentStep, totalSteps) => {
    const newProgress = (currentStep / totalSteps) * 100;
    setProgress(newProgress);
  };
  useEffect(() => {
    updateProgress(currentPage, 5);
  }, [currentPage]);

  return (
    <div className="w-full flex items-center justify-center mt-8">
      {showIcon && (
        <ChevronLeftIcon
          fontSize="large"
          onClick={goBack}
          className="cursor-pointer"
        />
      )}
      <div className="w-[80%] h-1 bg-gray-200 rounded-full">
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
