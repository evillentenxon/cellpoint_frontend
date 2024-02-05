// DataContext.js
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [inputData, setInputData] = useState('');

  const updateInputData = (newData) => {
    setInputData(newData);
  };

  return (
    <DataContext.Provider value={{ inputData, updateInputData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
