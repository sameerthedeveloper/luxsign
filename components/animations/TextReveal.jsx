"use client";

import { useRef } from "react";
import { useInView, LazyMotion, domAnimation, m } from "framer-motion";

export const TextReveal = ({ 
  text, 
  as: Component = "h2", 
  className = "",
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const childVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      clipPath: "inset(100% 0 0 0)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  // Split by words instead of letters for better performance and readability,
  // but allow custom splitting logic if needed.
  const words = text.split(" ");

  return (
    <LazyMotion features={domAnimation}>
      <Component ref={ref} className={className}>
        <m.span
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block"
        >
          {words.map((word, i) => (
            <m.span 
              key={i} 
              variants={childVariants} 
              className="inline-block mr-[0.25em]"
            >
              {word}
            </m.span>
          ))}
        </m.span>
      </Component>
    </LazyMotion>
  );
};
