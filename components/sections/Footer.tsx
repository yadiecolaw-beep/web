import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";

export default function Footer() {
  const { logo } = siteConfig.assets;

  const mainServices = [
    "Regularización ejidal",
    "Fideicomisos para extranjeros",
    "Juicios sucesorios agrarios",
    "Juicios de nulidad",
    "Usucapión / prescripción",
    "Derecho civil",
    "Asesoría preventiva"
  ];

  const internalLinks = [
    { label: "Inicio", id: "#inicio" },
    { label: "Servicios", id: "#servicios" },
    { label: "Proceso", id: "#proceso" },
    { label: "Extranjeros", id: "#foreign-buyers" },
    { label: "FAQ", id: "#faq" },
    { label: "Contacto", id: "#contacto" }
  ];

  return (
    <footer className="bg-[#111111] text-[#A7A29A] border-t border-[#D4A64A]/10 pt-16 pb-8 font-sans text-xs">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#A7A29A]/10">
          
          {/* Identidad */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={42}
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[#A7A29A]/80 font-light leading-relaxed pr-4">
              Despacho jurídico especializado en derecho agrario, inmobiliario y civil. Protegemos su patrimonio con experiencia, ética y estrategia jurídica clara.
            </p>
          </div>

          {/* Servicios */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="text-[#F3EEE5] font-medium tracking-wider uppercase text-[10px]">
              Áreas de Especialización
            </h4>
            <ul className="space-y-2 font-light text-[#A7A29A]/90">
              {mainServices.map((service, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-[#D4A64A]/60" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links e Info */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="text-[#F3EEE5] font-medium tracking-wider uppercase text-[10px]">
              Estructura Corporativa
            </h4>
            <nav className="grid grid-cols-2 gap-2 font-light">
              {internalLinks.map((link, idx) => (
                <a key={idx} href={link.id} className="hover:text-[#D4A64A] transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-[#A7A29A]/10 flex flex-col space-y-1 text-[11px]">
              <span className="text-[#F3EEE5]">Contacto Inmediato</span>
              <span className="font-light">+52 311 103 0697</span>
              <span className="font-light lowercase">Yadi.ecolex@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Copy de Cierre */}
        <div className="pt-8 flex flex-col space-y-4 text-[10px] font-light leading-relaxed text-[#A7A29A]/60">
          <p className="border-l border-[#D4A64A]/30 pl-4 italic">
            Aviso legal: La información contenida en este sitio web es de carácter informativo y no constituye asesoría jurídica formal. Para obtener orientación legal específica consulte directamente con nuestros abogados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[#A7A29A]/50">
            <span>© {new Date().getFullYear()} {siteConfig.brand.legalName}. Todos los derechos reservados.</span>
            <a 
              href="https://somoslazaro.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#D4A64A]/70 hover:text-[#D4A64A] font-medium tracking-wide transition-colors duration-200"
            >
              Hecho con amor por somoslazaro.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}