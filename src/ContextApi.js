"use client";

import { createContext, useState } from "react";

export const contextApi = createContext();

export const AppProvider = ({ children }) => {
  const [IsOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = () => {
    setIsOpenSidebar(true);
  };
  const closeSidebar = () => {
    setIsOpenSidebar(false);
  };

  return (
    <contextApi.Provider
      value={{
        IsOpenSidebar,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
