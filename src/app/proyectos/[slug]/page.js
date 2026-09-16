import proyectos from "../../../data/proyectos";
import Ficha from "./Ficha";

const sinEmoji = (t) => t.replace(/^[^\p{L}\p{N}]+/u, "").trim();

export const dynamicParams = false;

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = proyectos.find((x) => x.slug === slug);
  if (!p) return {};
  const titulo = sinEmoji(p.title);
  return {
    title: titulo,
    description: p.description,
    alternates: { canonical: `/proyectos/${p.slug}` },
    // Los proyectos ocultos de la home no se indexan hasta revisarlos.
    robots: p.oculto ? { index: false, follow: false } : undefined,
    openGraph: { title: `${titulo} · Ignacio Peñamaria`, description: p.description, url: `/proyectos/${p.slug}`, type: "article" },
    twitter: { card: "summary_large_image", title: `${titulo} · Ignacio Peñamaria`, description: p.description },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <Ficha slug={slug} />;
}
