import proyectos from "../../../data/proyectos";
import { tarjeta, OG_SIZE } from "../../_og/tarjeta";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Ficha de proyecto · Ignacio Peñamaria";

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

// Nombre partido en dos tonos, bajada corta y paleta de la lámina.
const TARJETAS = {
  "carmetal-erp": { titulo: "CARMETAL", acento: "ERP", kicker: "Proyecto 01 · Metalúrgica", bajada: "Del plano DXF al remito, con la planta adentro del sistema.", paleta: "carmetal", etiqueta: "ERP + app de operarios" },
  "bot-agenda-medica": { titulo: "Eva", acento: "Gestión clínica", kicker: "Proyecto 02 · Salud", bajada: "Agenda, historia clínica, caja y un bot de WhatsApp que atiende a toda hora.", paleta: "papel", etiqueta: "Healthtech" },
};

export default async function Image({ params }) {
  const { slug } = await params;
  const p = proyectos.find((x) => x.slug === slug);
  const t = TARJETAS[slug];
  if (t) return tarjeta(t);
  const titulo = p ? p.title.replace(/^[^\p{L}\p{N}]+/u, "").trim() : "Proyecto";
  return tarjeta({ kicker: "Ficha de proyecto", titulo, bajada: p?.description?.slice(0, 110), etiqueta: "Data & Systems" });
}
