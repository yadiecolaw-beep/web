import React from "react";
import { siteConfig } from "../../content/site.config";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function ContactSection() {
  const { theme } = siteConfig;
  const whatsappUrl = "https://wa.me/523111030697?text=Hola,%20vengo%20de%20la%20web%20de%20ECOLAW.%20Quiero%20informaci%C3%B3n%20sobre%20regularizaci%C3%B3n%20ejidal%20/%20fideicomiso%20para%20extranjeros%20/%20certeza%20jur%C3%ADdica%20inmobiliaria.";

  return (
    <section id="contacto" className="bg-[#111111] text-[#F3EEE5] py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(212,166,74,0.01),transparent)] pointer-events-none" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Bloque Izquierdo: Título y Datos Generales */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <SectionTitle
              eyebrow="Canales Oficiales"
              title="Hablemos de su caso hoy"
              subtitle="Contáctenos directamente por WhatsApp, teléfono o correo. Le atenderemos para revisar su situación y definir la ruta jurídica adecuada."
              variant="light"
            />

            <div className="space-y-4 pt-4 font-sans text-xs tracking-wide">
              <div className="flex flex-col space-y-1">
                <span className="text-[#A7A29A] uppercase text-[10px] font-bold">Línea Directa</span>
                <span className="text-[#FBF8F2] text-sm">+52 311 103 0697</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[#A7A29A] uppercase text-[10px] font-bold">Enlace Electrónico</span>
                <span className="text-[#FBF8F2] text-sm lowercase">Yadi.ecolex@gmail.com</span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-[#A7A29A] uppercase text-[10px] font-bold">Horarios de Atención</span>
                <p className="text-[#A7A29A] font-light leading-relaxed">
                  Lunes a viernes de 9:00 am a 3:00 pm <br />
                  Sábados de 11:00 am a 4:00 pm en Sayulita
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href={whatsappUrl}
                variant="gold"
                size="md"
                className="w-full sm:w-auto"
                external
              >
                Enviar mensaje por WhatsApp
              </Button>
            </div>
          </div>

          {/* Bloque Derecho: Estructura por Oficina (#oficinas) */}
          <div id="oficinas" className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full scroll-mt-24">
            
            {/* Oficina Tepic */}
            <div className="bg-[#191716] border border-[#A7A29A]/10 p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#D4A64A]/30">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#D4A64A]" />
                  <h3 className={`${theme.typography.titles} text-lg font-normal text-[#FBF8F2]`}>
                    Oficina Tepic
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                  Calle Cascada 48<br />
                  Fracc. Parque Ecológico<br />
                  Tepic, Nayarit
                </p>
              </div>
              <span className="font-sans text-[9px] tracking-widest text-[#D4A64A] uppercase font-bold">Sede Central</span>
            </div>

            {/* Oficina Sayulita */}
            <div className="bg-[#191716] border border-[#A7A29A]/10 p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#D4A64A]/30">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#D4A64A]" />
                  <h3 className={`${theme.typography.titles} text-lg font-normal text-[#FBF8F2]`}>
                    Oficina Sayulita
                  </h3>
                </div>
                <p className="font-sans text-xs text-[#A7A29A] leading-relaxed font-light">
                  Av. Revolución 26 Local 2<br />
                  Hotel Riviera Sayulita<br />
                  Sayulita, Bahía de Banderas, Nayarit
                </p>
              </div>
              <span className="font-sans text-[9px] tracking-widest text-[#D4A64A] uppercase font-bold">Módulo Costa</span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}