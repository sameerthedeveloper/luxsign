"use client";

import { motion } from "framer-motion";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

  const variants = {
    primary:
      "bg-white text-black hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]",
    outline:
      "bg-transparent text-white border border-border hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-muted hover:text-white hover:bg-white/5",
    accent:
      "bg-accent-blue text-black font-bold uppercase tracking-wider hover:bg-white hover:text-accent-blue shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] border border-accent-blue",
    pink: "bg-accent-pink text-white hover:bg-accent-pink/90 shadow-[0_0_15px_rgba(255,45,149,0.3)] hover:shadow-[0_0_25px_rgba(255,45,149,0.5)]",
    gradient:
      "text-white bg-gradient-accent hover:opacity-90 shadow-[0_0_20px_rgba(0,207,255,0.3)]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
