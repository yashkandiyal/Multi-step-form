import React, { createContext, useContext, useState } from "react";

// Created a context for managing the current page state
const PageContext = createContext();

// Custom hook to access the page context
export const usePageContext = () => useContext(PageContext);

// PageProvider component to manage the current page state
export const PageProvider = ({ children }) => {
  // State to track the current page number
  const [currentPage, setCurrentPage] = useState(1);

  // Provide the current page state and navigation functions to children components
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};
