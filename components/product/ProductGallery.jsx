"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const ProductGallery = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no images array provided, just show a placeholder based on the product
  const galleryImages = images && images.length > 0 ? images : [
    `/products/display-1.png`,
    `/products/processor-1.png`,
    `/products/controller-1.png`
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden glass-card p-12 border border-[var(--color-border)] group">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={galleryImages[currentIndex]}
              alt={`${productName} gallery image ${currentIndex + 1}`}
              fill
              className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 cursor-zoom-in"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              currentIndex === idx 
                ? "border-[var(--color-gold)] shadow-[0_0_15px_rgba(201,168,76,0.3)]" 
                : "border-[var(--color-border)] hover:border-white/30 opacity-60 hover:opacity-100"
            }`}
          >
            <div className="absolute inset-0 bg-[var(--color-bg)]" />
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
