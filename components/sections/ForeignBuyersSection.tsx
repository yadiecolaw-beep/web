import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

export default function ForeignBuyersSection() {
  const { theme } = siteConfig;
  const buyerAsset = siteConfig.assets.audience.foreignBuyers;
  const whatsappForeign = "https://wa.me/523111030697?text=Hello,%20I%20found%20ECOLAW%20online.%20I%20need%20legal%20guidance%20for%20buying%20property%20in%20Nayarit%20as%20a%20foreigner.";

  const bullets = [
    "Property purchase guidance in Mexico",
    "Fideicomiso structure explanation",
    "Legal review before signing",
    "Local insight in Sayulita and Nayarit",
    "WhatsApp communication",
    "Support for international buyers"
  ];

  return (
    <section id="foreign-buyers" className="bg-[#111111] text-[#F3EEE5] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,166,74,0.03),transparent_40%)] pointer-events-none" />
      
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Bloque Izquierdo: Imagen con marco premium */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 border border-[#D4A64A]/20 -translate-x-3 translate-y-3 pointer-events-none" />
            <div className="w-full h-full overflow-hidden bg-[#191716]">
              <img
                src={buyerAsset.src}
                alt={buyerAsset.alt}
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bloque Derecho: Contenido Editorial Bilingüe */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6 z-10 lg:pl-6">
            <div>
              <Badge variant="gold" className="mb-4">
                International Investors
              </Badge>
              <SectionTitle
                title="Legal guidance for foreign buyers in Nayarit"
                subtitle="If you are buying property in Sayulita, Riviera Nayarit or coastal Mexico, the legal structure matters before you sign."
                variant="light"
              />
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#A7A29A] leading-relaxed font-light max-w-xl">
              ECOLAW helps foreign buyers understand the legal route, review property risks and move forward with a safer real estate transaction in Mexico.
            </p>

            {/* Listado en Inglés */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs font-sans text-[#F3EEE5]/90">
                  <span className="text-[#D4A64A] mt-0.5">▪</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                href={whatsappForeign}
                variant="gold"
                size="lg"
                className="w-full sm:w-auto text-center"
                external
              >
                Consulta para compradores extranjeros
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}