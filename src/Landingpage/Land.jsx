import React from "react";

import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Tool from "../Components/Tool";
import Testimonial from "../Components/Testimonial";
import HomeSection from "../Components/HomeSection";
const Land = () => {
  return (
    <>
      <HomeSection />
      <About />
      <Services/>
      <Tool />
      <Testimonial />
      <Contact/>
    </>
  );
};

export default Land;
