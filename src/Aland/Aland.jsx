// src/Aland/Aland.jsx
import React from "react";
import Abouts from "../About/Abouts";
import Philo from "../About/Philo";
import Journey from "../About/Journey";
import Culture from "../About/Culture";
import "../About/Abouts.css"; // Ensure you have this CSS file for styling
const Aland = () => {
  return (
    <>
    <Abouts />
    <Philo />
    <Journey />
    <Culture />
    </>
  );
};

export default Aland;
