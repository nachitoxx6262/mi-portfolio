"use client";
import Link from "next/link";
import { Hud, useLaminas, Marquee, Tools, WhatsAppMock, WmGraph, WmBars, Mark, DeviceStack, SystemsGraph, ReportChart } from "../components/laminas";

// ─── Datos ───────────────────────────────────────────────────────────────────

const waMessages = [
  { from: "user", text: "Hola" },
  { from: "bot",  text: "¡Hola, Juan! Soy Eva, la asistente virtual de la clínica. ¿En qué puedo ayudarte?\n1. Sacar un turno\n2. Consultas generales\n3. Cancelar un turno" },
  { from: "user", text: "1" },
  { from: "bot",  text: "¿Qué especialidad necesitás?\n1. Clínica Médica\n2. Cardiología\n3. Traumatología" },
  { from: "user", text: "1" },
  { from: "bot",  text: "Horarios disponibles hoy:\n1. 12:00\n2. 12:15\n3. 12:30" },
  { from: "user", text: "1" },
  { from: "bot",  text: "✅ Turno confirmado\nClínica Médica · hoy 12:00\nTe esperamos 10 minutos antes." },
];

const proyectos = [
  {
    id: "p01", palette: "p-carmetal", paper: false, reverse: false,
    n: "Proyecto 01", sector: "Metalúrgica", chip: "ERP + app de operarios",
    brand: <>CARMETAL <span className="alt">ERP</span></>,
    h2: "De un cuello de botella en cotizaciones a un ERP que crece módulo a módulo",
    body: <>En <strong>CARMETAL</strong> la información estaba repartida en mails, planillas y papel, y cotizar dependía de un solo software y de una sola persona. El ERP nació para <strong>automatizar y centralizar la información de las cotizaciones</strong>, y desde ahí se fue expandiendo módulo a módulo. Hoy la empresa usa a diario lo que se encuentra en producción, mientras se sigue sumando funcionalidad.</>,
    bullets: [
      "Cotización automática desde el plano DXF, con tiempo de corte calibrado contra la máquina: de una tarde por presupuesto a minutos",
      "Módulos que se sumaron después: producción, stock, compras, remitos, facturación electrónica y tablero de dirección",
      "App móvil desarrollada en paralelo: los operarios cargan desde el taller y el supervisor controla en vivo qué se está haciendo",
    ],
    tools: ["api", "pg", "re", "ts", "rn", "dk"],
    kpis: [["31", "módulos"], ["383", "endpoints"], ["891", "tests"]],
    estado: "En producción · desde mayo 2026",
    cliente: "Metalúrgica de corte láser y plegado", rol: "Relevamiento, diseño y desarrollo completo",
    slug: "carmetal-erp", site: "https://carmetal.cuneusdata.cloud",
    devices: {
      monitor: { img: "/proyectos/carmetal/nesting-erp.webp", alt: "Cotización técnica con nesting por chapa" },
      laptop: { img: "/proyectos/carmetal/hoja-tecnica.webp", alt: "Hoja técnica de producción" },
      tablet: { img: "/proyectos/carmetal/orden-produccion.webp", alt: "Orden de producción" },
      phone: { img: "/proyectos/carmetal/app-chapa.webp", alt: "App de operarios, pantalla de chapa" },
    },
    mocks: [],
  },
  {
    id: "p02", palette: "p-eva", paper: true, reverse: true,
    n: "Proyecto 02", sector: "Salud", chip: "Healthtech",
    brand: <><span className="alt">Eva</span> · Gestión clínica</>,
    h2: "De un bot de WhatsApp a la plataforma completa de la clínica",
    body: <>En la clínica una recepcionista llevaba <strong>cinco conversaciones a la vez</strong>, cada una con una consulta distinta, mientras el mostrador se llenaba de pacientes esperando que la miraran. Y de noche no contestaba nadie. <strong>Eva</strong> nació como un bot de WhatsApp para sacar turno sin llamar, y enseguida quedó claro que necesitaba de dónde leer: la agenda vivía en un cuaderno y la caja en una planilla. Desde ahí creció hasta ser el sistema donde trabajan <strong>recepción, médicos y administración</strong>.</>,
    bullets: [
      "El bot atiende a toda hora: reconoce al paciente, ofrece los horarios reales del día y deja el turno reservado sin que intervenga nadie",
      "Alrededor del bot: agenda por médico, historia clínica, caja con arqueo y liquidación, cupos por obra social",
      "Multi-clínica: cada clínica en su propio subdominio, con los datos aislados por la base de datos",
    ],
    tools: ["api", "pg", "re", "ts", "n8n", "wa"],
    kpis: [["24/7", "atención"], ["177", "endpoints"], ["190", "tests"]],
    estado: "En producción · mantenimiento mensual",
    cliente: "Clínica privada", rol: "Diseño, desarrollo, bot y mantenimiento",
    slug: "bot-agenda-medica", site: "https://asistentevirtualeva.cloud", wa: "https://wa.me/543417199019",
    mocks: [
      { cls: "free", style: { width: "92%", left: "4%", top: "50%", transform: "translateY(-50%)" }, img: "/proyectos/eva/eva-celu.webp", label: "" },
    ],
  },
  {
    oculto: true,
    id: "p03", palette: "p-hotel", paper: false, reverse: false,
    n: "Proyecto 03", sector: "Hotelería", chip: "SaaS",
    brand: <>Sistema <span className="alt">Hotelero</span></>,
    h2: "Reservas, habitaciones y cobro online",
    body: <>Gestión hotelera multi-tenant: cada hotel vive aislado en la misma base gracias a <strong>Row Level Security</strong> en PostgreSQL. El aislamiento lo hace la base, no el código.</>,
    bullets: ["Habitaciones con estado en tiempo real, reservas, huéspedes y empresas", "Planes de tarifas y cobro online con Mercado Pago", "Facturación electrónica ARCA integrada"],
    tools: ["api", "pg", "re", "mp", "dk"],
    kpis: null,
    estado: "En producción",
    cliente: "Hotel independiente", rol: "Diseño y desarrollo",
    slug: "sistema-hotelero", site: "https://hotel.cuneusdata.com/",
    mocks: [
      { cls: "shot", style: { width: "70%", left: "0", top: "0", transform: "rotate(-2deg)" }, img: "/proyectos/hotel.webp", label: "PANEL DEL HOTEL" },
    ],
    card: { title: "Reserva · ejemplo", kind: "rows", style: { right: "0", bottom: "4%", width: "44%" },
      items: [["Habitación", "204 · doble"], ["Check-in", "vie 12/09"], ["Check-out", "lun 15/09"], ["Cobro", "Mercado Pago · aprobado"], ["Factura", "ARCA · emitida"]] },
  },
  {
    oculto: true,
    id: "p04", palette: "p-comercial", paper: true, reverse: true,
    n: "Proyecto 04", sector: "Ventas", chip: "Comercial",
    brand: <>Sistema <span className="alt">Comercial</span></>,
    h2: "Clientes, pedidos y comisiones",
    body: <>Plataforma para equipos de ventas, usada en operación real: la empresa ve la cartera completa y cada vendedor ve su rendimiento sin esperar un informe.</>,
    bullets: ["Cartera de clientes y pedidos por período, cliente y zona", "Comisiones automáticas, sin discusiones a fin de mes", "Dashboards de rendimiento por vendedor y clientes a reactivar"],
    tools: ["re", "nx", "sql", "pbi"],
    kpis: null,
    estado: "En producción",
    cliente: "Equipo de ventas", rol: "Diseño y desarrollo",
    slug: "sistema-comercial", site: "https://www.cuneusdata.com/cuneus-comercial",
    mocks: [
      { cls: "shot", style: { width: "68%", left: "0", top: "0", transform: "rotate(-1.5deg)" }, img: "/proyectos/comercial.webp", label: "SISTEMA COMERCIAL" },
    ],
    card: { title: "Cartera · segmentación", kind: "rows", light: true, style: { right: "2%", bottom: "2%", width: "46%" },
      items: [["Activos", "compraron en los últimos 90 días"], ["Inactivos", "sin pedidos en el período"], ["A reactivar", "alto valor histórico, hoy quietos"], ["Comisión", "calculada por venta y vendedor"]] },
  },
  {
    oculto: true,
    id: "p05", palette: "p-resto", paper: true, reverse: true,
    n: "Proyecto 05", sector: "Gastronomía", chip: "En desarrollo",
    brand: <>Sistema <span className="alt">Restaurant</span></>,
    h2: "Mesas, pedidos y comandas a cocina",
    body: <>Operación del salón sin papelitos: el pedido se carga en la mesa y la comanda sale impresa en cocina. Desplegado en un restaurante y en desarrollo activo.</>,
    bullets: ["Pedidos por mesa con notas especiales por plato", "Comandas impresas en térmica por un agente local que se reconecta solo", "Caja con apertura y cierre, multi-tenant"],
    tools: ["api", "pg", "rd", "re", "py"],
    kpis: null,
    estado: "Desplegado · en desarrollo",
    cliente: "Restaurante", rol: "Diseño y desarrollo",
    slug: "sistema-restaurant",
    mocks: [
      { cls: "shot", style: { width: "32%", left: "6%", top: "0", transform: "rotate(-4deg)", background: "#fff" }, img: "/proyectos/restaurant/comanda.webp", label: "COMANDA" },
    ],
    card: { title: "Pedido #42 · Mesa 3", kind: "rows", light: true, style: { right: "4%", top: "10%", width: "52%" },
      items: [["2×", "Milanesa napolitana · jugoso, sin papas"], ["1×", "Empanadas (3 u.)"], ["1×", "Bife de chorizo · a punto"], ["Cocina", "impreso 19:24"]] },
  },
];

