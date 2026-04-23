"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-[#050505] border border-border hover:border-accent-blue/50 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-accent-orange/20 via-accent-pink/10 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl z-0" />

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black z-10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        {product.badge && (
          <div className="absolute top-4 left-4 z-20">
            <Badge variant="blue">{product.badge}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative z-10 bg-surface">
        <div className="mb-2">
          <span className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.2em]">
            {product.type}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
          {product.name}
        </h3>
        <p className="text-muted text-xs leading-relaxed mb-6 flex-grow">
          {product.tagline}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            {product.price}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="text-[10px] font-bold text-accent-blue uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group/link"
          >
            Details
            <svg
              className="w-3 h-3 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
