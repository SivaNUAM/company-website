import React from "react";
import { motion } from "framer-motion";
import "./abouts.css"; // Create this CSS file or add styles globally

const Journey = () => {
  const journeyData = [
    {
      year: "2020",
      title: "Founded NUAM",
      description:
        "Launched with a vision to blend technology and creativity, delivering 10+ projects in the first year.",
    },
    {
      year: "2022",
      title: "Global Reach",
      description:
        "Expanded to serve 30+ clients across 5 countries, achieving 5X growth.",
    },
    {
      year: "2024",
      title: "Awarded Excellence",
      description:
        "Earned 5+ awards for innovation and creativity in digital solutions.",
    },
    {
      year: "2025",
      title: "10X Growth",
      description:
        "Delivered 120+ projects globally, becoming a leader in transformative solutions.",
    },
  ];

  return (
    <section id="journey" className="about-section journey">
      <div className="parallax-bg"></div>
      <h2 className="section-title neon">Our Journey</h2>
      <div className="journey-carousel">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            className="carousel-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <div className="carousel-year">{item.year}</div>
            <div className="carousel-content">
              <h3 className="gradient-text">{item.title}</h3>
              <div className="gradient-underline"></div>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
