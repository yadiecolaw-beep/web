import React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  variant?: "light" | "dark" | "gold" | "editorial";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  variant = "dark",
}: SectionTitleProps) {
  
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end"
  };

  // Control estricto de colores según fondo futuro
  const textColor = {
    light: {
      eyebrow: "text-[#D4A64A]",
      title: "text-[#FBF8F2]",
      subtitle: "text-[#A7A29A]"
    },
    dark: {
      eyebrow: "text-[#D4A64A]",
      title: "text-[#111111]",
      subtitle: "text-[#191716]/80"
    },
    gold: {
      eyebrow: "text-[#111111]",
      title: "text-[#111111]",
      subtitle: "text-[#191716]"
    },
    editorial: {
      eyebrow: "text-[#A7A29A] uppercase tracking-widest text-[10px]",
      title: "text-[#111111] font-serif italic font-normal",
      subtitle: "text-[#191716]/70"
    }
  };

  return (
    <div className={`flex flex-col space-y-3 ${alignments[align]} ${className}`}>
      {eyebrow && (
        <span className={`font-sans text-xs font-semibold uppercase tracking-widest ${textColor[variant].eyebrow}`}>
          {eyebrow}
        </span>
      )}
      
      <h2 className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-tight ${textColor[variant].title}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`font-sans text-sm sm:text-base max-w-2xl font-light leading-relaxed ${textColor[variant].subtitle}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}