"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const showcaseProducts = [
  {
    id: 1,
    title: "Quantum Processor X",
    desc: "Next-generation 8K video processing with AI-driven upscaling and zero-latency transmission.",
    img: "/products/processor-2.png"
  },
  {
    id: 2,
    title: "Aero Series Display",
    desc: "Ultra-lightweight transparent LED display for architectural and retail environments.",
    img: "/products/display-2.png"
  },
  {
    id: 3,
    title: "Nexus Smart Controller",
    desc: "Cloud-native fleet management and diagnostics for global LED networks.",
    img: "/products/controller-1.png"
  }
];

const ProductItem = ({ prod, index, opacity, y, rotateY, scale }) => {
  return (
    <>
      {/* Text Content */}
      <motion.div 
        style={{ opacity, y, pointerEvents: opacity.get() > 0.1 ? "auto" : "none" }}
        className="absolute inset-0 flex flex-col justify-center"
      >
        <h4 className="text-[var(--color-gold)] font-accent tracking-[0.2em] mb-4">SHOWCASE {index + 1}</h4>
        <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
          {prod.title}
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-8 max-w-md">
          {prod.desc}
        </p>
        <div className="w-fit">
          <Button variant="outline" className="border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black">
            Discover {prod.title.split(" ")[0]}
          </Button>
        </div>
      </motion.div>

      {/* Image Content (rendered separately in the grid layout, but logic is shared) */}
    </>
  );
};

const ProductImage = ({ prod, opacity, rotateY, scale }) => (
  <motion.div
    style={{ opacity, rotateY, scale }}
    className="absolute inset-0 flex items-center justify-center transform-gpu"
  >
    <div className="relative w-full h-full p-12 glass-card rounded-3xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-[var(--color-gold-glow)] before:to-transparent before:opacity-50">
      <Image
        src={prod.img}
        alt={prod.title}
        fill
        className="object-contain p-12 drop-shadow-2xl"
      />
    </div>
  </motion.div>
);

const ProductShowcaseContent = () => {
  const [element, setElement] = useState(null);
  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
    offset: ["start start", "end end"]
  });

  // Top-level transforms for each of the 3 products
  // Product 1 (0% - 33.3%)
  const op0 = useTransform(scrollYProgress, [0, 0.05, 0.28, 0.33], [0, 1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.05, 0.28, 0.33], [40, 0, 0, -40]);
  const r0 = useTransform(scrollYProgress, [0, 0.33], [20, -20]);
  const s0 = useTransform(scrollYProgress, [0, 0.16, 0.33], [0.8, 1, 0.8]);

  // Product 2 (33.3% - 66.6%)
  const op1 = useTransform(scrollYProgress, [0.28, 0.33, 0.61, 0.66], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.28, 0.33, 0.61, 0.66], [40, 0, 0, -40]);
  const r1 = useTransform(scrollYProgress, [0.33, 0.66], [20, -20]);
  const s1 = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0.8, 1, 0.8]);

  // Product 3 (66.6% - 100%)
  const op2 = useTransform(scrollYProgress, [0.61, 0.66, 0.95, 1.0], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.61, 0.66, 0.95, 1.0], [40, 0, 0, -40]);
  const r2 = useTransform(scrollYProgress, [0.66, 1.0], [20, -20]);
  const s2 = useTransform(scrollYProgress, [0.66, 0.83, 1.0], [0.8, 1, 0.8]);

  return (
    <section ref={setElement} className="h-[300vh] relative bg-[#050508]">
      {element && (
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="container mx-auto px-6 w-full z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Text Side */}
              <div className="relative h-[400px] w-full">
                <ProductItem index={0} prod={showcaseProducts[0]} opacity={op0} y={y0} />
                <ProductItem index={1} prod={showcaseProducts[1]} opacity={op1} y={y1} />
                <ProductItem index={2} prod={showcaseProducts[2]} opacity={op2} y={y2} />
              </div>

              {/* Image Side */}
              <div className="relative h-[60vh] w-full hidden lg:block perspective-1000">
                <ProductImage prod={showcaseProducts[0]} opacity={op0} rotateY={r0} scale={s0} />
                <ProductImage prod={showcaseProducts[1]} opacity={op1} rotateY={r1} scale={s1} />
                <ProductImage prod={showcaseProducts[2]} opacity={op2} rotateY={r2} scale={s2} />
              </div>

            </div>
          </div>

          {/* Background Indicator */}
          <div className="absolute left-0 bottom-0 w-full h-1 bg-[var(--color-border)]">
            <motion.div 
              className="h-full bg-[var(--color-gold)]"
              style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export const ProductShowcase = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return <section className="h-[300vh] bg-[#050508]" />;
  return <ProductShowcaseContent />;
};
