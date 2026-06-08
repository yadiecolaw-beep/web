"use client";

import React from "react";
import { siteConfig } from "../../content/site.config";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";

export default function HeroSection() {
  const { hero, theme } = siteConfig;
  const heroAsset = siteConfig.assets.hero;

  return (
    <section 
      id="inicio" 
      className="relative bg-[#111111] text-[#F3EEE5] overflow-hidden pt-16 pb-24 lg:pt-28 lg:pb-40 z-10 rounded-bl-[30px] md:rounded-bl-[150px] lg:rounded-bl-[88px]"
    >
      {/* IMAGEN DE FONDO A SANGRE (Sin cuadros)
        Ocupa todo el alto y el lado derecho en desktop, o todo el fondo en móvil.
      */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[65%] z-0 pointer-events-none">
        <img
          src={heroAsset.src}
          alt={heroAsset.alt}
          className="w-full h-full object-cover object-center filter brightness-[0.80] contrast-[1.05]"
          loading="eager"
        />
        {/* Degradado para fusionar suavemente la foto con el lado oscuro de los textos */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#111111] via-[#111111]/80 lg:via-[#111111]/40 to-transparent" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Limitamos el ancho del contenido para que flote sobre el lado oscuro */}
        <div className="w-full lg:w-[55%] flex flex-col space-y-6">
          
          {/* Bloque Izquierdo: Copy & Conversión Corporativa */}
          <div>
            <Badge variant="gold" className="mb-4 bg-[#D4A64A]/10 text-[#D4A64A] border-[#D4A64A]/20">
              {hero.eyebrow}
            </Badge>
            <h1 className={`${theme.typography.titles} text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FBF8F2] leading-[1.15] tracking-tight max-w-2xl`}>
              {hero.title}
            </h1>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#A7A29A] leading-relaxed max-w-xl font-light">
            {hero.subtitle}
          </p>

          {/* Listado de Viñetas Estilizadas Noir */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {hero.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-[11px] tracking-wider uppercase font-sans text-[#F3EEE5]/90">
                <span className="w-1 h-1 bg-[#D4A64A]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Acciones de Conversión */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Button
              href={hero.primaryCta.href}
              variant="gold"
              size="lg"
              external
            >
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="outline"
              size="lg"
              className="border-[#A7A29A]/40 text-[#F3EEE5] hover:bg-[#F3EEE5] hover:text-[#111111]"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Microcopy de Confianza Preventiva */}
          <p className="font-sans text-[10px] text-[#A7A29A]/70 italic tracking-wide">
            * Consulta inicial para evaluar su situación documental y definir la ruta jurídica adecuada.
          </p>

          {/* Bloque de Indicadores de Autoridad Integrados */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#A7A29A]/10 max-w-lg">
            <div>
              <p className={`${theme.typography.titles} text-2xl font-normal text-[#D4A64A]`}>50+</p>
              <p className="font-sans text-[9px] text-[#A7A29A] uppercase tracking-wider leading-tight font-medium">Años de experiencia combinada</p>
            </div>
            <div>
              <p className={`${theme.typography.titles} text-2xl font-normal text-[#D4A64A]`}>2</p>
              <p className="font-sans text-[9px] text-[#A7A29A] uppercase tracking-wider leading-tight font-medium">Socios fundadores de la firma</p>
            </div>
            <div>
              <p className={`${theme.typography.titles} text-2xl font-normal text-[#D4A64A]`}>Materia</p>
              <p className="font-sans text-[9px] text-[#A7A29A] uppercase tracking-wider leading-tight font-medium">Derecho agrario, inmobiliario y civil</p>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}