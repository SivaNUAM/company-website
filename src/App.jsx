import React from "react";
import Header from "./Components/Header";
import "./Components/style.css";
import HomeSection from "./Components/HomeSection";
import About from "./Components/About";

function App() {
  return (
    <>
    <Header />
      <HomeSection />
      <About />
      <div style={{ height: "200vh", padding: "100px", background: "#111" }}>
        <h2>Scroll Down</h2>
        <p>This section is for scroll testing</p>
      </div>

    </>
  );
}

export default App;
