import React from "react";
import Page1 from "./Page1/Page1";
import ProgressBar from "./ProgressBar";
import { Route, Routes } from "react-router-dom";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import Page4 from "./Page4/Page4";
import Page5 from "./Page5/Page5";
import FinalPage from "./Page6/FinalPage";
import { usePageContext } from "./Context/ContextFunction";

const CombinedPages = () => {
  const { currentPage } = usePageContext();

  return (
    <div>
      {currentPage < 6 && <ProgressBar />}

      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </div>
  );
};

export default CombinedPages;
