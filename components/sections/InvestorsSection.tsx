import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function InvestorsSection() {
  const { theme } = siteConfig;
  const investorAsset = siteConfig.assets.audience.investors;
  const whatsappInvestors = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20informaci%C3%B3n%20sobre%20due%20diligence%20legal%20para%20una%20inversi%C3%B3n%20inmobiliaria.";

  const items = [
    { title: "Revisión documental", desc: "Evaluación minuciosa de títulos, certificados parcelarios y antecedentes registrales." },
    { title: "Saneamiento de predios", desc: "Regularización preventiva de anomalías estructurales o vicios en la tenencia de la tierra." },
    { title: "Operaciones complejas", desc: "Diseño y estructuración de contratos de aportación, regímenes ejidales y compraventas críticas." },
    { title: "Regularización patrimonial", desc: "Sucesiones, usucapión y transmisiones de derechos agrarios bajo estricto orden normativo." },
    { title: "Riesgo legal analítico", desc: "Análisis técnico-jurídico integral antes de comprometer capital o firmar contratos definitivos." },
    { title: "Acompañamiento en cierre", desc: "Representación y validación ante notarías, autoridades locales y tribunales ejidales." }
  ];

  return (
    <section id="inversionistas" className="bg-[#F3EEE5] py-20 lg:py-28 border-t border-[#A7A29A]/20">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Bloque Izquierdo: Copys e Items */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <SectionTitle
              eyebrow="Mitigación de Riesgos"
              title="Due diligence legal para inversionistas y desarrolladores"
              subtitle="Antes de comprar, vender o desarrollar, revise el riesgo legal del predio y estructure su operación con certeza."
              variant="dark"
            />

            {/* Listado de Criterios Corporativos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, idx) => (
                <div key={idx} className="border-b border-[#A7A29A]/30 pb-4 flex flex-col space-y-1">
                  <h3 className={`${theme.typography.titles} text-base font-normal text-[#111111]`}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#191716]/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                href={whatsappInvestors}
                variant="dark"
                size="md"
                className="w-full sm:w-auto"
                external
              >
                Consulta para inversión inmobiliaria
              </Button>
            </div>
          </div>

          {/* Bloque Derecho: Imagen Editorial */}
          <div className="lg:col-span-5 w-full h-[320px] sm:h-[420px] lg:h-[480px] relative">
            <div className="absolute inset-0 border border-[#111111]/10 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="w-full h-full overflow-hidden bg-[#191716]">
              <img
                src={investorAsset.src}
                alt={investorAsset.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}