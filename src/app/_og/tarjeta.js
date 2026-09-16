// Tarjeta para compartir (Open Graph): la misma estética de láminas del sitio.
// Se genera en el build; las fuentes viven al lado para no depender de la red.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

const PALETAS = {
  tinta: { bg: "#181818", fg: "#F8F8F6", dim: "#9A9A9A", acento: "#D3371E", linea: "rgba(255,255,255,0.06)" },
  carmetal: { bg: "#083931", fg: "#F3EEE3", dim: "#b9c9c0", acento: "#E8563A", linea: "rgba(255,255,255,0.07)" },
  papel: { bg: "#DFD8D4", fg: "#1d1d1d", dim: "#5b5b5b", acento: "#1c6b4a", linea: "rgba(0,0,0,0.07)" },
};

async function fuentes() {
  const dir = join(process.cwd(), "src/app/_og");
  const [a800, a900, courier] = await Promise.all([
    readFile(join(dir, "Archivo-800.ttf")),
    readFile(join(dir, "Archivo-900.ttf")),
    readFile(join(dir, "CourierPrime-400.ttf")),
  ]);
  return [
    { name: "Archivo", data: a800, weight: 800, style: "normal" },
    { name: "Archivo", data: a900, weight: 900, style: "normal" },
    { name: "Courier", data: courier, weight: 400, style: "normal" },
  ];
}

function Isotipo({ color, size }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 40 44" fill={color}>
      <rect x="2" y="26" width="8" height="16" />
      <rect x="13" y="16" width="8" height="26" />
      <rect x="24" y="6" width="8" height="36" />
      <path d="M2 14 L16 6 L27 12 L38 2" fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export async function tarjeta({ kicker, titulo, acento, bajada, etiqueta, paleta = "tinta" }) {
  const c = PALETAS[paleta] || PALETAS.tinta;
  const largo = (titulo + (acento ? " " + acento : "")).length;
  const tam = largo > 22 ? 84 : largo > 14 ? 104 : 124;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: "56px 64px", background: c.bg, color: c.fg, fontFamily: "Archivo",
          backgroundImage: `linear-gradient(${c.linea} 1px, transparent 1px), linear-gradient(90deg, ${c.linea} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.95 }}>
            <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: -1 }}>ignacio</span>
            <span style={{ fontSize: 30, fontWeight: 800, letterSpacing: -1 }}>peñamaria</span>
            <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: "#D3371E", marginTop: 8 }}>DATA & SYSTEMS STUDIO</span>
          </div>
          <Isotipo color={paleta === "papel" ? "#1d1d1d" : c.fg} size={46} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {kicker && (
            <span style={{ fontFamily: "Courier", fontSize: 22, letterSpacing: 3, color: c.dim, textTransform: "uppercase", marginBottom: 14 }}>{kicker}</span>
          )}
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: tam, fontWeight: 900, letterSpacing: -4, lineHeight: 0.92 }}>
            <span style={{ color: acento ? c.fg : c.acento, marginRight: 22 }}>{titulo}</span>
            {acento && <span style={{ color: c.acento }}>{acento}</span>}
          </div>
          {bajada && (
            <span style={{ fontSize: 30, fontWeight: 800, color: c.dim, marginTop: 22, maxWidth: 980, lineHeight: 1.2, letterSpacing: -0.5 }}>{bajada}</span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Courier", fontSize: 22, letterSpacing: 2, color: c.dim }}>ignaciopenamaria.com</span>
          {etiqueta && (
            <span style={{ fontFamily: "Courier", fontSize: 18, letterSpacing: 3, background: "#F4F1EA", color: "#1a1a1a", padding: "8px 16px", transform: "rotate(-1.5deg)", textTransform: "uppercase" }}>{etiqueta}</span>
          )}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await fuentes() },
  );
}
