import { getProductBySlug } from "@/lib/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | LuxSign`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = await getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Use the single image as an array for the gallery
  const images = product.image_url ? [product.image_url] : [];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] pt-12 pb-24 relative">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Link href="/products" className="inline-flex items-center text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors mb-12">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Gallery */}
          <div>
            <ProductGallery images={images} productName={product.name} />
          </div>

          {/* Right: Details (Sticky) */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="mb-8">
              <span className="text-[var(--color-gold)] text-sm font-bold uppercase tracking-widest block mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-[var(--color-text-muted)] text-xl leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            <div className="py-8 border-y border-[var(--color-border)] mb-8">
              <div className="flex items-end gap-4 mb-6">
                <span className="font-accent text-5xl text-white tracking-wider">
                  ${product.price?.toLocaleString() || "TBA"}
                </span>
                <span className="text-[var(--color-text-muted)] text-sm mb-2 uppercase tracking-widest">Ex. Tax</span>
              </div>
              
              <div className="flex gap-4">
                <Button variant="neumorph" size="lg" className="flex-1 text-lg font-bold tracking-wide">
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="w-16 flex-none flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </Button>
              </div>
            </div>

            {/* Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div>
                <h3 className="text-white font-bold uppercase tracking-widest mb-6">Technical Specifications</h3>
                <div className="space-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-[var(--color-border)] pb-4">
                      <span className="text-[var(--color-text-muted)]">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-white text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
