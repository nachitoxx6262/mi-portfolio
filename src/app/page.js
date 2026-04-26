"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../styles/globals.css";
import Navbar from "../components/Navbar";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

// Stack tecnológico: chips agrupados por categoría (sin porcentajes ni barras)
const skillCategories = [
  {
    label: "Análisis & Datos",
    icon: "fas fa-chart-line",
    labelClass: "text-teal-300",
    iconClass: "text-teal-400",
    chipHover: "hover:border-teal-400/40 hover:text-teal-200",
    skills: [
      { name: 'Power BI',    icon: 'fas fa-chart-bar' },
      { name: 'SQL',         icon: 'fas fa-database' },
      { name: 'Python',      icon: 'fab fa-python' },
      { name: 'Excel',       icon: 'fas fa-file-excel' },
      { name: 'DAX',         icon: 'fas fa-calculator' },
      { name: 'Power Query', icon: 'fas fa-filter' },
    ],
  },
  {
    label: "Desarrollo",
    icon: "fas fa-code",
    labelClass: "text-fuchsia-300",
    iconClass: "text-fuchsia-400",
    chipHover: "hover:border-fuchsia-400/40 hover:text-fuchsia-200",
    skills: [
      { name: 'JavaScript',   icon: 'fab fa-js' },
      { name: 'TypeScript',   icon: 'fas fa-code' },
      { name: 'React',        icon: 'fab fa-react' },
      { name: 'Next.js',      icon: 'fas fa-forward' },
      { name: 'Node.js',      icon: 'fab fa-node-js' },
      { name: 'FastAPI',      icon: 'fas fa-bolt' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind' },
    ],
  },
  {
    label: "Bases de Datos",
    icon: "fas fa-database",
    labelClass: "text-sky-300",
    iconClass: "text-sky-400",
    chipHover: "hover:border-sky-400/40 hover:text-sky-200",
    skills: [
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'SQL',        icon: 'fas fa-table' },
    ],
  },
  {
    label: "Integraciones & IA",
    icon: "fas fa-robot",
    labelClass: "text-yellow-300",
    iconClass: "text-yellow-400",
    chipHover: "hover:border-yellow-400/40 hover:text-yellow-200",
    skills: [
      { name: 'WhatsApp API',     icon: 'fab fa-whatsapp' },
      { name: 'REST APIs',        icon: 'fas fa-plug' },
      { name: 'Arduino / IoT',    icon: 'fas fa-microchip' },
      { name: 'Agentes de IA',    icon: 'fas fa-robot' },
      { name: 'Machine Learning', icon: 'fas fa-brain' },
    ],
  },
  {
    label: "Herramientas",
    icon: "fas fa-toolbox",
    labelClass: "text-gray-300",
    iconClass: "text-gray-400",
    chipHover: "hover:border-gray-400/40 hover:text-white",
    skills: [
      { name: 'Git',    icon: 'fab fa-git-alt' },
      { name: 'GitHub', icon: 'fab fa-github' },
    ],
  },
];

const categoryConfig = {
  "BI & Analytics": {
    bg: "bg-cyan-500/10", text: "text-cyan-400",
    border: "border-cyan-500/20", accent: "from-cyan-500 to-teal-400",
  },
  "Fullstack": {
    bg: "bg-fuchsia-500/10", text: "text-fuchsia-400",
    border: "border-fuchsia-500/20", accent: "from-fuchsia-500 to-purple-400",
  },
  "Automatización": {
    bg: "bg-emerald-500/10", text: "text-emerald-400",
    border: "border-emerald-500/20", accent: "from-emerald-500 to-teal-400",
  },
};

const statusConfig = {
  live: { label: "En producción", dot: "bg-emerald-400", text: "text-emerald-400" },
  demo: { label: "Demo interactiva", dot: "bg-sky-400",   text: "text-sky-400"   },
  dev:  { label: "En desarrollo",   dot: "bg-amber-400",  text: "text-amber-400" },
};

