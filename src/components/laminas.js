"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

// ─── Isotipo: barras de datos ────────────────────────────────────────────────
export function Mark({ className = "", style }) {
  return (
    <svg viewBox="0 0 40 44" fill="currentColor" className={className} style={style} aria-hidden="true">
      <rect x="2" y="26" width="8" height="16" />
      <rect x="13" y="16" width="8" height="26" />
      <rect x="24" y="6" width="8" height="36" />
      <path d="M2 14 L16 6 L27 12 L38 2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

// ─── HUD fijo ────────────────────────────────────────────────────────────────
export function Hud() {
  return (
    <div className="hud" aria-hidden="true">
      <Link href="/" className="mark left"><b>ignacio</b><b>peñamaria</b><span>DATA &amp; SYSTEMS STUDIO</span></Link>
      <div className="mark right"><Mark /></div>
    </div>
  );
}

// ─── Comportamientos: revelado, HUD sobre papel, parallax ────────────────────
export function useLaminas() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // revelado al entrar en viewport
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: .18, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".r").forEach((el) => io.observe(el));

    // el HUD cambia de color según lo que haya debajo del logo (secciones claras)
    const hudY = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--pad-y")) + 12 || 40;
    let ticking = false;
    const checkPaper = () => {
      ticking = false;
      // El logo acepta clics, así que se busca la sección que queda debajo de él.
      const capas = document.elementsFromPoint(Math.max(4, window.innerWidth * 0.02), hudY());
      const paper = capas.some((e) => e.matches && e.matches(".section.paper"));
      document.body.classList.toggle("on-paper", !!paper);
      // En las fichas el texto corre por debajo del logo fijo: se aparta al bajar.
      document.body.classList.toggle("scrolled", window.scrollY > 120);
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(checkPaper); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    checkPaper();

    // parallax de los props del hero
    const stage = document.getElementById("stage");
    let cleanupStage = () => {};
    if (stage && !reduce && window.matchMedia("(hover:hover)").matches) {
      const props = [...stage.querySelectorAll(".prop")];
      const base = new Map(props.map((p) => [p, getComputedStyle(p).transform === "none" ? "" : getComputedStyle(p).transform]));
      let raf = null, tx = 0, ty = 0;
      const apply = () => {
        raf = null;
        props.forEach((p) => {
          const d = Number(p.dataset.depth || 20);
          p.style.transform = `translate3d(${(-tx * d).toFixed(2)}px, ${(-ty * d).toFixed(2)}px, 0) ${base.get(p)}`;
        });
      };
      const move = (ev) => {
        const r = stage.getBoundingClientRect();
        tx = (ev.clientX - r.left) / r.width - .5;
        ty = (ev.clientY - r.top) / r.height - .5;
        if (!raf) raf = requestAnimationFrame(apply);
      };
      const leave = () => { tx = ty = 0; if (!raf) raf = requestAnimationFrame(apply); };
      stage.addEventListener("mousemove", move);
      stage.addEventListener("mouseleave", leave);
      cleanupStage = () => { stage.removeEventListener("mousemove", move); stage.removeEventListener("mouseleave", leave); };
    }

    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cleanupStage(); document.body.classList.remove("on-paper"); document.body.classList.remove("scrolled"); };
  }, []);
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
export function Marquee({ items, cream = false }) {
  // Seis copias: la pista mide varias pantallas y el bucle de -50% nunca deja hueco.
  const row = Array.from({ length: 6 }, () => items).flat();
  return (
    <div className={`marquee ${cream ? "cream" : ""}`} aria-hidden="true">
      <div className="track">
        <div className="item">
          {row.map((t, i) => (<span key={i} style={{ display: "contents" }}>{t} <Mark /></span>))}
        </div>
      </div>
    </div>
  );
}

