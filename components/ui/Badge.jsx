import React from "react";

export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-surface text-muted border-border",
    blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]",
    pink: "bg-accent-pink/10 text-accent-pink border-accent-pink/20 shadow-[0_0_10px_rgba(217,70,239,0.1)]",
    yellow:
      "bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]",
    orange: "bg-accent-orange/10 text-accent-orange border-accent-orange/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
