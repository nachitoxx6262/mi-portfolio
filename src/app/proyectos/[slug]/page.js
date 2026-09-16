"use client";
import { use, useEffect } from "react";
import Link from "next/link";
import proyectos from "../../../data/proyectos";
import { Hud, useLaminas, EvaStats } from "@/components/laminas";

const sinEmoji = (t) => t.replace(/^[^\p{L}\p{N}]+/u, "").trim();

export default function ProyectoDetalle({ params }) {
  useLaminas();
  useEffect(() => {
    document.body.classList.add("ficha-page");
    return () => document.body.classList.remove("ficha-page");
  }, []);
  const { slug } = use(params);
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
                      <div className="ph"><img src={src} alt={cap} style={{ filter: "none" }} /></div>
                      <figcaption>{cap}</figcaption>
                    </figure>
                  );
                })}
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
