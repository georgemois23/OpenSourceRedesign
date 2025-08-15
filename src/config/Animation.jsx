import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimateOnScroll({ children, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95, x: 0 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
