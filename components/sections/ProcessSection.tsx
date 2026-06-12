"use client";

import React, { useState, useEffect } from "react";

// =========================================================================
// DEPENDENCIAS PARA PREVISUALIZACIÓN EN CANVAS
// NOTA: Elimina este bloque superior en tu proyecto real y restaura tus imports:
// import { siteConfig } from "../../content/site.config";
// import Container from "../ui/Container";
// import SectionTitle from "../ui/SectionTitle";
// import Button from "../ui/Button";
// =========================================================================
const siteConfig = {
  theme: { typography: { titles: "font-serif tracking-tight" } },
  assets: {
    services: { 
      regularizacion: { 
        src: "/images/services/regularizacion-ejidal-nayarit-ecolaw.webp", 
        alt: "Regularización de terrenos" 
      } 
    },
    audience: {
      investors: { 
        src: "/images/audience/inversionistas-desarrolladores-nayarit.webp", 
        alt: "Inversionistas y Desarrolladores" 
      },
      foreignBuyers: { 
        src: "/images/audience/foreign-buyers-real-estate-nayarit.webp", 
        alt: "Foreign Buyers" 
      }
    },
    process: {
      certeza: { 
        src: "/images/process/certeza-juridica-inmobiliaria-ecolaw.webp", 
        alt: "Certeza Jurídica" 
      }
    }
  }
};

