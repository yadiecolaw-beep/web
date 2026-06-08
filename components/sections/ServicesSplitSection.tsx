import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function ServicesSplitSection() {
  const { servicesSplit, theme } = siteConfig;
  const { regularizacion, fideicomisos } = siteConfig.assets.services;

  // Enlaces de conversión de WhatsApp de ECOLAW intactos
  const whatsappRegularizacion = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20evaluar%20un%20caso%20de%20regularizaci%C3%B3n%20de%20terreno%20ejidal.";
  const whatsappExtranjeros = "https://wa.me/523111030697?text=Hello,%20I%20found%20ECOLAW%20online.%20I%20need%20legal%20guidance%20for%20buying%20property%20in%20Nayarit%20as%20a%20foreigner.";
  const whatsappGeneral = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20informaci%C3%B3n%20sobre%20regularizaci%C3%B3n%20ejidal%20/%20fideicomiso%20para%20extranjeros%20/%20certeza%20jur%C3%ADdica%20inmobiliaria.";

  return (
    <section id="servicios" className="bg-[#FBF8F2] py-20 lg:py-28 text-[#191716] border-t border-[#A7A29A]/20">
      <Container size="wide">
        
        {/* =========================================================================
            BLOQUE SUPERIOR (FILA 1): Imagen de Autoridad + Textos y Diferenciadores
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pb-16 border-b border-[#A7A29A]/20">
          
          {/* Lado Izquierdo: Imagen de Balanza / Documentación en alta definición */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-[#191716] overflow-hidden border border-[#D4A64A]/20 shadow-xl">
              <img
                src={regularizacion.src}
                alt="ECOLAW amplia experiencia jurídica"
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Lado Derecho: Títulos de Sección y Viñetas Estilizadas de la Imagen */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col space-y-1">
                <span className="text-[#D4A64A] text-xs font-sans tracking-widest uppercase font-bold">24/7</span>
                <span className="text-[#A7A29A] text-[11px] font-sans tracking-wide leading-tight font-light">Atención y asesoría jurídica continua</span>
              </div>
              
              <h2 className={`${theme.typography.titles} text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] leading-tight`}>
                {servicesSplit.title}
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#191716]/85 leading-relaxed font-light">
              {servicesSplit.subtitle}
            </p>

            {/* Tres Criterios con Círculos Dorados (Como en tu referencia) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border border-[#D4A64A] flex items-center justify-center bg-[#F3EEE5] shrink-0">
                  <span className="text-[#D4A64A] text-[10px]">✓</span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-[#111111] uppercase tracking-wider">Atención Directa</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border border-[#D4A64A] flex items-center justify-center bg-[#F3EEE5] shrink-0">
                  <span className="text-[#D4A64A] text-[10px]">✓</span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-[#111111] uppercase tracking-wider">Estrategia Clara</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border border-[#D4A64A] flex items-center justify-center bg-[#F3EEE5] shrink-0">
                  <span className="text-[#D4A64A] text-[10px]">✓</span>
                </div>
                <span className="font-sans text-[11px] font-semibold text-[#111111] uppercase tracking-wider">Certeza Absoluta</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            BLOQUE INFERIOR (FILA 2): Estadísticas + Gran Botón Pill y Tarjetas Detalladas
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          
          {/* Lado Izquierdo: Círculos de Métricas + Botón Ovalado de Navegación */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            
            {/* Esferas de Datos */}
            <div className="flex items-center space-x-6 sm:space-x-8">
              {/* Esfera 1 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 rounded-full border border-[#D4A64A] flex flex-col items-center justify-center bg-[#F3EEE5]">
                  <span className={`${theme.typography.titles} text-base font-semibold text-[#111111]`}>50+</span>
                </div>
                <span className="font-sans text-[9px] tracking-widest text-[#A7A29A] uppercase font-bold text-center leading-tight">Casos<br/>Resueltos</span>
              </div>
              
              {/* Esfera 2 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 rounded-full border border-[#D4A64A] flex flex-col items-center justify-center bg-[#F3EEE5]">
                  <span className={`${theme.typography.titles} text-base font-semibold text-[#111111]`}>100%</span>
                </div>
                <span className="font-sans text-[9px] tracking-widest text-[#A7A29A] uppercase font-bold text-center leading-tight">Certeza<br/>Inmobiliaria</span>
              </div>

              {/* Esfera 3 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 rounded-full border border-[#D4A64A] flex flex-col items-center justify-center bg-[#F3EEE5]">
                  <span className={`${theme.typography.titles} text-base font-semibold text-[#111111]`}>90%</span>
                </div>
                <span className="font-sans text-[9px] tracking-widest text-[#A7A29A] uppercase font-bold text-center leading-tight">Satisfacción<br/>Clientes</span>
              </div>
            </div>

            {/* Gran Botón Pill Horizontal (Idéntico a la referencia) */}
            <div>
              <Button
                href={whatsappGeneral}
                variant="outline"
                size="lg"
                className="w-full text-center rounded-full border-[#A7A29A] text-[#111111] hover:bg-[#111111] hover:text-[#F3EEE5] hover:border-[#111111] transition-all duration-300 uppercase tracking-widest text-[11px] py-4"
                external
              >
                Solicitar información sobre nuestros servicios
              </Button>
            </div>

          </div>

          {/* Lado Derecho: Tarjetas de las Dos Líneas de Negocio Lado a Lado */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Tarjeta 1: Regularización Ejidal */}
            <div className="bg-[#F3EEE5] border border-[#A7A29A]/30 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#D4A64A]/30 group">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] overflow-hidden bg-[#191716] relative">
                  <img
                    src={regularizacion.src}
                    alt="Regularización de terrenos ejidales"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className={`${theme.typography.titles} text-base font-semibold text-[#111111]`}>
                    {servicesSplit.items[0].title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#191716]/80 leading-relaxed font-light">
                    {servicesSplit.items[0].description}
                  </p>
                </div>

                {/* Bullets preservados sin alteración */}
                <ul className="space-y-1 pt-2 border-t border-[#A7A29A]/20">
                  <li className="flex items-start space-x-2 text-[10px] font-sans text-[#191716]/90">
                    <span className="text-[#D4A64A]">▪</span>
                    <span>Ejidos y predios sin escritura</span>
                  </li>
                  <li className="flex items-start space-x-2 text-[10px] font-sans text-[#191716]/90">
                    <span className="text-[#D4A64A]">▪</span>
                    <span>Procesos ante el RAN</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <a 
                  href={whatsappRegularizacion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-wider font-sans font-bold uppercase text-[#111111] hover:text-[#D4A64A] transition-colors duration-200"
                >
                  Evaluar mi terreno
                </a>
                <span className="text-[#D4A64A] text-lg font-serif transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>

            {/* Tarjeta 2: Fideicomisos para Extranjeros */}
            <div className="bg-[#111111] text-[#F3EEE5] border border-[#D4A64A]/20 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] overflow-hidden bg-[#191716] relative">
                  <img
                    src={fideicomisos.src}
                    alt="Fideicomisos para extranjeros"
                    className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className={`${theme.typography.titles} text-base font-semibold text-[#FBF8F2]`}>
                    {servicesSplit.items[1].title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#A7A29A] leading-relaxed font-light">
                    {servicesSplit.items[1].description}
                  </p>
                </div>

                {/* Bullets preservados sin alteración */}
                <ul className="space-y-1 pt-2 border-t border-[#A7A29A]/10">
                  <li className="flex items-start space-x-2 text-[10px] font-sans text-[#A7A29A]">
                    <span className="text-[#D4A64A]">▪</span>
                    <span>Compra en zona restringida</span>
                  </li>
                  <li className="flex items-start space-x-2 text-[10px] font-sans text-[#A7A29A]">
                    <span className="text-[#D4A64A]">▪</span>
                    <span>Sayulita y Riviera Nayarit</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <a 
                  href={whatsappExtranjeros}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-wider font-sans font-bold uppercase text-[#D4A64A] hover:text-[#F3EEE5] transition-colors duration-200"
                >
                  Consulta extranjeros
                </a>
                <span className="text-[#D4A64A] text-lg font-serif transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}