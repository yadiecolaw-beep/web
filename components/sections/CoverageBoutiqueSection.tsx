"use client";

import React, { useState, useEffect } from "react";

// =========================================================================
// DEPENDENCIAS PARA COMPILACIÓN EN EL CANVAS / FALLBACK LOCAL
// NOTA: En tu proyecto real, puedes limpiar este bloque si prefieres usar tus imports:
// import { siteConfig } from "../../content/site.config";
// import Container from "../ui/Container";
// =========================================================================
const siteConfig = {
  theme: { typography: { titles: "font-serif tracking-tight" } },
  coverageBoutique: {
    title: "Enfoque Legal Boutique con Cobertura Estratégica en la Costa",
    subtitle: "Resolvemos la complejidad jurídica de las zonas de mayor desarrollo en Nayarit con la atención personalizada que las grandes firmas corporativas diluyen.",
    regions: [
      { 
        name: "Bahía de Banderas", 
        details: "Foco prioritario en transacciones complejas, regularización ejidal y corretaje de alta gama.",
        img: "/images/coverage/bahia-de-banderas.webp"
      },
      { 
        name: "Sayulita & Riviera Nayarit", 
        details: "Estructuras de Fideicomiso seguras y Due Diligence transaccional para la comunidad internacional.",
        img: "/images/coverage/sayulita-riviera.webp"
      },
      { 
        name: "Tepic (Oficina Central)", 
        details: "Vinculación directa ante el Registro Agrario Nacional (RAN) y tribunales estatales.",
        img: "/images/coverage/tepic-central.webp"
      }
    ],
    differentiators: [
      { 
        title: "Atención Exclusiva de Socios", 
        description: "Su caso es analizado directamente por los Directores de la firma, garantizando soluciones sin intermediarios.",
        img: "/images/coverage/atencion-socios.webp"
      },
      { 
        title: "Expertise Agrario Especializado", 
        description: "Dominamos el paso de régimen ejidal a propiedad privada con precisión milimétrica en cualquier zona del estado o del país.",
        img: "/images/coverage/expertise-agrario.webp"
      }
    ]
  }
};

