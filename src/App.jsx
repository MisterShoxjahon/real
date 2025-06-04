import React, { useRef } from "react";
import Header from "./Parts/Header";
import Advertise from "./Parts/Advertise";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Location from "./Parts/Location";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import "swiper/css";
import Options from "./Parts/Options";
import Pizzas from "./Parts/Pizzas";
import Promotion from "./Parts/Promotion";
import Footer from "./Parts/Footer";
import Stock from "./Parts/Stock";
import Drinks from "./Parts/Drinks";
import Soups from "./Parts/Soups";
import Pasta from "./Parts/Pasta";
import Salad from "./Parts/Salad";

const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const Homepage = () => {
    return (
      <>
        <Advertise />
        <Options />
      </>
    );
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="дом" element={<Homepage />} />
        <Route path="пицца" element={<Pizzas />} />
        <Route path="паста" element={<Pasta />} />
        <Route path="салаты" element={<Salad />} />
        <Route path="супы" element={<Soups />}/>
        <Route path="напитки" element={<Drinks />} />
        <Route path="сток" element={<Stock />} />
        <Route path="акция" element={<Promotion />} />
        <Route path="локация" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