const metodo = [
  { n: "01", t: "La pregunta", p: "Antes de mirar un solo dato: qué decisión hay que tomar, o qué se sospecha que está pasando. Sin objetivo, un informe es una pila de números prolijos que nadie usa." },
  { n: "02", t: "Relevar", p: "Qué números existen hoy, dónde viven y quién los carga. Casi siempre están, pero repartidos entre planillas, sistemas y la cabeza de alguien." },
  { n: "03", t: "Acordar", p: "Un primer resultado hecho a mano, para mirarlo juntos: si responde la pregunta, qué le falta y si se entiende sin alguien explicándolo al lado." },
  { n: "04", t: "Automatizar", p: "Con el contenido ya firme, se automatiza lo repetitivo: juntar los datos, cruzarlos y generar la salida. Deja de depender de que alguien se acuerde." },
  { n: "05", t: "Sostener", p: "Lo que se consulta seguido pasa a un tablero; el resto se rehace cuando cambian las preguntas. Un análisis que nadie discute dejó de servir." },
];

// Poner `oculto: true` en un proyecto lo saca de la home sin borrar nada:
// su ficha sigue existiendo, solo deja de estar enlazada.
const visibles = proyectos.filter((p) => !p.oculto);

const certificados = [
  { a: "2025", t: "Power BI", o: "EducaciónIT · 18 horas", img: "/certificados/power-bi-educacionit.webp" },
  { a: "2025", t: "Bases de datos y SQL", o: "EducaciónIT · 18 horas", img: "/certificados/sql-educacionit.webp" },
  { a: "CERT", t: "Full Stack Web Developer", o: "Henry · JavaScript, React, Node y SQL", img: "/certificados/fullstack-henry.webp" },
];