const Container = ({ children, size = "default", className = "" }: any) => {
  const maxWidth = size === "wide" ? "max-w-7xl" : "max-w-5xl";
  return <div className={`w-full ${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};
// =========================================================================

export default function CoverageBoutiqueSection() {
  const { theme, coverageBoutique } = siteConfig;
  const [activeSlide, setActiveSlide] = useState(0);

  // Ciclo automático del Slider para alternar entre el bloque de Regiones y el de Diferenciación Boutique
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cobertura-boutique" className="bg-[#111111] text-[#F3EEE5] py-20 lg:py-28 relative overflow-hidden border-t border-[#A7A29A]/10 text-left">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,166,74,0.03),transparent_70%)] pointer-events-none" />

      <Container size="wide">
        
        {/* =========================================================================
            ENCABEZADO DE SECCIÓN
            ========================================================================= */}
        <div className="mb-12 lg:mb-16 max-w-4xl flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[#D4A64A] text-[10px] font-sans tracking-widest uppercase font-bold">
              Presencia e Identidad
            </span>
            <h2 className={`${theme.typography.titles} text-3xl md:text-5xl font-normal leading-tight text-[#FBF8F2]`}>
              {coverageBoutique.title}
            </h2>
            <p className="font-sans text-sm text-[#A7A29A] leading-relaxed font-light">
              {coverageBoutique.subtitle}
            </p>
          </div>

          {/* Controles del Slider */}
          <div className="flex items-center space-x-3 mb-2 shrink-0">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-500 rounded-full h-2.5 ${
                  activeSlide === idx ? "w-8 bg-[#D4A64A]" : "w-2.5 bg-[#A7A29A]/30 hover:bg-[#D4A64A]/50"
                }`}
                aria-label={`Ver diapositiva ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            BENTO BOX SLIDER INTERACTIVO
            ========================================================================= */}
        <div className="relative w-full min-h-[500px] lg:min-h-[550px]">
          
          {/* SLIDE 01: COBERTURA REGIONAL */}
          <div 
            className={`transition-opacity duration-1000 ease-in-out w-full absolute inset-0 ${
              activeSlide === 0 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full">
              
              {/* Tarjeta Izquierda Grande: Bahía de Banderas */}
              <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden bg-[#191716] border border-[#D4A64A]/10 p-8 sm:p-12 flex flex-col justify-between h-[380px] lg:h-full group">
                <img 
                  src={coverageBoutique.regions[0].img} 
                  alt="ECOLAW Bahía de Banderas" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-30" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent pointer-events-none" />
                
                <div className="relative z-10 space-y-2">
                  <span className="text-[#D4A64A] text-[9px] font-sans tracking-widest uppercase font-bold px-2 py-1 bg-[#111111]/80 rounded border border-[#D4A64A]/20 inline-block">
                    Zona de Alta Plusvalía
                  </span>
                  <h3 className={`${theme.typography.titles} text-3xl sm:text-4xl font-normal text-[#FBF8F2]`}>
                    {coverageBoutique.regions[0].name}
                  </h3>
                </div>

                <div className="relative z-10 max-w-md">
                  <p className="font-sans text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                    {coverageBoutique.regions[0].details} Mantenemos una estrategia activa de protección patrimonial y corretaje legal seguro para blindar inversiones de alto impacto.
                  </p>
                </div>
              </div>

              {/* Tarjetas Derechas Apiladas: Sayulita y Tepic */}
              <div className="lg:col-span-5 flex flex-col gap-6 h-full">
                
                {/* Tarjeta Sayulita */}
                <div className="bg-[#191716] border border-[#A7A29A]/10 rounded-[32px] p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-2 relative overflow-hidden group">
                  <img 
                    src={coverageBoutique.regions[1].img} 
                    alt={coverageBoutique.regions[1].name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h4 className={`${theme.typography.titles} text-xl font-normal text-[#FBF8F2] mb-1`}>
                      {coverageBoutique.regions[1].name}
                    </h4>
                    <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                      {coverageBoutique.regions[1].details}
                    </p>
                  </div>
                </div>

                {/* Tarjeta Tepic */}
                <div className="bg-[#191716] border border-[#A7A29A]/10 rounded-[32px] p-6 sm:p-8 flex-1 flex flex-col justify-center space-y-2 relative overflow-hidden group">
                  <img 
                    src={coverageBoutique.regions[2].img} 
                    alt={coverageBoutique.regions[2].name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h4 className={`${theme.typography.titles} text-xl font-normal text-[#FBF8F2] mb-1`}>
                      {coverageBoutique.regions[2].name}
                    </h4>
                    <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                      {coverageBoutique.regions[2].details} Operatividad ágil ante delegaciones federales para resolver el trasfondo de predios rústicos y agrícolas.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* SLIDE 02: ENFOQUE BOUTIQUE */}
          <div 
            className={`transition-opacity duration-1000 ease-in-out w-full absolute inset-0 ${
              activeSlide === 1 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full">
              
              {/* Tarjeta Izquierda Pequeña: Atención Exclusiva de Socios */}
              <div className="lg:col-span-5 flex flex-col gap-6 h-full">
                <div className="bg-[#191716] border border-[#D4A64A]/20 rounded-[32px] p-8 flex-1 flex flex-col justify-center space-y-4 relative overflow-hidden group text-left">
                  <img 
                    src={coverageBoutique.differentiators[0].img} 
                    alt={coverageBoutique.differentiators[0].title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-20" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="w-8 h-8 rounded-full border border-[#D4A64A] flex items-center justify-center text-[#D4A64A] font-serif font-bold text-xs bg-[#111111]">
                      §
                    </div>
                    <h4 className={`${theme.typography.titles} text-2xl font-normal text-[#FBF8F2]`}>
                      {coverageBoutique.differentiators[0].title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light">
                      {coverageBoutique.differentiators[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta Derecha Masiva: Expertise Agrario Especializado */}
              <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden bg-[#191716] border border-[#A7A29A]/10 p-8 sm:p-12 flex flex-col justify-between h-[380px] lg:h-full group">
                <img 
                  src={coverageBoutique.differentiators[1].img} 
                  alt="Diferenciación Boutique ECOLAW" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-25" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-[#D4A64A] text-[10px] font-sans tracking-widest uppercase font-bold block mb-2">
                    Metodología de Autoridad
                  </span>
                  <h3 className={`${theme.typography.titles} text-3xl font-normal text-[#FBF8F2] max-w-md`}>
                    {coverageBoutique.differentiators[1].title}
                  </h3>
                </div>

                <div className="relative z-10 max-w-xl">
                  <p className="font-sans text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light">
                    {coverageBoutique.differentiators[1].description} Nuestra estructura compacta nos permite actuar con la rapidez y discreción que los desarrollos de alta gama exigen en la Riviera Nayarit.
                  </p>
                  
                  {/* Botón manual para regresar al bloque geográfico */}
                  <button 
                    onClick={() => setActiveSlide(0)}
                    className="mt-6 border border-[#A7A29A]/30 text-[#FBF8F2] hover:bg-[#F3EEE5] hover:text-[#111111] px-6 py-2 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
                  >
                    ← Ver zonas de cobertura
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}