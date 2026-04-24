import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const supabase = await createClient();
  const product = await getProductById(id, supabase);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-white pb-24">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-surface border-b border-border overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-blue/5 blur-[100px] rounded-full translate-x-1/2" />
        
        <div className="container mx-auto px-6">
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="relative aspect-square bg-black border border-border group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent z-10" />
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
                priority
              />
            </div>

            {/* Product Info Intro */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent-blue font-bold text-xs uppercase tracking-[0.3em]">
                  {product.type}
                </span>
                {product.badge && <Badge variant="blue">{product.badge}</Badge>}
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
                {product.name}
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-8">
                {product.tagline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg">Technical Inquiry</Button>
                </Link>
                <Button variant="outline" size="lg">Download Datasheet</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white uppercase tracking-tight">Overview</h2>
                <p className="text-muted leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-8 text-white uppercase tracking-tight">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="mt-1.5 w-2 h-2 bg-accent-blue shadow-[0_0_8px_#00cfff]" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="lg:col-span-1">
              <div className="bg-surface border border-border p-8 sticky top-32">
                <h3 className="text-lg font-bold mb-8 text-white uppercase tracking-widest border-b border-border pb-4">
                  Full Specifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-sm text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Banner */}
      <section className="py-16 bg-surface/30 border-y border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tighter">Need a specialized configuration?</h4>
            <p className="text-muted text-sm italic">Our engineering team can customize I/O and processing parameters for your specific project scale.</p>
          </div>
          <Link href="/contact">
            <Button variant="outline">Consult an Engineer</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
