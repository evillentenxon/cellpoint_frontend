import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./Home";
import Services from "./services";
import Contact from './Contact';
import Products from './Products';
import About from './About';
import Error from "./error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from './DataContext';
import ScrollToTop from './components/ScrollToTop';
import ProductViewPage from './ProductViewPage';
import Cart from './components/Cart';
import Success from './components/Success'

function App() {
  const theme = {
    colors: {
      white: "#ddd",
      footer: "#222",
      button: "rgb(43, 139, 213)"
    },
    fontFamily: { all: "Ubuntu,Kanit,sans-serif;" },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />            
            <Route path="/ProductViewPage/:itemId" element={<ProductViewPage />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/success" element={<Success/>} />
          </Routes>

        </BrowserRouter>
      </DataProvider>

    </ThemeProvider >
  );
}

export default App;
