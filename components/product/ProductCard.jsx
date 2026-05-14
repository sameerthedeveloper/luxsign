"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] flex flex-col h-full"
    >
      <Link href={`/products/${product.slug}`} className="block relative aspect-square overflow-hidden bg-[var(--color-bg)] p-8">
        <div className="absolute inset-0 bg-mesh opacity-20 group-hover:opacity-40 transition-opacity" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-full h-full"
        >
          <Image
            src={product.image_url || "/products/display-1.png"}
            alt={product.name}
            fill
            className="object-contain drop-shadow-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--color-gold)] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Featured
            </span>
          </div>
        )}
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-2 block">
              {product.category}
            </span>
            <h3 className="font-display text-2xl text-white line-clamp-1">{product.name}</h3>
          </div>
        </div>
        
        <p className="text-[var(--color-text-muted)] text-sm line-clamp-2 mb-6 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)]">
          <span className="font-accent text-2xl tracking-wider text-white">
            ${product.price?.toLocaleString() || "TBA"}
          </span>
          <Link href={`/products/${product.slug}`}>
            <Button variant="ghost" size="sm" className="text-[var(--color-gold)] hover:text-white">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
