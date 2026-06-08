import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function WhyEcolawSection() {
  const { theme, assets } = siteConfig;

  // Estructura original preservada intacta
  const features = [
    {
      title: "Especialización patrimonial",
      description: "El enfoque está en proteger tierra, inversión, herencia y propiedad, no en vender servicios legales genéricos."
    },
    {
      title: "Enfoque inmobiliario",
      description: "La firma entiende operaciones de compra, regularización, fideicomiso, sucesión y saneamiento de predios."
    },
    {
      title: "Oficinas en Tepic y Sayulita",
      description: "Presencia real para atender casos locales y operaciones inmobiliarias en zonas de alto valor."
    },
    {
      title: "Atención a propietarios y extranjeros",
      description: "Acompañamiento para familias, compradores extranjeros, inversionistas y desarrolladores."
    },
    {
      title: "Comunicación directa",
      description: "Proceso claro, contacto por WhatsApp y seguimiento humano desde el inicio."
    },
    {
      title: "Estrategia legal clara",
      description: "Antes de avanzar, se explica la ruta, los tiempos aproximados, riesgos y opciones disponibles."
    }
  ];

  return (
    <section id="por-que-ecolaw" className="bg-[#111111] text-[#F3EEE5] py-20 lg:py-28 relative overflow-hidden">
      {/* Fondo base con ruido/gradiente sutil para dar textura premium */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,166,74,0.05),transparent_80%)] pointer-events-none" />

      <Container size="wide">
        {/* Encabezado Principal */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <SectionTitle
            eyebrow="Diferenciación Boutique"
            title="Certeza jurídica con enfoque patrimonial, no litigio genérico"
            subtitle="Combinamos experiencia agraria, inmobiliaria y civil con estrategia clara, trato directo y conocimiento local de Nayarit."
            variant="light"
          />
        </div>

        {/* =========================================================================
            BENTO BOX LAYOUT (Inspirado en la referencia visual asimétrica)
            Se utilizan imágenes existentes y superposiciones oscuras para legibilidad
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* TARJETA 1 (Izquierda - Grande): Enfoque y Especialización */}
          <div className="lg:col-span-6 relative w-full rounded-[32px] overflow-hidden group min-h-[450px] lg:min-h-[600px] flex flex-col justify-end">
            {/* Imagen de Fondo (Inversionistas) */}
            <img 
              src={assets.audience.investors.src} 
              alt={assets.audience.investors.alt} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradiente de Protección para Legibilidad (Oscuro abajo, transparente arriba) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-transparent pointer-events-none" />
            
            {/* Contenido de la Tarjeta */}
            <div className="relative z-10 p-8 sm:p-10 flex flex-col space-y-8">
              <div className="space-y-2">
                <span className="text-[#D4A64A] text-[10px] font-bold tracking-widest uppercase mb-1 block">Área 01</span>
                <h3 className={`${theme.typography.titles} text-2xl font-normal text-[#FBF8F2]`}>
                  {features[0].title}
                </h3>
                <p className="font-sans text-sm text-[#A7A29A] leading-relaxed font-light">
                  {features[0].description}
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-[#D4A64A] text-[10px] font-bold tracking-widest uppercase mb-1 block">Área 02</span>
                <h3 className={`${theme.typography.titles} text-2xl font-normal text-[#FBF8F2]`}>
                  {features[1].title}
                </h3>
                <p className="font-sans text-sm text-[#A7A29A] leading-relaxed font-light">
                  {features[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* TARJETAS DERECHAS (Apiladas) */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            
            {/* TARJETA 2 (Arriba Derecha): Presencia y Atención */}
            <div className="relative w-full rounded-[32px] overflow-hidden group min-h-[300px] flex flex-col justify-end flex-1">
              <img 
                src={assets.audience.foreignBuyers.src} 
                alt={assets.audience.foreignBuyers.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/10 pointer-events-none" />
              
              <div className="relative z-10 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className={`${theme.typography.titles} text-xl font-normal text-[#FBF8F2]`}>
                    {features[2].title}
                  </h3>
                  <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                    {features[2].description}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className={`${theme.typography.titles} text-xl font-normal text-[#FBF8F2]`}>
                    {features[3].title}
                  </h3>
                  <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                    {features[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* TARJETA 3 (Abajo Derecha): Comunicación y Estrategia */}
            <div className="relative w-full rounded-[32px] overflow-hidden group min-h-[300px] flex flex-col justify-end flex-1">
              <img 
                src={assets.process.certeza.src} 
                alt={assets.process.certeza.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/90 to-[#111111]/20 pointer-events-none" />
              
              <div className="relative z-10 p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className={`${theme.typography.titles} text-xl font-normal text-[#FBF8F2]`}>
                    {features[4].title}
                  </h3>
                  <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                    {features[4].description}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className={`${theme.typography.titles} text-xl font-normal text-[#FBF8F2]`}>
                    {features[5].title}
                  </h3>
                  <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                    {features[5].description}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}