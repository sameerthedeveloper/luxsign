"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-background">
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-accent-blue/10 blur-[120px] rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-accent-pink/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 bg-accent-orange/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 pt-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 bg-white/5 border border-white/10 rounded-full text-accent-yellow text-[10px] font-bold uppercase tracking-[0.4em] mb-8 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
            World-Class LED Engineering
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            PRECISION <br />
            <span className="text-gradient">LUMINANCE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted text-base md:text-lg mb-12 leading-relaxed">
            LuxSign defines the standard for professional LED displays and
            high-performance processing. Excellence in every pixel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/products">
              <Button variant="accent" size="lg" className="min-w-[200px]">
                Explore Solutions
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Technical Inquiry
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
