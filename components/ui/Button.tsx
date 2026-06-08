import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  onClick,
}: ButtonProps) {
  // Base de diseño editorial, sutil, esquinas suavizadas estrictamente patrimoniales
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none tracking-wide text-center uppercase text-xs";

  const variants = {
    primary: "bg-[#111111] text-[#F3EEE5] hover:bg-[#D4A64A] hover:text-[#111111] border border-[#111111]",
    secondary: "bg-[#F3EEE5] text-[#111111] hover:bg-[#FBF8F2] border border-[#A7A29A]",
    outline: "bg-transparent text-[#111111] border border-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5]",
    ghost: "bg-transparent text-[#111111] hover:bg-[#F3EEE5] border border-transparent",
    dark: "bg-[#191716] text-[#FBF8F2] hover:bg-[#111111] border border-transparent",
    gold: "bg-[#D4A64A] text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5] border border-[#D4A64A]"
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-6 py-3.5",
    lg: "px-8 py-5 text-sm tracking-widest"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isAnchor = href.startsWith("#");
    const targetProps = external && !isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {};
    
    return (
      <a href={href} className={combinedClasses} {...targetProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}