const Container = ({ children, size = "default", className = "" }: any) => {
  const maxWidth = size === "wide" ? "max-w-7xl" : "max-w-5xl";
  return <div className={`w-full ${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

const SectionTitle = ({ eyebrow, title, subtitle, variant = "dark", align = "left" }: any) => (
  <div className={`flex flex-col space-y-3 ${align === 'center' ? 'text-center items-center' : ''}`}>
    {eyebrow && <span className="text-[#D4A64A] text-[10px] font-sans tracking-widest uppercase font-bold">{eyebrow}</span>}
    <h2 className={`font-serif text-3xl md:text-4xl font-normal leading-tight max-w-2xl ${variant === 'light' ? 'text-[#FBF8F2]' : 'text-[#111111]'}`}>{title}</h2>
    {subtitle && <p className="font-sans text-sm text-[#A7A29A] leading-relaxed font-light max-w-xl">{subtitle}</p>}
  </div>
);

const Button = ({ children, href, variant, size, className, external }: any) => {
  const base = "inline-flex items-center justify-center font-sans font-bold uppercase tracking-widest transition-all duration-300";
  const variants: any = {
    gold: "bg-[#D4A64A] text-[#111111] hover:bg-[#F3EEE5]",
    outline: "border border-[#A7A29A] text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5]",
    dark: "bg-[#111111] text-[#F3EEE5] hover:bg-[#D4A64A] hover:text-[#111111]"
  };
  const sizes: any = { md: "px-6 py-3 text-[10px]", lg: "px-8 py-4 text-[11px]" };
  return (
    <a href={href} target={external ? "_blank" : "_self"} rel="noopener noreferrer" className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </a>
  );
};
// =========================================================================


export default function ProcessSection() {
  const { theme, assets } = siteConfig;
  const whatsappRuta = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20evaluar%20mi%20caso%20y%20conocer%20la%20ruta%20jur%C3%ADdica%20adecuada.";

  const [activeStep, setActiveStep] = useState(0);

  // Mapeamos los 4 pasos utilizando las rutas de tus imágenes reales en el proyecto
  const steps = [
    {
      num: "I",
      title: "Consulta inicial",
      description: "Platique su situación sin compromiso. Escuchamos cada detalle para entender el alcance real de su caso y recopilar los primeros antecedentes.",
      img: assets.audience.foreignBuyers.src
    },
    {
      num: "II",
      title: "Diagnóstico jurídico",
      description: "Analizamos exhaustivamente sus documentos, antecedentes y viabilidad legal frente a registros agrarios para darle un panorama claro de sus opciones.",
      img: assets.services.regularizacion.src
    },
    {
      num: "III",
      title: "Propuesta estratégica",
      description: "Diseñamos la ruta más eficiente estructurando las etapas, tiempos estimados, riesgos y próximos pasos a seguir con total transparencia.",
      img: assets.audience.investors.src
    },
    {
      num: "IV",
      title: "Representación firme",
      description: "Ejecutamos jurídicamente y acompañamos el proceso ante autoridades, notarías, tribunales o contrapartes informando cada avance.",
      img: assets.process.certeza.src
    }
  ];

  // Slider Automático: Cambia cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setActiveStep((prev) => (prev + 1) % steps.length);
  const handleSelect = (index: number) => setActiveStep(index);

  return (
    <section id="proceso" className="bg-[#F3EEE5] py-20 lg:py-28 border-t border-[#A7A29A]/10 text-left">
      <Container size="wide">
        
        {/* Cabecera de la Sección */}
        <div className="mb-12 lg:mb-16">
          <SectionTitle
            eyebrow="Metodología de Trabajo"
            title="Un proceso transparente desde el primer día"
            subtitle="Cada caso inicia con escucha, revisión documental exhaustiva y una ruta jurídica clara antes de tomar cualquier decisión patrimonial."
            align="left"
            variant="dark"
          />
        </div>

        {/* =========================================================================
            BENTO BOX SLIDER (Asimétrico y Dinámico)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* PANEL IZQUIERDO (Visual + Título del Paso) */}
          <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden bg-[#111111] group shadow-lg">
            
            {/* Imágenes en Crossfade */}
            {steps.map((step, idx) => (
              <img
                key={idx}
                src={step.img}
                alt={step.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  activeStep === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
            
            {/* Gradiente de protección pesado para leer el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />

            {/* Texto Dinámico del Panel Izquierdo */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 pointer-events-none">
              <div className="overflow-hidden">
                <span className="text-[#D4A64A] text-[10px] font-bold tracking-widest uppercase block border-l-2 border-[#D4A64A] pl-3 mb-3">
                  Paso {steps[activeStep].num}
                </span>
                <h3 
                  key={activeStep} 
                  className={`${theme.typography.titles} text-3xl sm:text-5xl font-normal text-[#FBF8F2] animate-fade-in-up`}
                >
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>
          </div>

          {/* PANELES DERECHOS (Apilados) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* PANEL SUPERIOR DERECHO (Descripción del Paso) */}
            <div className="bg-[#191716] rounded-[32px] p-8 sm:p-10 flex-1 flex flex-col justify-center border border-[#A7A29A]/10 relative overflow-hidden shadow-lg">
              {/* Sutil resplandor de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A64A]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <h4 className="text-[#FBF8F2] font-sans text-xs uppercase tracking-widest font-bold">
                  Detalle del Proceso
                </h4>
                {/* La clave cambia para forzar la re-animación del texto */}
                <p 
                  key={`desc-${activeStep}`} 
                  className="font-sans text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light animate-fade-in"
                >
                  {steps[activeStep].description}
                </p>
              </div>
            </div>

            {/* PANEL INFERIOR DERECHO (Controles y CTA) */}
            <div className="bg-[#111111] rounded-[32px] p-8 sm:p-10 flex-1 flex flex-col justify-between border border-[#D4A64A]/20 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,166,74,0.08),transparent_60%)] pointer-events-none" />
              
              <div className="space-y-6 relative z-10 h-full flex flex-col justify-between">
                
                <div className="space-y-4">
                  <span className="text-[#A7A29A] font-sans text-[10px] tracking-widest uppercase">
                    Avance de la ruta
                  </span>
                  
                  {/* Paginación Interactiva (Barras) */}
                  <div className="flex items-center space-x-2">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${
                          activeStep === idx 
                            ? "w-10 bg-[#D4A64A]" 
                            : "w-4 bg-[#A7A29A]/30 hover:bg-[#D4A64A]/50"
                        }`}
                        aria-label={`Ir al paso ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Acciones de Conversión */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                  <Button
                    href={whatsappRuta}
                    variant="gold"
                    size="md"
                    className="w-full sm:w-auto text-center"
                    external
                  >
                    Iniciar mi proceso
                  </Button>
                  
                  <button 
                    onClick={handleNext}
                    className="text-[#A7A29A] text-[10px] font-sans uppercase tracking-widest font-bold hover:text-[#F3EEE5] transition-colors py-2 flex items-center space-x-1"
                  >
                    <span>Siguiente</span>
                    <span className="text-lg leading-none mb-0.5">→</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </Container>

      {/* Estilos CSS nativos integrados para las animaciones suaves del slider */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}} />
    </section>
  );
}