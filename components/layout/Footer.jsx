import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="group mb-6 block">
              <Logo size="lg" />
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Leading the industry in precision LED display solutions and high-performance video processors. Pioneering visual excellence since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/products?cat=processor" className="text-muted text-sm hover:text-accent-blue transition-colors">Video Processors</Link></li>
              <li><Link href="/products?cat=display" className="text-muted text-sm hover:text-accent-blue transition-colors">LED Displays</Link></li>
              <li><Link href="/products?cat=controller" className="text-muted text-sm hover:text-accent-blue transition-colors">Smart Controllers</Link></li>
              <li><Link href="/products" className="text-muted text-sm hover:text-accent-blue transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-muted text-sm hover:text-accent-blue transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted text-sm hover:text-accent-blue transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-muted text-sm hover:text-accent-blue transition-colors">Support</Link></li>
              <li><Link href="#" className="text-muted text-sm hover:text-accent-blue transition-colors">Technical Documents</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-muted text-xs mb-4">Subscribe for technical updates and new product launches.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-surface border border-border px-3 py-2 text-xs text-white focus:outline-none focus:border-accent-blue w-full"
              />
              <button className="bg-white text-black px-3 py-2 text-xs font-bold hover:bg-accent-blue hover:text-white transition-colors">
                GO
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-[10px] uppercase tracking-widest">
            © 2026 LUXSIGN DISPLAYS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </Link>
            <Link href="#" className="text-muted hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
