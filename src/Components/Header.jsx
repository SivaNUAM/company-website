import React, { useEffect, useState } from "react";
import "./header.css";
// import gp from "../assets/gp.png"; // ✅ Adjust to your path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className={`custom-headers ${animate ? "animate-header" : ""}`}>
        <div className="logo-container">
          <img src={''} alt="Logo" className="header-logo" />
        </div>

        <div className="header-titlee">NUAM ENTERPRISES</div>

        <div
          className={`choco-menus ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bars bar1"></div>
          <div className="bars bar2"></div>
          <div className="bars bar3"></div>
        </div>
      </header>

      <div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </button>
        <ul className="fullscreen-linkss">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sevices</a></li>
          <li><a href="#">Contact</a></li>
          <button className="btn1">Explore us</button>
        </ul>
      </div>
    </>
  );
};

export default Header;
