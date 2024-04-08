// PageContext.js
import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    };
    
  return (
    <PageContext.Provider
      value={{ currentPage, goToPreviousPage,setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
