import React, { useEffect, useState } from "react";
import "./header.css";
import gp from "../assets/gp.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // 🔸 dropdown state

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close dropdown when fullscreen menu closes
  useEffect(() => {
    if (!menuOpen) setDropdownOpen(false);
  }, [menuOpen]);

  return (
    <>
      <header className={`custom-headers ${animate ? "animate-header" : ""}`}>
        <div className="logo-container">
          <img src={gp} alt="Logo" className="header-logo" />
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
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li className={`fullscreen-dropdown ${dropdownOpen ? "open" : ""}`}>
            <span onClick={() => setDropdownOpen(!dropdownOpen)}>About ▾</span>
            <ul className="fullscreen-submenu">
              <li>
                <Link to="/about" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>About</Link>
              </li>
              <li>
                <Link to="/about/overview" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Our Philosophy</Link>
              </li>
              <li>
                <Link to="/about/leadership" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Our Journey</Link>
              </li>
              <li>
                <Link to="/about/mission" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Culture</Link>
              </li>
            </ul>
          </li>

          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <li><a href="#">Contact</a></li>
          <button className="btn1">Explore us</button>
        </ul>
      </div>
    </>
  );
};

export default Header;
