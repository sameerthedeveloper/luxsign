import React from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { fetchProducts, getProductsByCategory, categories } from "@/lib/products";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function ProductsPage({ searchParams }) {
  const { cat: activeCategory = "all" } = await searchParams;
  const supabase = await createClient();
  
  const filteredProducts = await getProductsByCategory(activeCategory, supabase);

  return (
    <div className="min-h-screen bg-background">
      {/* Category Filter Header */}
      <section className="pt-32 pb-12 border-b border-border bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-accent-yellow font-bold text-xs uppercase tracking-[.3em] block mb-4">
                Product Catalog
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
                Hardware <br />
                <span className="text-muted">Solutions</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products${cat.id === "all" ? "" : `?cat=${cat.id}`}`}
                  className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-surface text-muted border-border hover:border-accent-orange hover:text-white"
                  }`}
                >
                  {cat.name} ({cat.count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid Display */}
      <div className="relative min-h-[400px]">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="py-32 text-center">
            <p className="text-muted uppercase tracking-widest text-sm font-bold">
              No products found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Information */}
      <section className="py-24 border-t border-border bg-surface">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h3 className="text-white font-bold text-xl mb-4">Can't find what you're looking for?</h3>
          <p className="text-muted text-sm leading-relaxed mb-8">
            LuxSign provides custom-engineered solutions for unique architectural requirements. 
            Speak to our engineering team for bespoke hardware development.
          </p>
        </div>
      </section>
    </div>
  );
}