// Cuando el PDF esté en /public, poner su ruta acá y vuelve a aparecer el botón.
const CV_URL = "/CV_Ignacio_Penamaria.pdf";

const servicios = [
  { n: "01", t: "Informes financieros para directorio", p: "Resultado mensual, rentabilidad, cuentas por cobrar vencidas y cumplimiento de objetivos, con metas y semáforos. Cada área carga sus números y el informe se arma solo.", e: "Excel + PDF · tablero · hoja de revisión" },
  { n: "02", t: "Análisis de ventas", p: "Rendimiento por vendedor, cliente, producto y zona; cartera activa e inactiva; estacionalidad; comisiones y oportunidades de reactivación. Con recomendaciones concretas.", e: "Informe mensual · tablero · clientes a recuperar" },
  { n: "03", t: "Tableros ejecutivos en Power BI", p: "KPIs con objetivo y desvío, comparación mensual e interanual, cuadrantes de eficiencia y alertas. Modelado de datos y DAX sobre las fuentes que la empresa ya tiene.", e: "Tablero publicado · página ejecutiva" },
  { n: "04", t: "Automatización de reportes", p: "Scripts que consolidan planillas de distintas áreas, validan lo cargado, avisan qué falta y generan el informe en Excel o PDF. Se corren con doble clic o solos cada mes.", e: "Consolidador + instructivo" },
  { n: "05", t: "Calidad y conciliación de datos", p: "Duplicados, inconsistencias y conciliación entre sistemas y planillas, con reglas de validación para que el error no vuelva a entrar.", e: "Hallazgos con prioridad · plan de corrección" },
  { n: "06", t: "Documentos ejecutivos", p: "Relevamiento de procesos, resúmenes funcionales de sistemas, propuestas y presupuestos por etapa. Escritos para que la dirección decida.", e: "PDF o web · alcance · plan de trabajo" },
];

