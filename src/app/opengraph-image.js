import { tarjeta, OG_SIZE } from "./_og/tarjeta";

export const alt = "Ignacio Peñamaria · Data Portfolio";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return tarjeta({
    kicker: "Data & Systems",
    titulo: "Data Portfolio",
    bajada: "Sistemas a medida en uso diario y reporting para decidir con los números que la empresa ya tiene.",
    etiqueta: "Software a medida · Reporting",
  });
}
