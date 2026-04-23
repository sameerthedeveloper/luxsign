"use client";

import React from "react";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

export const ProductGrid = ({ products, title, subtitle }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-pink/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {(title || subtitle) && (
          <div className="mb-16">
            {subtitle && (
              <span className="text-accent-blue font-bold text-xs uppercase tracking-[0.3em] block mb-4">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                {title}
              </h2>
            )}
            <div className="h-1 w-20 bg-gradient-accent mt-6" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
