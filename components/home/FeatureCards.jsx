"use client";

import { ScrollReveal, RevealChild } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/CountUp";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: 120,
    suffix: "Hz",
    title: "Refresh Rate",
    description: "Ultra-high refresh rates ensuring zero flicker in broadcast environments and high-speed photography."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    stat: 4,
    suffix: "K+",
    title: "Resolution Processing",
    description: "Seamless processing of 4K and 8K signals with sub-frame latency for live events."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    stat: 99.9,
    suffix: "%",
    title: "Reliability",
    description: "Industrial-grade components with redundant power supplies designed for 24/7 operation."
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-32 bg-[var(--color-bg)] relative z-20 border-t border-[var(--color-border)] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-6">
        <ScrollReveal stagger={true} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <RevealChild key={idx} className="neumorph p-8 rounded-2xl group transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.1)]">
              <div className="w-16 h-16 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-gold)] mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <div className="font-accent text-5xl text-white mb-4 tracking-wider flex items-baseline">
                <CountUp to={feature.stat} duration={2.5} />
                <span className="text-3xl ml-1 text-[var(--color-gold)]">{feature.suffix}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">
                {feature.description}
              </p>
            </RevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
