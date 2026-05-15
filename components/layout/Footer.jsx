import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg)] border-t border-[var(--color-border)] py-20 mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <Logo size="lg" />
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm max-w-sm mb-8 leading-relaxed">
              Industrial-grade LED display solutions and high-performance video processors. 
              Engineering visual excellence for global broadcast, events, and architecture.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full neumorph flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" /> {/* Placeholder icon */}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-accent text-xl tracking-wider text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              {['Video Processors', 'LED Displays', 'Smart Controllers', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link href="/products" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-accent text-xl tracking-wider text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Support'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-[var(--color-border)] mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} LUXSIGN DISPLAYS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[var(--color-text-muted)] hover:text-white transition-colors text-xs tracking-widest uppercase">
              Privacy
            </Link>
            <Link href="#" className="text-[var(--color-text-muted)] hover:text-white transition-colors text-xs tracking-widest uppercase">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
