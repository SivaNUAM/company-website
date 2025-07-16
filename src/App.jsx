import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Land from "./Landingpage/Land";
import Aland from "./Aland/Aland"; // The actual About page
import Services from "./Service/Services";
import Sland from "./Services/Sland";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/about" element={<Aland />} />
        <Route path='/services' element={<Sland />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