// ── BI Projects ───────────────────────────────────────────────────────────────
const proyectosBI = [
  {
    title: "Dashboard Eficiencia Productiva",
    description: "Panel ejecutivo Power BI con KPIs de ingresos, márgenes, cuadrantes de eficiencia por planta y análisis MoM/YoY con semáforos de objetivos. Integra datos de producción, costos y rentabilidad para detectar oportunidades de mejora.",
    image: "/proyectos/Alimentos_sur.png",
    slug: "dashboard-eficiencia-productiva",
    tecnologias: ["Power BI", "SQL", "DAX", "Data Modeling"],
    link: "proyecto",
    category: "BI & Analytics",
    status: "demo",
  },
  {
    title: "Northwind Analytics",
    description: "Dashboard BI avanzado para optimizar inventarios y logística: modelado relacional SQL, KPIs de rotación de stock, alertas de stock crítico y análisis de proveedores y categorías de productos.",
    slug: "stock-logistica",
    image: "/proyectos/northwind_analytics.png",
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "proyecto",
    category: "BI & Analytics",
    status: "demo",
  },
];

// ── Dev Projects ──────────────────────────────────────────────────────────────
const waMessages = [
  { from: "bot",  text: "👋 ¡Hola! Soy el asistente de turnos médicos. ¿Qué querés hacer?" },
  { from: "bot",  text: "1️⃣ Sacar un turno\n2️⃣ Ver mis turnos\n3️⃣ Cancelar un turno" },
  { from: "user", text: "1" },
  { from: "bot",  text: "¿Con qué especialidad?\n\n🫀 Cardiología\n🧠 Neurología\n🦷 Odontología\n👁️ Oftalmología" },
  { from: "user", text: "Odontología" },
  { from: "bot",  text: "Días disponibles:\n\n📅 Lunes 17 — 10:00 / 11:30\n📅 Miércoles 19 — 09:00\n📅 Viernes 21 — 16:00\n\n¿Cuál preferís?" },
];

const proyectosDev = [
  {
    title: "Cuneus Data Studio",
    description: "Estudio de servicios tecnológicos: datos, automatización y sistemas a medida. Ayudo a empresas a vender mejor, operar con eficiencia y decidir con información real. Del análisis al producto en producción.",
    tecnologias: ["Next.js", "React", "Tailwind", "JavaScript", "Python"],
    link: "https://www.cuneusdata.com",
    category: "Fullstack",
    status: "live",
    livePreview: { type: 'web', url: 'https://www.cuneusdata.com', badge: 'Landing' },
    featured: true,
  },
  {
    title: "Sistema Hotelero",
    // Placeholder [N_HABITACIONES] queda como string para completarlo a mano luego.
    description: "Gestión centralizada de habitaciones, reservas y huéspedes: disponibilidad en tiempo real, estados dinámicos por habitación y registro completo de empresas y clientes. En producción y siendo utilizado diariamente. En uso diario por el equipo del hotel para gestionar [N_HABITACIONES] habitaciones.",
    slug: "sistema-hotelero",
    image: "/proyectos/hotel.png",
    tecnologias: ["React", "FastAPI", "Python", "PostgreSQL"],
    link: "proyecto",
    category: "Fullstack",
    status: "live",
    livePreview: { type: 'web', url: 'https://hotel.cuneusdata.com/', badge: 'App' },
  },
  {
    title: "Sistema Comercial",
    description: "Plataforma para equipos de ventas: clientes, pedidos, comisiones automáticas, segmentación geográfica y dashboards de rendimiento por vendedor. Usado en operación real por equipos de venta para gestionar clientes y comisiones.",
    slug: "sistema-comercial",
    image: "/proyectos/northwind_analytics.png",
    tecnologias: ["React", "Next.js", "SQL", "JavaScript"],
    link: "proyecto",
    category: "Fullstack",
    status: "live",
    livePreview: { type: 'web', url: 'https://www.cuneusdata.com/cuneus-comercial', badge: 'App' },
  },
  {
    // Renombrado: antes "Bot Agenda Médica". Es una plataforma healthtech integral, no solo un bot.
    title: "Sistema de Gestión Clínica",
    description: "Plataforma healthtech integral en producción para una clínica privada. Incluye historia clínica digital, registro de pacientes, accesos diferenciados por rol para médicos, gestión de turnos con control de ocupación y bot WhatsApp de agendamiento automático 24/7. Sistema completo de salud digital usado diariamente. Atiende automáticamente las consultas y agendamientos de la clínica las 24 horas.",
    slug: "bot-agenda-medica",
    tecnologias: ["Node.js", "React", "FastAPI", "PostgreSQL", "WhatsApp API"],
    link: "proyecto",
    category: "Automatización",
    status: "live",
    livePreview: {
      type: 'whatsapp',
      phone: "+54 341 719-9019",
      waLink: "https://wa.me/543417199019",
      mensajes: waMessages,
    },
  },
  {
    title: "Monitoreo Hidropónico",
    description: "Visualización en tiempo real de sensores Arduino con web fullstack para monitorear cultivos hidropónicos: temperatura, humedad y pH desde cualquier dispositivo.",
    slug: "sistema-ml-agricola",
    image: "/proyectos/hidroponic.png",
    tecnologias: ["React", "Node.js", "Arduino", "PostgreSQL"],
    link: "https://hidroponic.vercel.app/",
    category: "Fullstack",
    status: "live",
    livePreview: { type: 'web', url: 'https://hidroponic.vercel.app/', badge: 'Live' },
  },
  {
    title: "Sistema de Restaurant",
    description: "Operación gastronómica digital: mesas, pedidos con notas especiales y comandas enviadas a cocina al instante. Sin papelitos, sin caos. En desarrollo activo.",
    slug: "sistema-restaurant",
    image: "/proyectos/Alimentos_sur.png",
    tecnologias: ["React", "FastAPI", "Python", "PostgreSQL"],
    link: "proyecto",
    category: "Fullstack",
    status: "dev",
  },
];