// ─── Recorte con contorno: imagen dentro de un polígono con borde ────────────
const SHAPES = {
  retrato: { vb: "0 0 300 420", d: "M150 18 198 42 214 96 206 150 236 176 262 240 274 330 282 412 20 412 28 330 44 244 72 174 100 148 92 96 106 44Z" },
  pieza:   { vb: "0 0 420 460", d: "M214 8 272 30 286 84 266 128 318 150 352 214 330 268 372 330 336 372 300 452 216 424 150 452 118 376 62 340 92 282 54 232 96 182 74 120 130 96 150 36Z" },
  hoja:    { vb: "0 0 420 420", d: "M210 12 290 44 330 110 366 190 340 268 372 340 300 372 232 408 150 380 78 396 62 320 18 254 56 178 40 104 110 70Z" },
};
export function Cutout({ src, shape = "retrato", id, strokeWidth = 14, position = "xMidYMid slice" }) {
  const s = SHAPES[shape];
  const [, , w, h] = s.vb.split(" ");
  const clipId = `clip-${id}`;
  return (
    <div className="cutout">
      <svg viewBox={s.vb} preserveAspectRatio="xMidYMax meet">
        <defs><clipPath id={clipId}><path d={s.d} /></clipPath></defs>
        <image href={src} width={w} height={h} preserveAspectRatio={position} clipPath={`url(#${clipId})`} />
        <path className="stroke" style={{ strokeWidth }} d={s.d} />
      </svg>
    </div>
  );
}

// ─── Herramientas: nombre completo con punto de color ────────────────────────
export const TOOLS = {
  py:  ["Python", "#FFD43B"], pbi: ["Power BI", "#F2C811"], sql: ["SQL", "#5AA9E6"], api: ["FastAPI", "#2fd3b3"],
  pg:  ["PostgreSQL", "#8fb8ea"], re: ["React", "#61DAFB"], dk: ["Docker", "#5eb1ff"], xl: ["Excel", "#4fd08a"],
  n8n: ["n8n", "#ff6d9a"], wa: ["WhatsApp API", "#25D366"], ts: ["TypeScript", "#7cb8ff"], ard: ["Arduino", "#3fd6cf"],
  nd:  ["Node.js", "#8cd47a"], rd: ["Redis", "#ff7b6b"], mp: ["Mercado Pago", "#7ac2ff"], dax: ["DAX", "#F2C811"],
  pd:  ["pandas", "#c9a4ff"], rn: ["React Native", "#61DAFB"], nx: ["Next.js", "#dcdcdc"], pq: ["Power Query", "#F2C811"],
};
export function Tools({ keys, cols }) {
  return (
    <ul className="toollist" style={cols ? { columns: cols } : undefined}>
      {keys.map((k) => { const [name, color] = TOOLS[k] || [k, "#9A9A9A"]; return <li key={k}><i style={{ background: color }} />{name}</li>; })}
    </ul>
  );
}

