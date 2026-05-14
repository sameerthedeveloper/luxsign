import { fetchProducts } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { TextReveal } from "@/components/animations/TextReveal";

export const metadata = {
  title: "Products | LuxSign Neuglass",
  description: "Browse our premium LED displays and video processors.",
};

export default async function ProductsPage({ searchParams }) {
  // Await searchParams in Next.js 15+ if needed, but here we can just use it directly
  // Actually, since Next 15, searchParams is a Promise. We should await it.
  const resolvedParams = await searchParams;
  const categoryFilter = resolvedParams?.cat || null;
  
  const products = await fetchProducts(categoryFilter);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] pt-12 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-16">
          <TextReveal 
            text="ENGINEERED FOR EXCELLENCE" 
            as="h1" 
            className="font-display text-5xl md:text-7xl text-white mb-6"
          />
          <p className="text-[var(--color-text-muted)] text-lg max-w-2xl">
            Explore our industrial-grade visual solutions. From transparent architectural 
            LEDs to zero-latency broadcast processors.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-[var(--color-border)] pb-8">
          <a href="/products" className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all ${!categoryFilter ? 'bg-[var(--color-gold)] text-black font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'}`}>
            All
          </a>
          <a href="/products?cat=processor" className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all ${categoryFilter === 'processor' ? 'bg-[var(--color-gold)] text-black font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'}`}>
            Processors
          </a>
          <a href="/products?cat=display" className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all ${categoryFilter === 'display' ? 'bg-[var(--color-gold)] text-black font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'}`}>
            Displays
          </a>
          <a href="/products?cat=controller" className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all ${categoryFilter === 'controller' ? 'bg-[var(--color-gold)] text-black font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]' : 'border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white'}`}>
            Controllers
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.length === 0 && (
            <div className="col-span-full py-24 text-center">
              <p className="text-[var(--color-text-muted)] text-xl">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
