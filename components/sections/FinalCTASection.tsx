import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function FinalCTASection() {
  const { theme } = siteConfig;
  const whatsappUrl = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20informaci%C3%B3n%20sobre%20regularizaci%C3%B3n%20ejidal%20/%20fideicomiso%20para%20extranjeros%20/%20certeza%20jur%C3%ADdica%20inmobiliaria.";

  return (
    <section id="consulta" className="bg-[#F3EEE5] py-20 lg:py-24 border-t border-[#A7A29A]/20">
      <Container size="default">
        <div className="bg-[#111111] text-[#F3EEE5] p-8 sm:p-12 lg:p-16 border border-[#D4A64A]/20 text-center relative overflow-hidden flex flex-col items-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,166,74,0.02),transparent_60%)] pointer-events-none" />
          
          <span className="font-sans text-[10px] tracking-widest text-[#D4A64A] uppercase font-bold z-10">
            Protección Patrimonial Obligatoria
          </span>

          <h2 className={`${theme.typography.titles} text-2xl sm:text-3xl lg:text-4xl font-normal text-[#FBF8F2] tracking-tight leading-tight max-w-2xl z-10`}>
            Su patrimonio merece una estrategia jurídica clara
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light max-w-xl z-10">
            Evalúe su caso con una firma especializada en certeza jurídica inmobiliaria y patrimonial en Nayarit.
          </p>

          <div className="pt-2 z-10 w-full sm:w-auto">
            <Button
              href={whatsappUrl}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-center"
              external
            >
              Solicitar consulta por WhatsApp
            </Button>
          </div>

          <span className="font-sans text-[10px] text-[#A7A29A] italic tracking-wide z-10 pt-2">
            Atención en Tepic, Sayulita y operaciones inmobiliarias vinculadas con Nayarit.
          </span>
        </div>
      </Container>
    </section>
  );
}