// ─── Mock de chat de WhatsApp (el bot es real) ───────────────────────────────
export function WhatsAppMock({ mensajes, phone }) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#0b141a", color: "#e9edef" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "#1f2c34" }}>
        <div style={{ width: 26, height: 26, borderRadius: 999, background: "#00a884", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 800, color: "#fff" }}>E</div>
        <div style={{ lineHeight: 1.15 }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>Eva · Asistente de la clínica</div>
          <div style={{ fontSize: 9, opacity: .6 }}>en línea · {phone}</div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "hidden", padding: "8px 10px", display: "flex", flexDirection: "column", gap: 6 }}>
        {mensajes.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth: "84%", padding: "5px 9px", borderRadius: 8, fontSize: 10.5, lineHeight: 1.35, whiteSpace: "pre-line", background: m.from === "user" ? "#005c4b" : "#202c33" }}>{m.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Marcas de agua de datos ─────────────────────────────────────────────────
export function WmGraph({ style }) {
  const nodes = [[20, 70], [60, 30], [100, 60], [140, 25], [90, 110], [150, 95], [40, 120]];
  const edges = [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [3, 5], [0, 4], [6, 0], [6, 4]];
  return (
    <svg className="wm" style={style} viewBox="0 0 170 140" fill="currentColor" aria-hidden="true">
      {edges.map(([a, b], i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeWidth="2" />)}
      {nodes.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" />)}
    </svg>
  );
}
export function WmBars({ style }) {
  const bars = [30, 55, 42, 70, 62, 88, 76, 96];
  return (
    <svg className="wm" style={style} viewBox="0 0 220 110" fill="currentColor" aria-hidden="true">
      {bars.map((h, i) => <rect key={i} x={10 + i * 26} y={104 - h} width="16" height={h} rx="2" />)}
    </svg>
  );
}

// ─── Familia de dispositivos: monitor atrás, notebook, tablet y celular adelante ──
export function DeviceStack({ monitor, laptop, tablet, phone, ring = true }) {
  return (
    <div className="devices">
      {ring && <span className="devices-ring" aria-hidden="true" />}
      {monitor && (
        <div className="dev monitor">
          <div className="scr"><img loading="lazy" decoding="async" src={monitor.img} alt={monitor.alt} /></div>
          <div className="neck" /><div className="foot" />
        </div>
      )}
      {tablet && <div className="dev tablet"><div className="scr"><img loading="lazy" decoding="async" src={tablet.img} alt={tablet.alt} /></div></div>}
      {laptop && <div className="dev laptop"><div className="scr"><img loading="lazy" decoding="async" src={laptop.img} alt={laptop.alt} /></div><div className="base" /></div>}
      {phone && <div className="dev phone"><div className="scr"><img loading="lazy" decoding="async" src={phone.img} alt={phone.alt} /></div></div>}
    </div>
  );
}

// ─── Ilustraciones de los divisores ──────────────────────────────────────────
// Red de sistemas: lo que se muestra en el sitio, conectado a un centro (datos).
export function SystemsGraph() {
  const nodes = [
    ["ERP", 200, 60], ["Clínica", 360, 130], ["Bot", 380, 300], ["Power BI", 220, 380], ["Reporting", 60, 300], ["App planta", 40, 130],
  ];
  const cx = 210, cy = 220;
  return (
    <svg viewBox="0 0 440 440" className="illus" aria-hidden="true">
      <defs>
        <pattern id="gridp" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="currentColor" strokeOpacity=".12" /></pattern>
      </defs>
      <circle cx={cx} cy={cy} r="190" fill="url(#gridp)" stroke="currentColor" strokeOpacity=".25" strokeDasharray="4 6" />
      {nodes.map(([n, x, y]) => <line key={n} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--accent)" strokeWidth="2" strokeOpacity=".8" />)}
      {nodes.map(([n, x, y], i) => (
        <g key={n}>
          <circle cx={x} cy={y} r="30" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2.5" />
          <text x={x} y={y + 4} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize={n.length > 7 ? 9 : 11} fill="currentColor">{n}</text>
        </g>
      ))}
      <circle cx={cx} cy={cy} r="46" fill="var(--accent)" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="13" fill="#fff">DATOS</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontFamily="var(--font-type)" fontSize="8" letterSpacing="1.5" fill="#fff" fillOpacity=".8">POSTGRES</text>
    </svg>
  );
}

// Reporte para dirección: barras mensuales, línea de objetivo y semáforo.
export function ReportChart() {
  const bars = [52, 61, 48, 70, 66, 84, 78, 92, 88, 104, 97, 116];
  const target = 90;
  const W = 480, H = 320, pad = 40, bw = 22, gap = (W - pad * 2 - bw * 12) / 11;
  const y = (v) => H - pad - v * 2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="illus" aria-hidden="true">
      {[0, 40, 80, 120].map((g) => <line key={g} x1={pad} y1={y(g)} x2={W - pad} y2={y(g)} stroke="currentColor" strokeOpacity=".15" />)}
      {bars.map((v, i) => {
        const x = pad + i * (bw + gap);
        const ok = v >= target;
        return <rect key={i} x={x} y={y(v)} width={bw} height={v * 2} rx="3" fill={ok ? "var(--accent)" : "currentColor"} fillOpacity={ok ? 1 : .35} />;
      })}
      <line x1={pad} y1={y(target)} x2={W - pad} y2={y(target)} stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 5" />
      <text x={pad} y={y(target) - 8} fontFamily="var(--font-type)" fontSize="10" letterSpacing="1.5" fill="var(--accent)">OBJETIVO</text>
      <g transform={`translate(${pad}, 14)`}>
        <text fontFamily="var(--font-type)" fontSize="10" letterSpacing="1.5" fill="currentColor" fillOpacity=".7">RESULTADO MENSUAL · USD</text>
      </g>
      <g transform={`translate(${W - pad - 190}, 10)`}>
        {[["var(--accent)", 1, "sobre objetivo"], ["currentColor", .35, "bajo objetivo"]].map(([c, o, t], i) => (
          <g key={t} transform={`translate(${i * 100}, 0)`}><circle cx="5" cy="5" r="5" fill={c} fillOpacity={o} /><text x="14" y="9" fontFamily="var(--font-type)" fontSize="8.5" fill="currentColor" fillOpacity=".7">{t}</text></g>
        ))}
      </g>
      {["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
        <text key={i} x={pad + i * (bw + gap) + bw / 2} y={H - pad + 16} textAnchor="middle" fontFamily="var(--font-type)" fontSize="9" fill="currentColor" fillOpacity=".6">{m}</text>
      ))}
    </svg>
  );
}

// ─── Panel de estadísticas del bot (recreado, datos ficticios) ───────────────
// Reconstrucción del tablero "Eva" del sistema real, con números inventados:
// no se publica actividad de la clínica.
const EVA_DIA = [46, 52, 38, 61, 44, 12, 0, 58, 49, 63, 41, 57, 36, 15];
const EVA_TOT = [96, 104, 88, 121, 97, 34, 6, 118, 102, 127, 93, 115, 84, 38];

export function EvaStats() {
  const maxDia = Math.max(...EVA_TOT);
  const estrellas = [[5, 71], [4, 19], [3, 6], [2, 3], [1, 1]];
  const origen = [["Eva", 742, "eva"], ["Recepción", 986, "otro"], ["Sobreturno", 82, "otro"]];
  const maxOrigen = 986;
  const espec = [["Clínica Médica", 264], ["Pediatría", 152], ["Cardiología", 118], ["Dermatología", 96], ["Otras", 112]];
  return (
    <div className="evastats">
      <header className="es-top">
        <span className="es-marca"><i /> Eva Admin</span>
        <nav>{["Agenda", "Pacientes", "Estadísticas", "Caja", "Historias clínicas"].map((t) => (
          <span key={t} className={t === "Estadísticas" ? "on" : ""}>{t}</span>
        ))}</nav>
      </header>

      <div className="es-cuerpo">
        <div className="es-tabs">
          {["General", "Eva", "Obras sociales"].map((t) => <span key={t} className={t === "Eva" ? "on" : ""}>{t}</span>)}
          <span className="es-periodo">Últimos 30 días</span>
        </div>

        <div className="es-hero">
          <div>
            <span className="et">Turnos agendados por Eva</span>
            <div className="cifra">742 <small>turnos en el período</small></div>
            <span className="pie">de 1.810 turnos de la clínica, sin que intervenga recepción</span>
          </div>
          <div className="pct"><b>41 %</b><span>del total de reservas</span></div>
        </div>

        <div className="es-kpis">
          {[["Atendidos", "693", "consultas completadas"],
            ["Asistencia", "94 %", "de los pacientes de Eva vinieron"],
            ["No vinieron", "44", "6 % de ausentismo"],
            ["Fuera de horario", "118", "16 % con la clínica cerrada"]].map(([t, v, s]) => (
            <div key={t} className="es-kpi"><span className="et">{t}</span><b>{v}</b><span className="sub">{s}</span></div>
          ))}
        </div>

        <div className="es-grid">
          <section className="es-panel">
            <h4>Quién reservó el turno</h4>
            {origen.map(([t, v, tipo]) => (
              <div key={t} className="es-fila">
                <span className="lb">{t}</span>
                <span className="track"><i className={tipo} style={{ width: `${(v / maxOrigen) * 100}%` }} /></span>
                <b>{v}</b>
              </div>
            ))}
            <h4 style={{ marginTop: 14 }}>Especialidades que más agenda</h4>
            {espec.map(([t, v]) => (
              <div key={t} className="es-fila">
                <span className="lb">{t}</span>
                <span className="track"><i className="eva suave" style={{ width: `${(v / 264) * 100}%` }} /></span>
                <b>{v}</b>
              </div>
            ))}
          </section>

          <section className="es-panel">
            <h4>Turnos de Eva por día</h4>
            <div className="es-dias">
              {EVA_DIA.map((v, i) => (
                <span key={i} className="col" title={`${v} de ${EVA_TOT[i]}`}>
                  <i className="tot" style={{ height: `${(EVA_TOT[i] / maxDia) * 100}%` }} />
                  <i className="eva" style={{ height: `${(v / maxDia) * 100}%` }} />
                </span>
              ))}
            </div>
            <div className="es-leyenda"><span><i className="eva" />Eva</span><span><i className="tot" />total del día</span></div>

            <h4 style={{ marginTop: 14 }}>Valoración de los pacientes</h4>
            <div className="es-rating">
              <div className="nota"><b>4,5</b><span>512 valoraciones</span></div>
              <div className="barras">
                {estrellas.map(([e, pc]) => (
                  <div key={e} className="es-fila mini">
                    <span className="lb">{e} ★</span>
                    <span className="track"><i className="oro" style={{ width: `${pc}%` }} /></span>
                    <b>{pc} %</b>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <p className="es-nota">Recreación del tablero del sistema real · todos los números son de ejemplo</p>
      </div>
    </div>
  );
}
