import React from "react";

// Importación ordenada de componentes estructurales de la Home
import Navigation from "../../../components/sections/Navigation";
import HeroSection from "../../../components/sections/HeroSection";
import ServicesSplitSection from "../../../components/sections/ServicesSplitSection";
import CoverageBoutiqueSection from "../../../components/sections/CoverageBoutiqueSection";
import ProblemSolutionSection from "../../../components/sections/ProblemSolutionSection";
import WhyEcolawSection from "../../../components/sections/WhyEcolawSection";
import ProcessSection from "../../../components/sections/ProcessSection";
import ForeignBuyersSection from "../../../components/sections/ForeignBuyersSection";
import InvestorsSection from "../../../components/sections/InvestorsSection";
import TrustAuthoritySection from "../../../components/sections/TrustAuthoritySection";
import FAQSection from "../../../components/sections/FAQSection";
import ContactSection from "../../../components/sections/ContactSection";
import FinalCTASection from "../../../components/sections/FinalCTASection";
import Footer from "../../../components/sections/Footer";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#F3EEE5] text-[#191716] antialiased selection:bg-[#D4A64A] selection:text-[#111111]">
      {/* Navegación Fija Superior */}
      <Navigation />

      {/* Flujo Narrativo Comercial y Arquitectura Real MAPS 2.0 */}
      <main>
        <HeroSection />
        <ServicesSplitSection />
        
        {/* Nueva sección interactiva de cobertura y diferenciación boutique */}
        <CoverageBoutiqueSection />
        
        <ProblemSolutionSection />
        <WhyEcolawSection />
        <ProcessSection />
        <ForeignBuyersSection />
        <InvestorsSection />
        <TrustAuthoritySection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>

      {/* Cierre Institucional */}
      <Footer />
    </div>
  );
}