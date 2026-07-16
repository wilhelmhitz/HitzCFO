"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {

    const move = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move);

    const elements = document.querySelectorAll(
      "a,button,.card"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {

      window.removeEventListener("mousemove", move);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });

    };

  }, []);

  return (

    <motion.div

      animate={{
        x: position.x - (hover ? 24 : 10),
        y: position.y - (hover ? 24 : 10),

        width: hover ? 48 : 20,

        height: hover ? 48 : 20,

        opacity: 1
      }}

      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}

      className="
      fixed
      top-0
      left-0
      rounded-full
      pointer-events-none
      z-[9999]
      border
      border-[#C8A96A]
      bg-[#C8A96A]/10
      backdrop-blur-sm
      hidden
      lg:block
      "

    />

  );

}