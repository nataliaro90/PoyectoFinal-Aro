import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  const addData = (newData) => {
    if (typeof newData === 'object' && newData !== null) {
      setData(prevData => ({
        ...prevData,
        ...newData
      }));
    } else {
      console.warn("addData: newData debe ser un objeto");
    }
  };

  return (
    <GlobalContext.Provider value={{ data, addData }}>
      {children}
    </GlobalContext.Provider>
  );
};
