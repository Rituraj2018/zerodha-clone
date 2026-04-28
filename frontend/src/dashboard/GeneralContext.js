import React, { createContext } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const openBuyWindow = (stock) => {
    alert("Buy " + stock);
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;