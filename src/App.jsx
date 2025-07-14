import React from "react";
import Header from "./Components/Header";
import "./Components/style.css";
import HomeSection from "./Components/HomeSection";
import About from "./Components/About";
import Services from "./Components/Services";
import Tool from "./Components/Tool";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Header />
      <HomeSection />
      <About />
      <Services />
      <Tool />
      <Testimonial />
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
