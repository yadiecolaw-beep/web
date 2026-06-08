import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function ProblemSolutionSection() {
  const { theme } = siteConfig;
  const whatsappEvaluar = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20evaluar%20mi%20caso%20y%20conocer%20la%20ruta%20jur%C3%ADdica%20adecuada.";

  // Estructura de problemas con rutas a imágenes dedicadas para emular la referencia visual
  const problems = [
    {
      title: "Tierra sin papeles",
      description: "Ejidos, predios y propiedades sin escritura en regla que no pueden venderse, heredarse o invertirse con certeza.",
      image: "/images/problems/tierra-sin-papeles.webp",
      alt: "Análisis de linderos y predios rústicos ejidales en Nayarit",
      badge: "Derecho Agrario"
    },
    {
      title: "Herencias complicadas",
      description: "Sucesiones agrarias con múltiples herederos, documentos incompletos o conflictos familiares.",
      image: "/images/problems/herencias-complicadas.webp",
      alt: "Sucesiones agrarias y herencias patrimoniales familiares",
      badge: "Sucesiones"
    },
    {
      title: "Contratos nulos",
      description: "Actos jurídicos con defectos de forma o fondo que pueden poner en riesgo una inversión inmobiliaria.",
      image: "/images/problems/contratos-nulos.webp",
      alt: "Revisión documental preventiva de contratos de compraventa",
      badge: "Derecho Civil"
    },
    {
      title: "Posesión disputada",
      description: "Conflictos de posesión, prescripción o usucapión donde el tiempo y la estrategia legal son decisivos.",
      image: "/images/problems/posesion-disputada.webp",
      alt: "Procedimiento de usucapión y límites de posesión",
      badge: "Litigio Civil"
    }
  ];

  return (
    <section id="problema" className="bg-[#FBF8F2] py-20 lg:py-28 border-t border-[#A7A29A]/20">
      <Container size="wide">
        
        {/* =========================================================================
            BLOQUE SUPERIOR: Título de Sección Centrado y Párrafo de Contexto
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <SectionTitle
            eyebrow="Riesgos Patrimoniales"
            title="Los conflictos de tierra no esperan"
            subtitle="Un terreno sin regularizar, una herencia disputada o un documento con vicios puede costar años de litigios innecesarios y poner en riesgo lo que con tanto esfuerzo construyó."
            align="center"
            variant="dark"
          />
          <p className="font-sans text-xs sm:text-sm text-[#191716]/80 leading-relaxed font-light max-w-2xl mt-4">
            En ECOLAW entendemos que cada caso es único. Combinamos experiencia en derecho agrario, inmobiliario y civil con una estrategia clara, honesta y orientada a proteger su patrimonio.
          </p>
        </div>

        {/* =========================================================================
            BLOQUE INTERMEDIO: Grid de Tarjetas Premium Noir (Mismo look "Nossos Advogados")
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((prob, idx) => (
            <div 
              key={idx} 
              className="bg-[#191716] border border-[#D4A64A]/10 rounded-[24px] p-3 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:border-[#D4A64A]/30 group"
            >
              <div className="space-y-4">
                {/* Contenedor de la Imagen Curvada con Margen Interior */}
                <div className="w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#111111] relative">
                  <img
                    src={prob.image}
                    alt={prob.alt}
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Badge en la esquina superior de la foto */}
                  <span className="absolute top-2.5 left-2.5 bg-[#111111]/85 text-[#D4A64A] text-[9px] font-sans tracking-widest uppercase font-bold px-2 py-1 rounded-sm border border-[#D4A64A]/25">
                    {prob.badge}
                  </span>
                </div>

                {/* Textos de la Tarjeta */}
                <div className="p-3 space-y-2">
                  <h3 className={`${theme.typography.titles} text-lg font-normal text-[#FBF8F2] group-hover:text-[#D4A64A] transition-colors duration-200`}>
                    {prob.title}
                  </h3>
                  <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                    {prob.description}
                  </p>
                </div>
              </div>

              {/* Fila de Metadata / Iconos Redondos en la Base */}
              <div className="p-3 pt-0 border-t border-[#A7A29A]/10 mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {/* Círculo 1 */}
                  <div className="w-7 h-7 rounded-full border border-[#D4A64A]/30 flex items-center justify-center bg-[#111111] text-[#D4A64A] text-[10px] font-sans font-bold">
                    §
                  </div>
                  {/* Círculo 2 */}
                  <div className="w-7 h-7 rounded-full border border-[#D4A64A]/30 flex items-center justify-center bg-[#111111] text-[#D4A64A] text-[10px] font-sans font-bold">
                    ⚖
                  </div>
                  {/* Círculo 3 */}
                  <div className="w-7 h-7 rounded-full border border-[#D4A64A]/30 flex items-center justify-center bg-[#111111] text-[#D4A64A] text-[10px] font-sans font-bold">
                    0{idx + 1}
                  </div>
                </div>
                {/* Indicador de Acción */}
                <span className="text-[#D4A64A] text-xs font-sans tracking-widest uppercase font-bold group-hover:text-[#F3EEE5] transition-colors duration-200">
                  Ver Caso
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            BLOQUE INFERIOR: Botón de Conversión e Indicadores de Slider
            ========================================================================= */}
        <div className="flex flex-col items-center space-y-6 pt-6">
          {/* Indicadores de paginación del slider (Como se ve abajo en tu referencia) */}
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A64A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#A7A29A]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#A7A29A]/30" />
          </div>

          <Button
            href={whatsappEvaluar}
            variant="dark"
            size="lg"
            external
          >
            Evaluar mi caso
          </Button>
        </div>

      </Container>
    </section>
  );
}