const stats = [
  { value: "7+", label: "Proyectos" },
  { value: "3",  label: "En producción" },
  { value: "4",  label: "Rubros" },
  { value: "∞",  label: "Café ☕" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const aboutRef     = useRef(null);
  const skillsRef    = useRef(null);
  const proyectosRef = useRef(null);
  const contactoRef  = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-[#06060f] text-white font-sans overflow-x-hidden">

      <Navbar
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        proyectosRef={proyectosRef}
        skillsRef={skillsRef}
        contactoRef={contactoRef}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        ref={aboutRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[130px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-fuchsia-500/8 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-[280px] h-[280px] bg-yellow-500/5 rounded-full blur-[90px] animate-blob" style={{ animationDelay: '8s' }} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center max-w-3xl"
        >
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400 via-fuchsia-500 to-yellow-400 opacity-35 blur-xl" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-teal-400 via-fuchsia-500 to-yellow-400 animate-spin-slow" />
            <motion.img
              src="/avatar.jpg"
              alt="Ignacio Peñamaria"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.25 }}
              className="relative w-32 h-32 rounded-full object-cover border-[3px] border-[#06060f]"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-6xl font-extrabold mb-3 tracking-tight"
          >
            <span className="bg-gradient-to-r from-teal-300 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent">
              Ignacio Peñamaria
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-4"
          >
            {["Ciencia de Datos", "Backend", "Visualización BI", "Fullstack"].map((role) => (
              <span key={role} className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                {role}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-900/50 to-teal-900/50 border border-fuchsia-700/25 px-4 py-1.5 rounded-full mb-5"
          >
            <i className="fas fa-graduation-cap text-fuchsia-300 text-sm" />
            <span className="text-fuchsia-200 text-sm font-medium">
              Estudiante avanzado · Lic. en Ciencia de Datos
              <span className="text-fuchsia-500/60 text-xs ml-1">· Universidad Siglo 21</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
          >
            Transformo datos en decisiones y procesos en sistemas que funcionan. Fundé{" "}
            <a href="https://www.cuneusdata.com" target="_blank" rel="noopener noreferrer"
              className="text-teal-400 font-semibold hover:text-teal-300 underline underline-offset-2 transition">
              Cuneus Data Studio
            </a>
            {" "}para ayudar a empresas a vender mejor, operar con eficiencia y decidir con datos reales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex gap-8 sm:gap-12 mb-8 py-4 px-8 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[10px] text-gray-600 mt-0.5 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a href="https://github.com/nachitoxx6262" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              <i className="fab fa-github" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ignacio-peniamaria/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-300 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a href="https://www.cuneusdata.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:from-teal-500 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-teal-900/30">
              <i className="fas fa-rocket text-xs" /> Cuneus Data Studio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mt-14"
          >
            <motion.i
              className="fas fa-chevron-down text-base text-gray-500"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── BI & Analytics ───────────────────────────────────────────────── */}
      <SectionFadeIn refProp={proyectosRef}>
        <SectionHeader
          number="01"
          title="BI & Analytics"
          subtitle="Dashboards ejecutivos e inteligencia de negocio para decisiones basadas en datos."
          accent="from-cyan-400 to-teal-400"
        />
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {proyectosBI.map((p, i) => <BiCard key={i} {...p} idx={i} />)}
        </div>
      </SectionFadeIn>

      {/* ── Desarrollo & Automatización ──────────────────────────────────── */}
      <SectionFadeIn>
        <SectionHeader
          number="02"
          title="Desarrollo & Automatización"
          subtitle="Sistemas fullstack, bots y plataformas en producción — podés interactuar con ellos ahora mismo."
          accent="from-fuchsia-400 to-purple-400"
        />
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {proyectosDev.map((p, i) => <DevCard key={i} {...p} idx={i} />)}
        </div>
      </SectionFadeIn>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <SectionFadeIn refProp={skillsRef}>
        <SectionHeader
          number="03"
          title="Stack tecnológico"
          subtitle="Herramientas con las que construyo, analizo y entrego valor cada día."
          accent="from-sky-400 to-teal-400"
        />
        {/* Grilla de categorías con chips — diseño limpio sin porcentajes ni barras */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gi * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-white/[0.06]">
                <i className={`${group.icon} ${group.iconClass} text-sm`} />
                <h3 className={`${group.labelClass} font-bold text-[11px] uppercase tracking-widest`}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + gi * 0.05 + si * 0.04 }}
                    className={`inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${group.chipHover}`}
                  >
                    <i className={`${skill.icon} text-[11px] ${group.iconClass} opacity-80`} />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionFadeIn>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      {/* Sección "04 Certificaciones" eliminada — renumerado: Contacto pasa de 05 a 04 */}
      <SectionFadeIn refProp={contactoRef}>
        <SectionHeader
          number="04"
          title="Hablemos"
          subtitle="Freelance, posición full-time o simplemente una consulta — estoy disponible."
          accent="from-teal-400 to-fuchsia-400"
        />
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.08] p-8 sm:p-10">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
            <p className="relative text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Si tenés un problema de datos, necesitás un sistema que funcione o simplemente querés charlar sobre tecnología — escribime.
            </p>
            <div className="relative flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="mailto:ignaciopenamaria@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:from-teal-500 hover:to-fuchsia-500 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/20 text-sm">
                <i className="fas fa-envelope" /> ignaciopenamaria@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/ignacio-peniamaria/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-sky-600/15 hover:bg-sky-600/25 border border-sky-500/25 text-sky-300 font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a href="https://wa.me/543413073307" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/25 text-emerald-300 font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm">
                <i className="fab fa-whatsapp" /> WhatsApp
              </a>
              {/* Botón de descarga del CV — el PDF debe colocarse en /public/CV_Ignacio_Penamaria.pdf */}
              <a href="/CV_Ignacio_Penamaria.pdf" download
                className="flex items-center justify-center gap-2 bg-fuchsia-600/15 hover:bg-fuchsia-600/25 border border-fuchsia-500/25 text-fuchsia-200 font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm">
                <i className="fas fa-file-arrow-down" /> Descargar CV
              </a>
            </div>
          </div>
        </div>
      </SectionFadeIn>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.05] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Ignacio Peñamaria</span>
          <span className="flex items-center gap-1.5">
            Hecho con <i className="fas fa-heart text-fuchsia-700" /> y demasiado café
          </span>
          <div className="flex gap-5">
            <a href="https://github.com/nachitoxx6262" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition"><i className="fab fa-github" /></a>
            <a href="https://www.linkedin.com/in/ignacio-peniamaria/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition"><i className="fab fa-linkedin" /></a>
            <a href="https://www.cuneusdata.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition"><i className="fas fa-rocket" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ─── Helper components ────────────────────────────────────────────────────────

function SectionFadeIn({ children, refProp }) {
  const localRef = useRef(null);
  const ref = refProp ?? localRef;
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="py-20 px-6"
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ number, title, subtitle, accent = "from-teal-400 to-fuchsia-400" }) {
  return (
    <div className="mb-12 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[10px] font-mono text-gray-700 tracking-[0.3em] uppercase">{number}</span>
        <div className="h-px w-24 bg-gradient-to-r from-gray-700 to-transparent" />
      </div>
      <h2 className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 text-sm mt-2 max-w-xl">{subtitle}</p>}
    </div>
  );
}

// ── BI Card: image on top, description below, 2-col grid ─────────────────────
function BiCard({ title, description, image, slug, tecnologias, link, category, status, idx }) {
  const cat = categoryConfig[category] || categoryConfig["BI & Analytics"];
  const st  = statusConfig[status]    || statusConfig["demo"];
  const href = link === "proyecto" ? `/proyectos/${slug}` : link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.18] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
    >
      <div className={`h-px w-full bg-gradient-to-r ${cat.accent}`} />

      {image && (
        <div className="relative overflow-hidden h-52">
          <img src={image} alt={title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {href && (
            <Link href={href} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Ver proyecto <i className="fas fa-arrow-right text-xs" />
              </span>
            </Link>
          )}
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cat.bg} ${cat.text} border ${cat.border}`}>
            {category}
          </span>
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${st.dot} animate-pulse`} />
            <span className={`text-[10px] font-medium ${st.text}`}>{st.label}</span>
          </span>
        </div>
        <h3 className="font-bold text-white text-base leading-snug mb-2">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tecnologias.map((tec, i) => (
            <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/[0.08] text-gray-400 px-2 py-0.5 rounded">{tec}</span>
          ))}
        </div>
        {link && (
          <Link href={href} className={`card-cta inline-flex items-center gap-1.5 text-sm font-semibold ${cat.text} hover:opacity-70 transition-opacity`}>
            Ver proyecto <i className="fas fa-arrow-right text-xs arrow-icon" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

// ── Dev Card: split layout (left: info / right: live preview) ─────────────────
function DevCard({ title, description, image, slug, tecnologias, link, category, status, livePreview, featured, idx }) {
  const cat = categoryConfig[category] || categoryConfig["Fullstack"];
  const st  = statusConfig[status]    || statusConfig["live"];
  const href = !link ? null : link === "proyecto" ? `/proyectos/${slug}` : link;
  const isExternal = href?.startsWith('http');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.08 }}
      className={`group bg-white/[0.03] rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 ${
        featured
          ? 'border-teal-500/20 hover:border-teal-500/40'
          : 'border-white/[0.07] hover:border-white/[0.18]'
      }`}
    >
      {/* Top accent line */}
      <div className={`h-px w-full bg-gradient-to-r ${featured ? 'from-teal-400 via-fuchsia-400 to-yellow-400' : cat.accent}`} />

      <div className="flex flex-col lg:flex-row">

        {/* ── Left: description ── */}
        <div className={`p-6 flex flex-col justify-between lg:border-r border-white/[0.05] ${livePreview ? 'lg:w-[38%]' : 'w-full'}`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cat.bg} ${cat.text} border ${cat.border}`}>
                {category}
              </span>
              <span className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${st.dot} animate-pulse`} />
                <span className={`text-[10px] font-medium ${st.text}`}>{st.label}</span>
              </span>
            </div>

            {featured && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400/70 mb-2">
                <i className="fas fa-rocket text-[9px]" /> Mi estudio
              </span>
            )}

            <h3 className={`font-bold text-white leading-snug mb-2 ${featured ? 'text-xl' : 'text-base'}`}>{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tecnologias.map((tec, i) => (
                <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/[0.08] text-gray-400 px-2 py-0.5 rounded">{tec}</span>
              ))}
            </div>
            {href && (
              <Link href={href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`card-cta inline-flex items-center gap-1.5 text-sm font-semibold ${cat.text} hover:opacity-70 transition-opacity`}>
                {isExternal ? 'Abrir sitio' : 'Ver proyecto'}
                <i className={`fas ${isExternal ? 'fa-external-link-alt' : 'fa-arrow-right'} text-xs arrow-icon`} />
              </Link>
            )}
          </div>
        </div>

        {/* ── Right: live preview ── */}
        {livePreview && (
          <div className="flex-1 min-h-[280px] lg:min-h-0">
            {livePreview.type === 'web' ? (
              <MiniWebPreview url={livePreview.url} badge={livePreview.badge} />
            ) : (
              <MiniWhatsAppPreview
                mensajes={livePreview.mensajes}
                waLink={livePreview.waLink}
                phone={livePreview.phone}
              />
            )}
          </div>
        )}

        {/* ── Right: static image (no live preview) ── */}
        {!livePreview && image && (
          <div className="relative overflow-hidden lg:w-[52%] h-56 lg:h-auto">
            <img src={image} alt={title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06060f]/80 via-transparent to-transparent lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060f]/80 via-transparent to-transparent lg:hidden" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ── Mini Web Preview (embedded in DevCard) ────────────────────────────────────
function MiniWebPreview({ url, badge }) {
  return (
    <div className="h-full flex flex-col min-h-[280px]">
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/70 border-b border-white/[0.05] shrink-0">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 flex items-center gap-1.5 bg-gray-800/50 rounded px-2 py-0.5 min-w-0">
          <i className="fas fa-lock text-gray-700 text-[8px]" />
          <span className="text-[10px] font-mono text-gray-500 truncate">{url.replace('https://', '')}</span>
        </div>
        {badge && (
          <span className="text-[9px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded-full shrink-0">{badge}</span>
        )}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-400 transition shrink-0">
          <i className="fas fa-external-link-alt text-[9px]" />
        </a>
      </div>
      <div className="flex-1">
        <iframe src={url} title={url} className="w-full h-full border-0 min-h-[240px]" loading="lazy" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
}

// ── Mini WhatsApp Preview (embedded in DevCard) ───────────────────────────────
function MiniWhatsAppPreview({ mensajes, waLink, phone }) {
  return (
    <div className="h-full flex flex-col min-h-[280px]">
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#075E54] shrink-0">
        <div className="w-8 h-8 rounded-full bg-green-200/20 flex items-center justify-center text-white">
          <i className="fab fa-whatsapp" />
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold text-xs leading-tight">Agenda Médica · Bot</p>
          <p className="text-green-200/60 text-[10px]">en línea · {phone}</p>
        </div>
        <div className="flex gap-2.5 text-white/40 text-xs">
          <i className="fas fa-video" /><i className="fas fa-phone" /><i className="fas fa-ellipsis-v" />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 px-3 py-3 bg-[#0d1117] overflow-y-auto">
        {mensajes.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.08 }}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] px-2.5 py-1.5 rounded-xl text-xs whitespace-pre-line shadow ${
              msg.from === 'user' ? 'bg-[#005C4B] text-white rounded-br-sm' : 'bg-[#1f2c34] text-gray-100 rounded-bl-sm'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 px-2.5 py-2 bg-[#1f2c34] border-t border-white/[0.04] shrink-0">
        <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1 text-gray-600 text-xs">Escribí un mensaje...</div>
        <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white text-[10px]">
          <i className="fas fa-microphone" />
        </div>
      </div>

      <div className="p-3 text-center bg-[#0d1117] border-t border-white/[0.04] shrink-0">
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-1.5 rounded-full text-xs transition-all duration-200 hover:scale-105">
          <i className="fab fa-whatsapp" /> Probar el bot
        </a>
      </div>
    </div>
  );
}
