"use client";

import React, { useState } from "react";
import { siteConfig } from "../../content/site.config";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { logo } = siteConfig.assets;
  const { items, primaryCta } = siteConfig.navigation;

  const getAnchorHref = (label: string) => {
    switch (label.toLowerCase()) {
      case "inicio": return "#inicio";
      case "servicios": return "#servicios";
      case "proceso": return "#proceso";
      case "extranjeros": return "#foreign-buyers";
      case "oficinas": return "#oficinas";
      case "contacto": return "#contacto";
      default: return "#";
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111]/95 backdrop-blur-md border-b border-[#D4A64A]/10">
      <Container size="wide">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo con la nueva ruta real */}
          <a href="#inicio" className="flex items-center space-x-3 group focus:outline-none">
            <img
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={45}
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Menú de Escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <a
                key={item.label}
                href={getAnchorHref(item.label)}
                className="font-sans text-[11px] font-medium tracking-widest text-[#A7A29A] uppercase hover:text-[#F3EEE5] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA de Escritorio */}
          <div className="hidden md:block">
            <Button href={primaryCta.href} variant="gold" size="sm" external>
              {primaryCta.label}
            </Button>
          </div>

          {/* Gatillo de menú móvil */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden text-[#A7A29A] hover:text-[#F3EEE5] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`w-full h-[1.5px] bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </Container>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden fixed inset-x-0 top-20 bg-[#111111] border-b border-[#D4A64A]/10 transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}`}>
        <nav className="px-6 py-8 flex flex-col space-y-6 bg-[#111111]">
          {items.map((item) => (
            <a
              key={item.label}
              href={getAnchorHref(item.label)}
              onClick={() => setIsOpen(false)}
              className="font-sans text-xs font-semibold tracking-widest text-[#A7A29A] uppercase hover:text-[#F3EEE5] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[#A7A29A]/10">
            <Button href={primaryCta.href} variant="gold" size="md" className="w-full" external>
              {primaryCta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}