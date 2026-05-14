"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

const ParallaxImageContent = ({ 
  src, 
  alt, 
  offset = 100, 
  className = "", 
  imageClassName = "",
  scaleEffect = false
}) => {
  const [element, setElement] = useState(null);
  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <LazyMotion features={domAnimation}>
      <div ref={setElement} className={`overflow-hidden relative ${className}`}>
        <m.div 
          style={{ 
            y,
            scale: scaleEffect ? scale : 1,
            height: `calc(100% + ${offset * 2}px)`,
            top: -offset
          }} 
          className="absolute inset-0 w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover ${imageClassName}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </m.div>
      </div>
    </LazyMotion>
  );
};

export const ParallaxImage = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className={`overflow-hidden relative ${props.className}`} />;

  return <ParallaxImageContent {...props} />;
};
