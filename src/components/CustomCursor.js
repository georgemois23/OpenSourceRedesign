"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo/logo.png";

export default function CoolCustomCursor({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // example breakpoint for big screens
    };

    checkScreen(); // initial check
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isDesktop) return; // skip listeners on small screens

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("button, a, input, textarea")) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("button, a, input, textarea")) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    // Just render children without custom cursor on small screens
    return <>{children}</>;
  }
  

  return (
    <div style={{ position: "relative", cursor: "none" }}>
     <motion.div
  animate={{
    x: position.x - (hovered ? 40 : 20), // center depending on size
    y: position.y - (hovered ? 40 : 20),
    width: hovered ? 80 : 40,
    height: hovered ? 80 : 40,
    opacity: 0.9,
  }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    pointerEvents: "none",
    zIndex: 9999999,
    mixBlendMode: "difference",
  }}
/>
      {children}
    </div>
  );
}
