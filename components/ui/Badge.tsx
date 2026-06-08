import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "dark" | "light" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 font-sans text-[11px] font-medium tracking-wider uppercase border rounded-none transition-colors duration-200";

  const variants = {
    default: "bg-[#F3EEE5] text-[#111111] border-[#A7A29A]",
    gold: "bg-[#D4A64A]/10 text-[#D4A64A] border-[#D4A64A]/30",
    dark: "bg-[#111111] text-[#FBF8F2] border-[#111111]",
    light: "bg-[#FBF8F2] text-[#111111] border-[#F3EEE5]",
    outline: "bg-transparent text-[#111111] border-[#111111]"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}