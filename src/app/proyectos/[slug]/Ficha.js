"use client";
import { useEffect } from "react";
import Link from "next/link";
import proyectos from "../../../data/proyectos";
import { Hud, useLaminas, EvaStats } from "@/components/laminas";

const sinEmoji = (t) => t.replace(/^[^\p{L}\p{N}]+/u, "").trim();

export default function Ficha({ slug }) {
  useLaminas();
  useEffect(() => {
    document.body.classList.add("ficha-page");
    return () => document.body.classList.remove("ficha-page");
  }, []);
  const p = proyectos.find((x) => x.slug === slug);

  if (!p) {
    return (
      <>
        <Hud />
        <section className="section contact">
          <h1 className="display solid">404</h1>
          <p className="body">No hay ninguna ficha con ese nombre. <Link href="/#sistemas" style={{ color: "var(--accent)" }}>Volver</Link></p>
        </section>
      </>
    );
  }

  const visibles = proyectos.filter((x) => !x.oculto);
  const i = visibles.findIndex((x) => x.slug === p.slug);
  const siguiente = i >= 0 && visibles.length > 1 ? visibles[(i + 1) % visibles.length] : null;

  const url = p.link ? p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : null;

  return (
    <>
      <Hud />
      <section className="section paper short" style={{ paddingTop: "calc(var(--pad-y) * 3.6)" }}>
        <p className="eyebrow r"><Link href="/#sistemas">← Volver</Link><i>/</i><b>Ficha</b><i>/</i>{p.slug}</p>
        <h1 className="brandmark r d1" style={{ maxWidth: "20ch" }}>{sinEmoji(p.title)}</h1>
        <p className="body r d2" style={{ maxWidth: "60ch" }}>{p.description}</p>
        <div className="r d2" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 26 }}>
          {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn fill">{url}</a>}
        </div>

        {(p.embed?.link || p.image || p.panel) && (
          <div className="browser r d3">
            <div className="bar"><i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} /><span>{url || p.slug}</span></div>
            {p.panel === "eva-stats" ? <EvaStats />
              : p.embed?.link
              ? <iframe src={p.embed.link} title={p.embed.title || p.title} allowFullScreen style={{ height: "60vh", minHeight: 420, background: "#fff" }} />
              : <img src={p.image} alt={p.title} />}
          </div>
        )}
      </section>

      <section className="section short" style={{ minHeight: 0 }}>
        <div className="ficha">
          <div>
            {p.descripcionLarga && <p className="body r" style={{ maxWidth: "62ch", fontSize: "clamp(14px,1.05vw,16px)", color: "var(--fg)" }}>{p.descripcionLarga}</p>}
            {p.items?.length > 0 && (
              <div className="r d1" style={{ marginTop: 22 }}>
                <h2 className="h2">Qué hace</h2>
                <ul className="dash" style={{ listStyle: "none", margin: 0, padding: 0 }}>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            )}
            {p.resumenEjecutivo?.secciones?.map((sec) => (
              <div key={sec.heading} className="r d1" style={{ marginTop: 22 }}>
                <h2 className="h2">{sinEmoji(sec.heading)}</h2>
                <ul className="dash" style={{ listStyle: "none", margin: 0, padding: 0 }}>{sec.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
            {p.conclusiones && (
              <div className="quote r d2" style={{ maxWidth: "62ch", marginTop: 26 }}>
                <header><h3>Resultado</h3></header>
                <p style={{ fontSize: 12.5, color: "var(--fg)" }}>{p.conclusiones}</p>
              </div>
            )}
          </div>
          <aside>
            {p.miAporte && (
              <div className="quote r d1" style={{ maxWidth: "none", marginTop: 0 }}>
                <header><h3>Mi aporte</h3></header>
                <p>{p.miAporte}</p>
              </div>
            )}
            {p.tecnologias && (
              <div className="r d2" style={{ marginTop: 18 }}>
                <div className="eyebrow">Tecnologías</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tecnologias.map((t) => <span key={t.nombre} className="chip"><i className={t.logo} style={{ marginRight: 6, color: "var(--accent)" }} />{t.nombre}</span>)}
                </div>
              </div>
            )}
            {p.screenshots?.length > 0 && (
              <div className="polaroids r d3" style={{ paddingLeft: 0, maxWidth: "none" }}>
                {p.screenshots.map((s, i) => {
                  const src = typeof s === "string" ? s : s.src;
                  const cap = typeof s === "string" ? `captura ${i + 1}` : s.cap;
                  return (
                    <figure key={src} className="polaroid" style={{ width: "min(100%, 260px)" }}>
                      <div className="ph"><img src={src} alt={cap} loading="lazy" decoding="async" style={{ filter: "none" }} /></div>
                      <figcaption>{cap}</figcaption>
                    </figure>
                  );
                })}
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ============ CIERRE: contacto + siguiente ficha ============ */}
      <section className="section paper short ficha-cierre">
        <div className="cierre-grid">
          <div>
            <p className="eyebrow r"><b>¿Tenés un problema parecido?</b></p>
            <h2 className="brandmark r d1" style={{ maxWidth: "18ch" }}>Contame qué pasa hoy y te propongo cómo encararlo.</h2>
            <p className="body r d1" style={{ maxWidth: "52ch" }}>
              No hace falta tener el proyecto definido. Con saber dónde se traba el trabajo y qué datos existen alcanza para una primera charla.
            </p>
            <div className="r d2" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              <a className="btn fill" href={`https://wa.me/543413073307?text=${encodeURIComponent(`Hola Ignacio, vi la ficha de ${sinEmoji(p.title)} y quería consultarte.`)}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" />Escribir por WhatsApp</a>
              <a className="btn" href="mailto:ignaciopenamaria@gmail.com"><i className="fas fa-envelope" />Mandar un mail</a>
            </div>
          </div>
          {siguiente && (
            <Link href={`/proyectos/${siguiente.slug}`} className="siguiente r d2">
              <span className="eyebrow" style={{ margin: 0 }}>Siguiente ficha</span>
              <b>{sinEmoji(siguiente.title)}</b>
              <span className="cap">{siguiente.description.slice(0, 110).replace(/\s+\S*$/, "")}…</span>
              <i className="fas fa-arrow-right" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