const dashboards = [
  { slug: "dashboard-eficiencia-productiva", file: "eficiencia_productiva.pbix", img: "/proyectos/Alimentos_sur.webp", cap: "Eficiencia productiva y finanzas · Power BI" },
  { slug: "stock-logistica", file: "northwind_stock.pbix", img: "/proyectos/northwind_analytics.webp", cap: "Northwind · ejercicio con datos de muestra · Power BI" },
];

// ─── Página ──────────────────────────────────────────────────────────────────

export default function Home() {
  useLaminas();

  return (
    <>
      <Hud />

      {/* ============ 01 · PORTADA ============ */}
      <section className="section hero" id="top">
        <WmGraph style={{ width: 420, top: -60, left: -80, transform: "rotate(14deg)" }} />
        <WmBars style={{ width: 460, bottom: -60, right: -70, transform: "rotate(-10deg)" }} />

        <div className="stage" id="stage">
          <svg className="wire" viewBox="0 0 1000 500" preserveAspectRatio="none" aria-hidden="true">
            <path d="M120 260 C 260 420, 420 430, 540 330 S 820 150, 960 220" />
            <path d="M180 300 C 300 200, 430 210, 520 300" />
          </svg>

          <div className="prop p1" data-depth="26"><div className="box"><span className="kpi">891<small>tests en producción</small></span><span className="lbl">CARMETAL ERP</span></div></div>
          <div className="prop p2" data-depth="42"><div className="box" style={{ color: "#1a1a1a" }}><span className="kpi" style={{ color: "#1a1a1a" }}>24/7<small style={{ color: "#444" }}>WhatsApp</small></span><span className="lbl" style={{ color: "#333" }}>EVA</span></div></div>
          <div className="prop p3" data-depth="18"><div className="box"><pre>{`SELECT vendedor, SUM(total)
FROM pedidos
GROUP BY 1 ORDER BY 2 DESC;`}</pre><span className="lbl">SQL</span></div></div>
          <div className="prop p4" data-depth="34"><div className="box"><pre style={{ color: "#EFDEC6" }}>{`MoM % =
DIVIDE(
  [Ventas] - [Ventas PM],
  [Ventas PM])`}</pre><span className="lbl">DAX</span></div></div>

          <div className="title">
            <div className="guides">
              <span className="tick tl">ANALYTICS</span>
              <span className="tick br">2026</span>
              <h1 className="display hero solid r" style={{ margin: 0 }}>Data<br />Portfolio</h1>
            </div>
          </div>
          <span className="sticker r d2">IGNACIO PEÑAMARIA</span>
        </div>

        <p className="lead r d2">Construyo los sistemas que una metalúrgica y una clínica privada usan todos los días, y los informes con los que se decide.</p>
        <div className="ctas r d3">
          <a href="#sistemas" className="btn fill">Ver los sistemas</a>
          <a href="#reporting" className="btn">Reporting</a>
        </div>
      </section>

      <Marquee items={["Sistemas en producción", "Reporting & Scripting", "Análisis de ventas", "Power BI"]} />

      {/* ============ 02 · SOBRE MÍ ============ */}
      <section className="section paper about" id="about">
        <div className="portrait">
          <figure className="photo r">
            <img loading="lazy" decoding="async" src="/avatar.webp" alt="Ignacio Peñamaria" />
            <figcaption>Ignacio · Carcarañá, 2026</figcaption>
          </figure>
          <span className="sticker" style={{ position: "absolute", bottom: "10%", right: "2%", transform: "rotate(-2deg)" }}>Hecho en Carcarañá</span>
        </div>

        <div>
          <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
            <div className="guides" style={{ width: "100%" }}>
              <h1 className="r">Hola! Soy <em>Ignacio</em> Peñamaria</h1>
            </div>
            <div className="stamp"><span>CARCARAÑÁ</span><span>SANTA FE · AR</span></div>
          </div>

          <div className="cols" style={{ marginTop: 14 }}>
            <div className="r d1">
<p className="body" style={{ color: "#3a3a3a" }}>
  Desarrollador fullstack con foco en datos. Desde <strong>Cuneus Data Studio</strong> construyo sistemas que se usan todos los días: el ERP y la app de operarios de una metalúrgica, la plataforma de una clínica con su bot de WhatsApp, un hotel, un equipo de ventas. Y cuando el dato nace en un sensor, también lo integro.
</p>
<p className="body" style={{ color: "#3a3a3a" }}>
  Empiezo cada proyecto en el lugar donde pasa el trabajo: la planta, la recepción, el mostrador. De ahí salen las reglas que después van al código. En paralelo, <strong>trabajo como analista de datos</strong>: tableros, modelos y los informes con los que las áreas y la dirección deciden.
</p>
            </div>

            <div className="r d2">
              <h2 className="h2">Experiencia</h2>
              <div className="tl">
                <span className="yr">2026<br />HOY</span>
                <span><span className="rol">Analista de ventas</span><br /><span className="org">Exintrader · importadora de autopartes eléctricas</span></span>
                <span className="note">Segmentación y reactivación de clientes, costos FOB, órdenes de compra y contacto con proveedores del exterior.</span>
              </div>
              <div className="tl">
                <span className="yr">2024<br />HOY</span>
                <span><span className="rol">Cuneus Data Studio</span><br /><span className="org">Fundador · sistemas, reporting y automatización</span></span>
                <span className="note">ERP metalúrgico, gestión clínica, hotel y comercial en producción.</span>
              </div>
              <div className="tl">
                <span className="yr green">2025</span>
                <span><span className="rol">Responsable comercial y analista de datos</span><br /><span className="org">Grupo Puppetti · ene a oct</span></span>
                <span className="note">Coordinación de 30 vendedores, ventas y preventa, y tablero de ventas en Power BI para dirección.</span>
              </div>
              <div className="tl">
                <span className="yr green">2026</span>
                <span><span className="rol">CARMETAL · ERP y app de operarios</span><br /><span className="org">Metalúrgica de corte láser y plegado</span></span>
                <span className="note">Cotizador, producción, operarios, facturación y tablero de dirección, entregados por etapas.</span>
              </div>
            </div>

            <div className="r d3">
              <h2 className="h2">Estudios <span className="type" style={{ fontSize: 9, color: "var(--accent)" }}>ESP / ENG</span></h2>
              <div className="tl">
                <span className="yr green">HOY</span>
                <span><span className="rol">Lic. en Ciencia de Datos</span><br /><span className="org">Universidad Siglo 21 · estudiante avanzado</span></span>
              </div>
              {certificados.map((c) => (
                <div className="tl" key={c.t}>
                  <span className="yr">{c.a}</span>
                  <span>
                    <a className="rol cert" href={c.img} target="_blank" rel="noopener noreferrer">{c.t} <i className="fas fa-arrow-up-right-from-square" /></a><br />
                    <span className="org">{c.o}</span>
                  </span>
                </div>
              ))}
              <h2 className="h2" style={{ marginTop: 18 }}>Enfoque</h2>
              <ul className="bullets"><li>Sistemas en producción</li><li>Reporting para directorio</li><li>Análisis de ventas</li><li>Automatización</li></ul>
              <h2 className="h2" style={{ marginTop: 18 }}>Herramientas</h2>
              <Tools keys={["py", "pbi", "dax", "sql", "api", "pg", "re", "ts", "dk", "xl"]} />
            </div>
          </div>

          <div className="polaroids r d4">
            <figure className="polaroid"><div className="ph"><img loading="lazy" decoding="async" src="/proyectos/Alimentos_sur.webp" alt="Tablero ejecutivo" /></div><figcaption>tablero_v2.pbix</figcaption></figure>
            <figure className="polaroid"><div className="ph"><img loading="lazy" decoding="async" src="/proyectos/carmetal/cockpit.webp" alt="Cockpit de producción" /></div><figcaption>planta</figcaption></figure>
            <figure className="polaroid"><div className="ph"><img loading="lazy" decoding="async" src="/proyectos/hotel.webp" alt="Panel del hotel" /></div><figcaption>recepción</figcaption></figure>
          </div>
        </div>
      </section>

      {/* ============ 03 · DIVISOR SISTEMAS ============ */}
      <section className="section divider" id="sistemas">
        <WmGraph style={{ width: 380, bottom: "12%", left: -80, transform: "rotate(24deg)" }} />
        <div className="txt">
          <div className="guides">
            <h2 className="display outline r">Sistemas <span className="tiny">en</span></h2>
            <h2 className="display solid r d1">producción</h2>
          </div>
          <div><span className="sticker r d2">software a medida, en uso diario</span></div>
        </div>
        <div className="fig r d1"><SystemsGraph /></div>
        <nav className="tabs">
          {visibles.map((p) => <a key={p.id} className="tab" href={`#${p.id}`}>{p.n.replace("Proyecto ", "")} · {p.sector}</a>)}
        </nav>
      </section>

      {/* ============ PROYECTOS ============ */}
      {visibles.map((p) => (
        <section key={p.id} className={`section project ${p.paper ? "paper" : ""} ${p.reverse ? "reverse" : ""} ${p.palette}`} id={p.id}>
          <div className="panel">
            <span className="chip r">{p.chip}</span>
            <p className="eyebrow r d1"><b>{p.n}</b><i>/</i>{p.sector}</p>
            <h2 className="brandmark r d1">{p.brand}</h2>
            <h3 className="h2 r d2">{p.h2}</h3>
            <p className="body r d2">{p.body}</p>
            {p.bullets && <ul className="bullets pbul r d2">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            <div className="tools-row r d3">
              <div className="lbl">Stack</div>
              <Tools keys={p.tools} />
            </div>
            <div className="links r d3">
              {p.slug && <Link href={`/proyectos/${p.slug}`} className="btn fill">Ver ficha</Link>}
              {p.wa && <a href={p.wa} target="_blank" rel="noopener noreferrer" className="btn"><i className="fab fa-whatsapp" /> Probar el bot</a>}
              {p.site && <a href={p.site} target="_blank" rel="noopener noreferrer" className="btn">{p.site.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a>}
            </div>
            <div className="quote r d4">
              <header><h3>Ficha</h3><span className="stars">{p.estado}</span></header>
              {p.kpis && <div className="kpis">{p.kpis.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>}
              <div className="meta"><span>Cliente</span><b>{p.cliente}</b><span>Rol</span><b>{p.rol}</b></div>
            </div>
          </div>
          <div className="visual">
            {p.devices && <div className="r d1"><DeviceStack {...p.devices} ring={false} /></div>}
            {p.card && <DataCard {...p.card} />}
            {p.mocks.map((m, i) => (
              <div key={i} className={`mock r d${(i % 3) + 1} ${m.cls || ""}`} style={m.style}>
                {m.chat ? <WhatsAppMock mensajes={waMessages} phone="+54 341 719-9019" />
                  : m.laptop ? <><div className="screen"><img loading="lazy" decoding="async" src={m.img} alt={m.label} /></div><div className="base" /><small>{m.label}</small></>
                  : m.img ? <><img loading="lazy" decoding="async" src={m.img} alt={m.label} /><small>{m.label}</small></>
                  : <>{m.text}<small>{m.small}</small></>}
              </div>
            ))}
          </div>
        </section>
      ))}

      <Marquee cream items={["Reporting & Scripting", "Informes para directorio", "Análisis de ventas", "Automatización"]} />

      {/* ============ DIVISOR REPORTING ============ */}
      <section className="section divider" id="reporting">
        <div className="txt">
          <div className="guides">
            <h2 className="display solid r" style={{ margin: 0 }}>Reporting</h2>
          </div>
          <p className="body r d1" style={{ marginTop: 16, maxWidth: "42ch" }}>
            Los números que la empresa <strong>ya tiene</strong>, ordenados para que alguien pueda decidir con ellos. No hace falta cambiar de sistema: se empieza con las planillas y las bases que hay.
          </p>
          <div><span className="sticker r d2">dirección · comercial · producción · calidad de datos</span></div>
        </div>
        <div className="fig r d1"><ReportChart /></div>
      </section>

      {/* ============ SERVICIOS ============ */}
      <section className="section paper short" id="servicios">
        <p className="eyebrow r"><b>Cómo lo encaro</b><i>/</i>El mismo camino, sea un informe, un análisis puntual o una búsqueda de patrones</p>
        <div className="metodo r d1">
          {metodo.map((m) => (
            <article key={m.n} className="paso">
              <span className="n">{m.n}</span>
              <h3>{m.t}</h3>
              <p>{m.p}</p>
            </article>
          ))}
        </div>

        <p className="eyebrow r" style={{ marginTop: 34 }}><b>Servicios</b><i>/</i>Lo que entrego, y qué recibe el cliente en cada caso</p>
        <div className="services">
          {servicios.map((s, i) => (
            <article key={s.n} className={`service r d${(i % 3) + 1}`}>
              <span className="n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
              <span className="ent">ENTREGABLE · {s.e}</span>
            </article>
          ))}
        </div>
        <div className="tools-row r d2" style={{ marginTop: 30 }}>
          <div className="lbl">Con qué trabajo</div>
          <Tools keys={["xl", "pq", "pbi", "dax", "sql", "py", "pd"]} />
        </div>

        <div className="r d2" style={{ marginTop: 26, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
          <a href="/informes/informe-directorio-ejemplo.pdf" target="_blank" rel="noopener noreferrer" className="btn fill">Ver un informe de ejemplo (PDF)</a>
          <span className="cap">Dos páginas con datos ficticios: indicadores con semáforo, facturación contra objetivo, ventas por vendedor y las acciones que se desprenden.</span>
        </div>
        <p className="body r d2" style={{ marginTop: 18, maxWidth: "62ch" }}>
          Un informe no se mide por lo lindo que queda, sino por lo que pasa en la reunión donde se abre. Si tenés que preparar la próxima, o entender por qué las ventas no cierran, <a href="#contacto" style={{ color: "var(--accent)", fontWeight: 700 }}>contame qué datos tenés</a> y te propongo cómo encararlo.
        </p>
      </section>

      {/* ============ GALERÍA BI ============ */}
      <section className="section gallery" id="bi">
        <div className="head r">
          <span className="name">Análisis y BI</span>
          <span className="cap">Tableros ejecutivos en Power BI · se recorren completos desde cada ficha</span>
        </div>
        <div className="grid">
          {dashboards.map((d, i) => (
            <Link key={d.slug} href={`/proyectos/${d.slug}`} className={`cell r d${i + 1}`}>
              <div className="bar"><i style={{ background: "#ff5f57" }} /><i style={{ background: "#febc2e" }} /><i style={{ background: "#28c840" }} /><span>{d.file}</span></div>
              <img loading="lazy" decoding="async" src={d.img} alt={d.cap} />
              <span className="cap">{d.cap}</span>
            </Link>
          ))}
        </div>
        <div className="year">2026</div>
      </section>

      {/* ============ CONTACTO ============ */}
      <section className="section contact" id="contacto">
        <WmBars style={{ width: 460, top: "10%", right: -90, transform: "rotate(-18deg)" }} />
        <div className="logo r">
          <Mark />
          <div className="wordmark">ignacio<sup>®</sup><br />peñamaria<span>data &amp; systems studio</span></div>
        </div>
        <p className="cap r d1">Escribime por acá</p>
        <div className="links r d2">
          <a href="https://wa.me/543413073307" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" />+54 341 307-3307</a>
          <a href="mailto:ignaciopenamaria@gmail.com"><i className="fas fa-envelope" />ignaciopenamaria@gmail.com</a>
          <a href="https://www.linkedin.com/in/ignacio-peniamaria/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" />ignacio-peniamaria</a>
          <a href="https://github.com/nachitoxx6262" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" />nachitoxx6262</a>
          <a href="https://www.cuneusdata.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-rocket" />cuneusdata.com</a>
          {CV_URL && <a href={CV_URL} download><i className="fas fa-file-arrow-down" />Descargar CV</a>}
        </div>
        <p className="cap" style={{ opacity: .5 }}>© {new Date().getFullYear()} Ignacio Peñamaria · Carcarañá, Santa Fe</p>
      </section>
    </>
  );
}

// ─── Tarjeta de datos dentro del área visual ─────────────────────────────────
function DataCard({ title, kind, items, light, style }) {
  return (
    <div className={`dcard r d3 ${light ? "light" : ""}`} style={style}>
      <h4>{title}</h4>
      {kind === "steps" && (
        <div className="steps">{items.map((it, i) => <span key={it}>{it}{i < items.length - 1 && <i>→</i>}</span>)}</div>
      )}
      {kind === "rows" && (
        <div className="rows">{items.map(([k, v]) => <div key={k + v} style={{ display: "contents" }}><span>{k}</span><b>{v}</b></div>)}</div>
      )}
      {kind === "big" && (
        <div className="bigs">{items.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>
      )}
    </div>
  );
}
