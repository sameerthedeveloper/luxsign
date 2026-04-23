import React from "react";
import Image from "next/image";

export const Logo = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
    xl: "h-32"
  };

  return (
    <div className={`flex items-center ${className}`}>
      {/* Icon Part - Using actual logo image */}
      <div className={`relative ${sizes[size]} w-auto aspect-[4/1]`}>
        <Image
          src="/logo.png"
          alt="LuxSign Logo"
          fill
          priority
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-left"
        />
      </div>
    </div>
  );
};
