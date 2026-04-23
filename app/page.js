import { HeroSection } from "@/components/layout/HeroSection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products, fetchProducts } from "@/lib/products";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const features = [
  {
    title: "8K HDR Ready",
    description: "Industry-leading processing with support for full 8K resolutions and high dynamic range color.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Zero Latency",
    description: "Sub-frame latency ensures your content stays perfectly synchronized in real-time environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Industrial Build",
    description: "Rugged die-cast aluminum chassis designed for 24/7 operation in the most demanding settings.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default async function Home() {
  const supabase = await createClient();
  const allProducts = await fetchProducts(supabase);
  const featuredProducts = allProducts.slice(0, 3);

  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* Features Section */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="group">
                <div className={`w-12 h-12 ${idx === 0 ? 'bg-accent-blue/10 text-accent-blue border-accent-blue/20' : idx === 1 ? 'bg-accent-pink/10 text-accent-pink border-accent-pink/20' : 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20'} rounded-sm flex items-center justify-center mb-6 border group-hover:shadow-[0_0_15px_currentColor] transition-all`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid 
        products={featuredProducts} 
        title="Featured Solutions" 
        subtitle="Innovation Highlights" 
      />

      {/* Mid-Page Banner / Stats */}
      <section className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 grid-background opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "150+", label: "Global Projects" },
              { val: "100%", label: "Uptime Hardware" },
              { val: "24/7", label: "Global Support" },
              { val: "12yr", label: "Industry Legacy" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                  {stat.val}
                </div>
                <div className="text-[10px] font-bold text-accent-yellow uppercase tracking-[.3em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-pink/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8">
            READY TO POWER YOUR <br />
            <span className="text-gradient">NEXT DISPLAY?</span>
          </h2>
          <p className="text-muted mb-12 max-w-xl mx-auto">
            Contact our technical sales team for a custom solution tailored to your architectural or event requirements.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="pink" size="lg">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
