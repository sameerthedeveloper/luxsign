"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/animations/ParallaxImage";

export const HeroSection = () => {
  const text = "PRECISION IN EVERY PIXEL";
  const letters = text.split("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-grain pt-20">
      <div className="absolute inset-0 bg-mesh opacity-60 mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col space-y-8">
          <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white overflow-hidden">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                }
              }}
              className="inline-block"
            >
              {letters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      filter: "blur(0px)",
                      transition: { type: "spring", stiffness: 100, damping: 20 }
                    }
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-xl font-light leading-relaxed"
          >
            Industrial-grade LED solutions and intelligent video processors designed for the world's most demanding environments.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" className="glow-gold font-accent text-xl tracking-wider px-10">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="font-accent text-xl tracking-wider px-10">
              Technical Specs
            </Button>
          </motion.div>
        </div>

        <div className="relative h-[50vh] lg:h-[70vh] w-full mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-bg)] via-transparent to-transparent z-10 pointer-events-none" />
          <ParallaxImage 
            src="/products/processor-1.png" 
            alt="LuxSign Video Processor" 
            className="w-full h-full rounded-2xl border border-[var(--color-border)] shadow-2xl glass-card"
            imageClassName="object-contain p-12 drop-shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            scaleEffect={true}
          />
        </div>
      </div>
    </section>
  );
};
