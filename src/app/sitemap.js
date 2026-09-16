import proyectos from "../data/proyectos";

const BASE = "https://www.ignaciopenamaria.com";

export default function sitemap() {
  const hoy = new Date();
  return [
    { url: BASE, lastModified: hoy, changeFrequency: "monthly", priority: 1 },
    ...proyectos.filter((p) => !p.oculto).map((p) => ({
      url: `${BASE}/proyectos/${p.slug}`, lastModified: hoy, changeFrequency: "monthly", priority: 0.8,
    })),
  ];
}
