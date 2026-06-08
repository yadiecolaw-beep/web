import { ImageResponse } from "next/og";
// Ruta matemáticamente exacta: Sube 3 niveles para salir de (marketing) -> app -> src -> y entrar a content
import { siteConfig } from "../../../content/site.config";

export const runtime = "edge";
export const alt = "ECOLAW | Real Estate & Law Nayarit";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#111111",
          backgroundImage: "radial-gradient(circle at top right, rgba(212, 166, 74, 0.08), transparent 70%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Identificador de Marca */}
        <div
          style={{
            fontSize: 24,
            color: "#D4A64A",
            letterSpacing: "0.2em",
            fontWeight: "bold",
            marginBottom: "40px",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.brand.legalName}
        </div>

        {/* H1 SEO de Alto Impacto */}
        <div
          style={{
            fontSize: 48,
            color: "#FBF8F2",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "24px",
            fontWeight: "normal",
          }}
        >
          {siteConfig.seo.h1}
        </div>

        {/* Cobertura / Subtítulo */}
        <div
          style={{
            fontSize: 20,
            color: "#A7A29A",
            fontWeight: "light",
          }}
        >
          Oficinas Centrales: Tepic & Sayulita, Nayarit.
        </div>
      </div>
    ),
    { ...size }
  );
}