import React from "react";

export const Input = ({ label, error, className = "", ...props }) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </label>
      )}
      <input
        className={`bg-surface border border-border px-4 py-3 text-sm focus:border-accent-blue focus:shadow-[0_0_10px_rgba(0,207,255,0.2)] focus:outline-none transition-all duration-200 text-white placeholder:text-muted/50 ${
          error ? "border-accent-pink" : ""
        }`}
        {...props}
      />
      {error && <span className="text-[10px] text-accent-pink">{error}</span>}
    </div>
  );
};

export const TextArea = ({ label, error, className = "", ...props }) => {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </label>
      )}
      <textarea
        className={`bg-surface border border-border px-4 py-3 text-sm focus:border-accent-blue focus:shadow-[0_0_10px_rgba(0,207,255,0.2)] focus:outline-none transition-all duration-200 text-white placeholder:text-muted/50 min-h-[120px] resize-none ${
          error ? "border-accent-pink" : ""
        }`}
        {...props}
      />
      {error && <span className="text-[10px] text-accent-pink">{error}</span>}
    </div>
  );
};
