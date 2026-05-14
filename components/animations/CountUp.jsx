"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useTransform, LazyMotion, domAnimation, m } from "framer-motion";

export const CountUp = ({ 
  to, 
  duration = 2, 
  delay = 0,
  prefix = "",
  suffix = "",
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(to);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, motionValue, to, delay]);

  // Use useTransform to create a rounded version of the spring value
  // This avoids manual state updates and "unmounted component" errors
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <LazyMotion features={domAnimation}>
      <m.span ref={ref} className={className}>
        {prefix}<m.span>{rounded}</m.span>{suffix}
      </m.span>
    </LazyMotion>
  );
};
