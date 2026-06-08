import { ImageResponse } from "next/og";

// Configuración del tamaño del Favicon estándar
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F3EEE5",
          fontFamily: "serif",
          fontWeight: "bold",
          border: "1px solid rgba(212, 166, 74, 0.2)",
        }}
      >
        E
      </div>
    ),
    { ...size }
  );
}