import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./home.css";
import mobilee from "../assets/video/mobilee.mp4";
import gp2 from "../assets/gp2.jpg";

const HomeSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });

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
  }, [controls]);

  // Variants for content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Button hover animation
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 12px 32px rgba(247, 37, 133, 0.5)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  // Image animation
  const imageVariants = {
    initial: { scale: 0.8, opacity: 0, rotateY: 10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    },
    hover: { scale: 1.05, rotateY: 5, transition: { duration: 0.4 } },
  };

  return (
    <section className="parallax-video-wrapper">
      {/* 🎥 Video Background */}
      <motion.div
        className="video-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <video
          src={mobilee}
          autoPlay
          muted
          loop
          playsInline
          className="parallax-video"
        />
      </motion.div>

      {/* ✨ Particle Effects (Canvas for dynamic particles) */}
      <canvas className="particle-canvas" />

      {/* 🔷 SVG Shapes */}
      <div className="svg-shapes">
        <motion.div
          className="circle-shape"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="triangle-shape"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -360],
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div>

      {/* 🌫️ Noise Overlay */}
      <div className="noise-overlay" />

      {/* 💬 Content Section */}
      <motion.div
        className="content-split"
        variants={contentVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="left-side glass-card">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A better way<br />
            to manage <span>money</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Monitor your spending, stay in control, and make smarter financial
            decisions — all in one place.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Explore us
          </motion.button>
        </div>

        <motion.div
          className="right-side"
          variants={imageVariants}
          initial="initial"
          animate="visible"
          whileHover="hover"
        >
          <img src={gp2} alt="App Preview" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;