import React, { useEffect, useState } from "react";
import "./home.css";
import m from "../assets/video/m.mp4";
import gp2 from "../assets/gp2.jpg";

const HomeSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    let animationFrame;
    const handleScroll = () => {
      animationFrame = requestAnimationFrame(() => {
        setOffsetY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="parallax-video-wrapper">
      {/* 🎥 Video Background */}
      <div
        className="video-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <video src={m} autoPlay muted loop playsInline className="parallax-video" />
      </div>

      {/* 🔷 SVG Shapes */}
      <div className="svg-shapes">
        <div className="circle-shape"></div>
        <div className="triangle-shape"></div>
      </div>

      {/* 🌫️ Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* 💬 Content Section */}
      <div className={`content-split ${visible ? "show" : ""}`}>
        <div className="left-side glass-card">
          <h1>
            A better way<br />
            to manage <span>money</span>
          </h1>
          <p>
            Monitor your spending, stay in control, and make smarter financial decisions — all in one place.
          </p>
          <button>Explore us</button>
        </div>

        <div className="right-side">
          <img src={gp2} alt="App Preview" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
