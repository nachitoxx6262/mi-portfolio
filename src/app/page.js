"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "../../styles/globals.css";
import Navbar from "../components/Navbar";
import Certificados from "../components/Certificados";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";

// ─── Data ────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    label: "Análisis & Datos",
    icon: "fas fa-chart-line",
    barClass: "from-teal-400 to-cyan-300",
    labelClass: "text-teal-300",
    iconClass: "text-teal-400",
    skills: [
      { name: 'Python',         level: 75, icon: 'fab fa-python' },
      { name: 'SQL',            level: 90, icon: 'fas fa-database' },
      { name: 'Power BI',       level: 85, icon: 'fas fa-chart-bar' },
      { name: 'Excel / Sheets', level: 90, icon: 'fa-solid fa-file-excel' },
    ],
  },
  {
    label: "Desarrollo",
    icon: "fas fa-code",
    barClass: "from-fuchsia-400 to-purple-300",
    labelClass: "text-fuchsia-300",
    iconClass: "text-fuchsia-400",
    skills: [
      { name: 'JavaScript',  level: 90, icon: 'fa-brands fa-js' },
      { name: 'React',       level: 80, icon: 'fab fa-react' },
      { name: 'FastAPI',     level: 65, icon: 'fas fa-bolt' },
      { name: 'Tailwind CSS',level: 75, icon: 'fab fa-css3-alt' },
      { name: 'Git',         level: 90, icon: 'fa-brands fa-git-alt' },
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
  demo: { label: "Demo interactiva", dot: "bg-sky-400",     text: "text-sky-400"     },
  dev:  { label: "En desarrollo",   dot: "bg-amber-400",   text: "text-amber-400"   },
};

const proyectos = [
  {
    title: "Dashboard Eficiencia Productiva",
    description: "Panel ejecutivo Power BI con KPIs de ingresos, márgenes, cuadrantes de eficiencia por planta y análisis MoM/YoY con semáforos de objetivos.",
    image: "/proyectos/Alimentos_sur.png",
    slug: "dashboard-eficiencia-productiva",
    tecnologias: ["Power BI", "SQL", "DAX", "Data Modeling"],
    link: "proyecto",
    category: "BI & Analytics",
    status: "demo",
  },
  {
    title: "Northwind Analytics",
    description: "Dashboard BI avanzado para optimizar inventarios y logística: modelado relacional SQL, KPIs de rotación y alertas de stock crítico.",
    slug: "stock-logistica",
    image: "/proyectos/northwind_analytics.png",
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "proyecto",
    category: "BI & Analytics",
    status: "demo",
  },
  {
    title: "Monitoreo Hidropónico",
    description: "Visualización en tiempo real de sensores Arduino con web fullstack para monitorear cultivos hidropónicos desde cualquier dispositivo.",
    slug: "sistema-ml-agricola",
    image: "/proyectos/hidroponic.png",
    tecnologias: ["React", "Node.js", "Arduino", "PostgreSQL"],
    link: "https://hidroponic.vercel.app/",
    category: "Fullstack",
    status: "live",
  },
  {
    title: "Sistema Hotelero",
    description: "Gestión centralizada de habitaciones, reservas y huéspedes: disponibilidad en tiempo real, estados dinámicos y base escalable.",
    slug: "sistema-hotelero",
    image: "/proyectos/relaciones_db.png",
    tecnologias: ["React", "FastAPI", "Python", "PostgreSQL"],
    link: "proyecto",
    category: "Fullstack",
    status: "live",
  },
  {
    title: "Sistema Comercial",
    description: "Plataforma para equipos de ventas: clientes, comisiones, segmentación geográfica y dashboards de rendimiento por vendedor.",
    slug: "sistema-comercial",
    image: "/proyectos/northwind_analytics.png",
    tecnologias: ["React", "Next.js", "SQL", "JavaScript"],
    link: "proyecto",
    category: "Fullstack",
    status: "live",
  },
  {
    title: "Bot Agenda Médica",
    description: "Bot WhatsApp para turnos médicos: elegí especialidad, consultá disponibilidad y reservá automáticamente, 24/7 sin intervención humana.",
    slug: "bot-agenda-medica",
    image: "/proyectos/relaciones_db.png",
    tecnologias: ["Node.js", "WhatsApp API", "JavaScript", "PostgreSQL"],
    link: "proyecto",
    category: "Automatización",
    status: "live",
  },
  {
    title: "Sistema de Restaurant",
    description: "Operación gastronómica digital: mesas, pedidos con notas especiales y comandas enviadas a cocina al instante. Sin papelitos, sin caos.",
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
  const aboutRef       = useRef(null);
  const skillsRef      = useRef(null);
  const proyectosRef   = useRef(null);
  const certificadosRef = useRef(null);
  const contactoRef    = useRef(null);

  const scrollTo = (ref) => ref.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-[#06060f] text-white font-sans overflow-x-hidden">

      <Navbar
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        proyectosRef={proyectosRef}
        skillsRef={skillsRef}
        certificadosRef={certificadosRef}
        contactoRef={contactoRef}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        ref={aboutRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
      >
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[130px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-fuchsia-500/8 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-[280px] h-[280px] bg-yellow-500/5 rounded-full blur-[90px] animate-blob" style={{ animationDelay: '8s' }} />
        </div>

        {/* Dot grid */}
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
          {/* Avatar with glow ring */}
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

          {/* Name */}
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

          {/* Role pills */}
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

          {/* Edu badge */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-900/50 to-teal-900/50 border border-fuchsia-700/25 px-4 py-1.5 rounded-full mb-5"
          >
            <i className="fas fa-graduation-cap text-fuchsia-300 text-sm" />
            <span className="text-fuchsia-200 text-sm font-medium">
              Lic. Ciencias de Datos
              <span className="text-fuchsia-500/60 text-xs ml-1">· in progress</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
          >
            Transformo datos en decisiones y procesos en sistemas que funcionan. Fundé{" "}
            <a
              href="https://www.cuneusdata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 font-semibold hover:text-teal-300 underline underline-offset-2 transition"
            >
              Cuneus Data Studio
            </a>
            {" "}para ayudar a empresas a vender mejor, operar con eficiencia y decidir con datos reales.
          </motion.p>

          {/* Stats */}
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="https://github.com/nachitoxx6262"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <i className="fab fa-github" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ignacio-peniamaria/"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-300 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a
              href="https://www.cuneusdata.com"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:from-teal-500 hover:to-fuchsia-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-teal-900/30"
            >
              <i className="fas fa-rocket text-xs" /> Cuneus Data Studio
            </a>
          </motion.div>

          {/* Scroll indicator */}
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

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <SectionFadeIn refProp={proyectosRef}>
        <SectionHeader
          number="01"
          title="Proyectos destacados"
          subtitle="Sistemas, dashboards y bots construidos para resolver problemas reales."
          accent="from-fuchsia-400 to-pink-400"
        />
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {proyectos.map((p, i) => <Card key={i} {...p} idx={i} />)}
        </div>
      </SectionFadeIn>

      {/* ── Live Platforms ───────────────────────────────────────────────── */}
      <SectionFadeIn>
        <SectionHeader
          number="02"
          title="Plataformas en vivo"
          subtitle="Productos desarrollados y mantenidos bajo Cuneus Data Studio, actualmente en producción."
          accent="from-teal-400 to-cyan-400"
        />
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          <WebPreview
            title="Cuneus Data Studio"
            url="https://www.cuneusdata.com"
            badge="Landing"
            description="Landing principal de Cuneus Data Studio: servicios de datos, automatización y sistemas para que empresas decidan con información real."
          />
          <WebPreview
            title="Cuneus Comercial"
            url="https://www.cuneusdata.com/cuneus-comercial"
            badge="App"
            description="Sistema de gestión comercial: vendedores, clientes, pedidos, comisiones y control en tiempo real."
          />
          <WebPreview
            title="Sistema Hotelero"
            url="https://hotel.cuneusdata.com/"
            badge="App"
            description="Sistema de gestión hotelera: habitaciones, reservas, disponibilidad en tiempo real y registro de huéspedes."
          />
          <WhatsAppPreview
            title="Bot de Agenda Médica"
            phone="+54 341 719-9019"
            waLink="https://wa.me/543417199019"
            description="Bot conversacional para gestión de turnos médicos. Disponibilidad 24/7, sin intervención humana."
            mensajes={[
              { from: "bot",  text: "👋 ¡Hola! Soy el asistente de turnos médicos. ¿Qué querés hacer?" },
              { from: "bot",  text: "1️⃣ Sacar un turno\n2️⃣ Ver mis turnos\n3️⃣ Cancelar un turno" },
              { from: "user", text: "1" },
              { from: "bot",  text: "¿Con qué especialidad?\n\n🫀 Cardiología\n🧠 Neurología\n🦷 Odontología\n👁️ Oftalmología" },
              { from: "user", text: "Odontología" },
              { from: "bot",  text: "Días disponibles:\n\n📅 Lunes 17 — 10:00 / 11:30\n📅 Miércoles 19 — 09:00\n📅 Viernes 21 — 16:00\n\n¿Cuál preferís?" },
            ]}
          />
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
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gi * 0.15 }}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-white/[0.06]">
                <i className={`${group.icon} ${group.iconClass} text-sm`} />
                <h3 className={`${group.labelClass} font-bold text-[11px] uppercase tracking-widest`}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <i className={`${skill.icon} text-gray-600 text-xs w-4 text-center`} />
                        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-gray-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2 + gi * 0.1 + si * 0.06, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${group.barClass} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionFadeIn>

      {/* ── Certificates ─────────────────────────────────────────────────── */}
      <SectionFadeIn refProp={certificadosRef}>
        <SectionHeader
          number="04"
          title="Certificaciones"
          subtitle="Formación continua: cada certificado es una herramienta más."
          accent="from-yellow-400 to-orange-400"
        />
        <Certificados />
      </SectionFadeIn>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <SectionFadeIn refProp={contactoRef}>
        <SectionHeader
          number="05"
          title="Hablemos"
          subtitle="Freelance, posición full-time o simplemente una consulta — estoy disponible."
          accent="from-teal-400 to-fuchsia-400"
        />
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.08] p-8 sm:p-10">
            {/* Glow blobs */}
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

            <p className="relative text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Si tenés un problema de datos, necesitás un sistema que funcione o simplemente querés charlar sobre tecnología — escribime.
            </p>

            <div className="relative flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="mailto:ignaciopenamaria@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-fuchsia-600 hover:from-teal-500 hover:to-fuchsia-500 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/20 text-sm"
              >
                <i className="fas fa-envelope" /> ignaciopenamaria@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ignacio-peniamaria/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-sky-600/15 hover:bg-sky-600/25 border border-sky-500/25 text-sky-300 font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm"
              >
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a
                href="https://wa.me/543413073307"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/25 text-emerald-300 font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm"
              >
                <i className="fab fa-whatsapp" /> WhatsApp
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

function Card({ title, description, image, embed, slug, tecnologias, link, category, status, idx }) {
  const cat = categoryConfig[category] || categoryConfig["Fullstack"];
  const st  = statusConfig[status]    || statusConfig["demo"];
  const href = link === "proyecto" ? `/proyectos/${slug}` : link;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.07] hover:border-white/[0.18] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 flex flex-col"
    >
      {/* Category accent line */}
      <div className={`h-px w-full bg-gradient-to-r ${cat.accent}`} />

      {/* Image / Embed */}
      {embed ? (
        <div className="h-48 bg-gray-900">
          <iframe src={embed.link} title={embed.title || title} frameBorder="0" allowFullScreen className="w-full h-full" />
        </div>
      ) : image && (
        <div className="relative overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {href && (
            <Link
              href={href}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
                Ver proyecto <i className="fas fa-arrow-right text-xs" />
              </span>
            </Link>
          )}
        </div>
      )}

      {/* Body */}
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
            <span key={i} className="text-[10px] font-mono bg-white/5 border border-white/[0.08] text-gray-400 px-2 py-0.5 rounded">
              {tec}
            </span>
          ))}
        </div>

        {link && (
          <Link href={href} className={`card-cta inline-flex items-center gap-1.5 text-sm font-semibold ${cat.text} hover:opacity-70 transition-opacity`}>
            Ver proyecto
            <i className="fas fa-arrow-right text-xs arrow-icon" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}

function WhatsAppPreview({ title, phone, waLink, description, mensajes }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">

      {/* WA Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#075E54]">
        <div className="w-9 h-9 rounded-full bg-green-200/20 flex items-center justify-center text-white">
          <i className="fab fa-whatsapp text-lg" />
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold text-sm leading-tight">Bot Agenda Médica</p>
          <p className="text-green-200/60 text-[11px]">en línea</p>
        </div>
        <div className="flex gap-3 text-white/40 text-sm">
          <i className="fas fa-video" />
          <i className="fas fa-phone" />
          <i className="fas fa-ellipsis-v" />
        </div>
      </div>

      {/* Chat */}
      <div className="flex flex-col gap-2 px-4 py-4 bg-[#0d1117] min-h-[220px] max-h-[300px] overflow-y-auto">
        {mensajes.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[78%] px-3 py-2 rounded-xl text-sm whitespace-pre-line shadow ${
              msg.from === "user"
                ? "bg-[#005C4B] text-white rounded-br-sm"
                : "bg-[#1f2c34] text-gray-100 rounded-bl-sm"
            }`}>
              {msg.text}
              <span className="block text-right text-[9px] mt-0.5 opacity-35">
                {msg.from === "user" ? "✓✓" : ""}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#1f2c34] border-t border-white/[0.04]">
        <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-1.5 text-gray-600 text-sm">
          Escribí un mensaje...
        </div>
        <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white text-xs">
          <i className="fas fa-microphone" />
        </div>
      </div>

      {/* Footer */}
      <div className="p-5 text-center">
        <h3 className="text-base font-bold text-white mb-0.5">{title}</h3>
        <p className="text-xs text-gray-600 mb-1">{phone}</p>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-green-900/25 transition-all duration-200 hover:scale-105 text-sm"
        >
          <i className="fab fa-whatsapp text-base" /> Probar el bot
        </a>
      </div>
    </div>
  );
}

function WebPreview({ title, url, description, badge }) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden">

      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-900/70 border-b border-white/[0.05]">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-gray-800/50 rounded-md px-3 py-1 min-w-0">
          <i className="fas fa-lock text-gray-700 text-[9px]" />
          <span className="text-xs text-gray-400 truncate font-mono">{url.replace('https://', '')}</span>
        </div>
        {badge && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-full shrink-0">
            {badge}
          </span>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-400 transition shrink-0"
        >
          <i className="fas fa-external-link-alt text-[11px]" />
        </a>
      </div>

      {/* Iframe */}
      <div className="aspect-video bg-black">
        <iframe
          src={url}
          title={title}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Description row */}
      <div className="px-5 py-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-white mb-0.5">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white text-xs font-medium px-3 py-2 rounded-lg transition-all hover:scale-105"
        >
          Abrir <i className="fas fa-external-link-alt text-[9px]" />
        </a>
      </div>
    </div>
  );
}
