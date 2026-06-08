"use client";

import React from "react";

// =========================================================================
// DEPENDENCIAS PARA PREVISUALIZACIÓN EN EL CANVAS
// NOTA: Elimina este bloque superior en tu proyecto real y restaura tus imports originales:
// import { siteConfig } from "../../content/site.config";
// import Container from "../ui/Container";
// import SectionTitle from "../ui/SectionTitle";
// =========================================================================
const siteConfig = {
  theme: { typography: { titles: "font-serif tracking-tight" } },
  assets: {
    team: {
      directora: { src: "/images/team/yadira-borrayo-ecolaw.webp", alt: "Yadira Lizeth Borrayo Fregoso" },
      socio: { src: "/images/team/marcos-moncada-ecolaw.webp", alt: "Marcos Manuel Moncada Rafael" }
    }
  }
};

const Container = ({ children, size = "default", className = "" }: any) => {
  const maxWidth = size === "wide" ? "max-w-7xl" : "max-w-5xl";
  return <div className={`w-full ${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
};

const SectionTitle = ({ eyebrow, title, subtitle, variant = "dark", align = "left" }: any) => (
  <div className={`flex flex-col space-y-4 ${align === 'center' ? 'text-center items-center' : ''}`}>
    {eyebrow && <span className="text-[#D4A64A] text-[10px] font-sans tracking-widest uppercase font-bold">{eyebrow}</span>}
    <h2 className={`font-serif text-3xl md:text-5xl font-normal leading-[1.1] max-w-3xl ${variant === 'light' ? 'text-[#FBF8F2]' : 'text-[#111111]'}`}>{title}</h2>
    {subtitle && <p className="font-sans text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light max-w-2xl">{subtitle}</p>}
  </div>
);

// Iconos SVG para redes/contacto (simulando la referencia visual)
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
// =========================================================================

export default function TrustAuthoritySection() {
  const { theme } = siteConfig;
  const { directora, socio } = siteConfig.assets.team;

  const stats = [
    { value: "50+", label: "Años de experiencia combinada" },
    { value: "02", label: "Socios fundadores a cargo" },
    { value: "100%", label: "Enfoque patrimonial" },
    { value: "Tepic", label: "Y Sayulita (Riviera Nayarit)" }
  ];

  const founders = [
    {
      name: "Yadira Lizeth Borrayo Fregoso",
      initials: "YB",
      role: "Directora de la Firma",
      src: directora.src,
      alt: directora.alt,
      bio: "20 años de experiencia. Universidad Autónoma de Nayarit. Especialista de alto nivel en derecho agrario y sucesiones patrimoniales complejas."
    },
    {
      name: "Marcos Manuel Moncada Rafael",
      initials: "MM",
      role: "Socio Fundador",
      src: socio.src,
      alt: socio.alt,
      bio: "30 años de experiencia. Universidad Autónoma de Nayarit. Destacada trayectoria en juicios de usucapión, nulidad y litigio civil."
    }
  ];

  return (
    <section id="autoridad" className="bg-[#FBF8F2] py-24 lg:py-32 border-t border-[#A7A29A]/10 overflow-hidden">
      <Container size="wide">
        
        {/* =========================================================================
            CABECERA Y ESTADÍSTICAS (Formato Editorial)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-20">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="Nuestros Abogados"
              title="Una firma con experiencia real en patrimonio e inmobiliario"
              subtitle="ECOLAW reúne experiencia agraria, inmobiliaria y civil para acompañar casos patrimoniales complejos con criterio, estructura y total transparencia."
              variant="dark"
            />
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col space-y-2 border-l border-[#D4A64A]/40 pl-4">
                <span className={`${theme.typography.titles} text-3xl lg:text-4xl font-normal text-[#111111]`}>
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#A7A29A] font-bold leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            GRID DE ABOGADOS (Impactante, Fotos Grandes, Tarjetas Estilo "Nossos advogados")
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, idx) => (
            <div 
              key={idx} 
              className="relative w-full h-[550px] lg:h-[700px] rounded-[32px] overflow-hidden group shadow-2xl cursor-pointer"
            >
              {/* Monograma de fondo (visible mientras carga o como textura sutil) */}
              <div className="absolute inset-0 bg-[#111111] flex items-center justify-center pointer-events-none z-0">
                <span className="text-[150px] font-serif text-[#F3EEE5]/5 font-bold">{founder.initials}</span>
              </div>

              {/* Fotografía del Abogado (Llena el contenedor) */}
              <img
                src={founder.src}
                alt={founder.alt}
                className="absolute inset-0 w-full h-full object-cover object-top z-10 filter brightness-[0.95] contrast-[1.05] transition-transform duration-1000 ease-in-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradiente Oscuro Inferior (Más pesado en hover para leer el texto revelado) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent z-20 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

              {/* Contenedor de Textos y Biografía (Alineado al fondo) */}
              <div className="absolute inset-x-0 bottom-0 z-30 p-8 sm:p-12 flex flex-col justify-end transform transition-transform duration-500 ease-out translate-y-8 group-hover:translate-y-0">
                
                {/* Etiqueta de Rol */}
                <span className="text-[#D4A64A] font-sans text-[10px] tracking-widest uppercase font-bold mb-3 block">
                  {founder.role}
                </span>
                
                {/* Nombre del Abogado */}
                <h3 className={`${theme.typography.titles} text-3xl sm:text-4xl font-normal text-[#FBF8F2] mb-2`}>
                  {founder.name}
                </h3>
                
                {/* Biografía (Se revela sutilmente o toma foco en el hover) */}
                <p className="font-sans text-sm sm:text-base text-[#A7A29A] leading-relaxed font-light mb-8 opacity-80 transition-opacity duration-500 group-hover:opacity-100">
                  {founder.bio}
                </p>

                {/* Fila Inferior: Iconos de Contacto (Estilo "Nossos advogados") */}
                <div className="flex items-center space-x-3 opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                  <a href="#" className="w-10 h-10 rounded-full border border-[#A7A29A]/40 flex items-center justify-center text-[#A7A29A] hover:bg-[#D4A64A] hover:text-[#111111] hover:border-[#D4A64A] transition-colors duration-300">
                    <LinkedInIcon />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-[#A7A29A]/40 flex items-center justify-center text-[#A7A29A] hover:bg-[#D4A64A] hover:text-[#111111] hover:border-[#D4A64A] transition-colors duration-300">
                    <MailIcon />
                  </a>
                  {/* Botón visual de "Leer más" o flecha */}
                  <div className="ml-auto flex items-center space-x-2 text-[#D4A64A] font-sans text-[10px] uppercase tracking-widest font-bold">
                    <span>Perfil</span>
                    <span className="text-lg leading-none mb-0.5">→</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}