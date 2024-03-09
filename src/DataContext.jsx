// DataContext.js
import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [inputData, setInputData] = useState('');
  const [cartCount, setCartCount]= useState(0);
  const [selectedProducts, setSelectedProducts]= useState([]);

  const updateInputData = (newData) => {
    setInputData(newData);
  };

  const addToCart= (productDetails)=>{
    setCartCount(cartCount+1);
    setSelectedProducts([...selectedProducts, productDetails]);
  }

  return (
    <DataContext.Provider value={{ inputData, updateInputData, cartCount, addToCart, selectedProducts}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
