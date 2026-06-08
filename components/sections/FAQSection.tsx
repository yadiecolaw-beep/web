import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FAQSection() {
  const { theme } = siteConfig;

  // Estructura de contenido optimizada para SEO long-tail sin lógica de cliente
  const faqs = [
    {
      q: "¿Cómo regularizar un terreno ejidal en Nayarit?",
      a: "El primer paso es revisar la situación documental, antecedentes de posesión, registro agrario y viabilidad jurídica del predio. Cada caso requiere diagnóstico antes de definir una ruta."
    },
    {
      q: "¿Es seguro comprar un terreno ejidal?",
      a: "Depende de la situación legal del predio. Antes de comprar es indispensable revisar documentos, derechos, posesión, antecedentes y posibles riesgos."
    },
    {
      q: "¿Qué es un fideicomiso para extranjeros en México?",
      a: "Es una estructura legal utilizada para que una persona extranjera pueda adquirir derechos sobre propiedad en zona restringida, como zonas costeras, con participación de una institución fiduciaria."
    },
    {
      q: "¿Puedo comprar propiedad en Sayulita siendo extranjero?",
      a: "Sí puede ser posible, pero la operación debe revisarse legalmente antes de firmar. En zonas costeras normalmente se requiere estructura adecuada, como fideicomiso u otra vía permitida por la ley."
    },
    {
      q: "¿Qué pasa si no tengo documentos completos de mi terreno?",
      a: "Es un escenario común. Se debe revisar posesión, antecedentes, testigos, pagos, registros y demás elementos disponibles para determinar si existe una ruta jurídica viable."
    },
    {
      q: "¿Cuánto tarda regularizar un terreno?",
      a: "Depende del tipo de trámite, documentos, autoridad involucrada y situación del predio. Después de revisar el caso se puede estimar una ruta y tiempos aproximados."
    },
    {
      q: "¿Atienden clientes fuera de Nayarit o extranjeros?",
      a: "Sí. Si el bien o la operación está relacionada con Nayarit, ECOLAW puede orientar a clientes locales, nacionales y extranjeros."
    },
    {
      q: "¿La consulta inicial tiene costo?",
      a: "La consulta inicial permite evaluar el caso y explicar opciones generales. La propuesta formal depende del tipo de asunto, complejidad y ruta jurídica."
    }
  ];

  return (
    <section id="faq" className="bg-[#FBF8F2] py-20 lg:py-28 border-t border-[#A7A29A]/20">
      <Container size="narrow">
        
        {/* Cabecera Editorial */}
        <div className="mb-16 text-center">
          <SectionTitle
            eyebrow="Resolución de Dudas"
            title="Lo que más nos preguntan"
            subtitle="Respuestas claras para empezar a evaluar su caso con mayor certeza."
            align="center"
            variant="dark"
          />
        </div>

        {/* Acordeón Nativo de Alto Rendimiento */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group border border-[#A7A29A]/30 bg-[#F3EEE5] p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:shadow-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <h3 className={`${theme.typography.titles} text-base font-normal text-[#111111] pr-4`}>
                  {faq.q}
                </h3>
                <span className="relative w-4 h-4 shrink-0 text-[#D4A64A] transition-transform duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#A7A29A]/20">
                <p className="font-sans text-xs sm:text-sm text-[#191716]/80 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

      </Container>
    </section>
  );
}