"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, LazyMotion, domAnimation, m } from "framer-motion";

const testimonials = [
  {
    quote: "The visual clarity and reliability of LuxSign processors have completely transformed our live broadcast capabilities. Zero dropped frames, perfect synchronization.",
    author: "Elena Rodriguez",
    role: "Technical Director, Global Events",
    company: "Broadcast Elite"
  },
  {
    quote: "We deployed the Aero Series across our flagship retail stores. The transparency and brightness are unmatched. It feels like magic.",
    author: "James Chen",
    role: "Head of Architecture",
    company: "Lumière Retail Group"
  },
  {
    quote: "Managing 500+ displays globally used to be a nightmare. The Nexus Smart Controller gives us granular control and predictive maintenance.",
    author: "Sarah Jenkins",
    role: "VP of Operations",
    company: "ClearVision Media"
  },
  {
    quote: "Their engineering team understands the rigorous demands of stadium installations. Built like a tank, performs like a supercar.",
    author: "Marcus Thorne",
    role: "AV Consultant",
    company: "Stadium Tech Partners"
  }
];

const TestimonialsContent = () => {
  const [element, setElement] = useState(null);
  const { scrollYProgress } = useScroll({
    target: element ? { current: element } : undefined,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <LazyMotion features={domAnimation}>
      <section ref={setElement} className="h-[200vh] bg-[var(--color-bg)] relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-24">
          
          <div className="container mx-auto px-6 mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-white">
              TRUSTED BY <span className="text-[var(--color-gold)] italic">INDUSTRY LEADERS</span>
            </h2>
          </div>

          <div className="w-[200vw] sm:w-[150vw] relative">
            <m.div style={{ x }} className="flex gap-8 px-6">
              {testimonials.map((test, idx) => (
                <div 
                  key={idx} 
                  className="w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0 neumorph p-10 rounded-2xl border border-[var(--color-border)] relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 text-[var(--color-gold)] opacity-20 font-display text-8xl leading-none group-hover:opacity-40 transition-opacity">
                    "
                  </div>
                  <p className="text-lg md:text-xl text-[var(--color-text-primary)] leading-relaxed mb-10 relative z-10 font-light">
                    "{test.quote}"
                  </p>
                  <div className="flex flex-col relative z-10">
                    <span className="text-white font-bold tracking-wide">{test.author}</span>
                    <span className="text-[var(--color-gold)] text-sm mb-1">{test.role}</span>
                    <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">{test.company}</span>
                  </div>
                </div>
              ))}
            </m.div>
          </div>
          
        </div>
      </section>
    </LazyMotion>
  );
};

export const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <section className="h-[200vh] bg-[var(--color-bg)]" />;

  return <TestimonialsContent />;
};
