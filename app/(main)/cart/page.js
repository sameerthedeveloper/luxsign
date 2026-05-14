import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Shopping Cart | LuxSign",
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <h1 className="font-display text-4xl text-white mb-12">Your Cart</h1>
        
        <div className="glass-card rounded-2xl p-12 text-center border border-[var(--color-border)] shadow-2xl">
          <div className="w-24 h-24 mx-auto bg-[var(--color-surface)] rounded-full flex items-center justify-center mb-6 border border-[var(--color-border)]">
            <svg className="w-10 h-10 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl text-white font-bold tracking-wide mb-4">Your cart is currently empty</h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
            Discover our range of industrial-grade visual solutions to add items to your cart.
          </p>
          <Link href="/products">
            <Button variant="neumorph" size="lg" className="font-bold tracking-widest px-8">
              BROWSE PRODUCTS
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
