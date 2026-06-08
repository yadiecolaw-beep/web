import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

export default function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const baseClass = "w-full mx-auto px-4 sm:px-6 lg:px-8";

  const maxWidths = {
    narrow: "max-w-4xl",      // Para FAQ, artículos o formularios limpios
    default: "max-w-6xl",     // Alineación estándar de rejillas comerciales
    wide: "max-w-7xl",        // Secciones Splits o listado extendido
    full: "max-w-full"        // Fondos de impacto total
  };

  return (
    <div className={`${baseClass} ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
}