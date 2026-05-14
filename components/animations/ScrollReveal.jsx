"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { LazyMotion, domAnimation, m } from "framer-motion";

export const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  stagger = false,
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    none: { x: 0, y: 0 }
  };

  const variants = {
    hidden: { 
      opacity: 0, 
      ...directions[direction] 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: delay,
        when: stagger ? "beforeChildren" : "normal",
        staggerChildren: stagger ? 0.08 : 0
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export const RevealChild = ({ children, className = "" }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <m.div variants={variants} className={className}>
      {children}
    </m.div>
  );
};
