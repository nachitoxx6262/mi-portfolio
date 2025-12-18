"use client";
import '@fortawesome/fontawesome-free/css/all.min.css'
import "../../styles/globals.css";
import Navbar from "../components/Navbar";
import Certificados from "../components/Certificados";
import { useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import Link from "next/link";

const skills = [
  { name: 'Python', level: 75, icon: 'fab fa-python' },
  { name: 'SQL', level: 90, icon: 'fas fa-database' },
  { name: 'Hojas de Cálculo', level: 90, icon: 'fa-solid fa-file-excel' },
  { name: 'Javascript', level: 90, icon: 'fa-brands fa-js' },
  { name: 'Power BI', level: 85, icon: 'fas fa-chart-bar' },
  { name: 'React', level: 80, icon: 'fab fa-react' },
  { name: 'FastAPI', level: 65, icon: 'fas fa-bolt' },
  { name: 'Tailwind', level: 75, icon: 'fab fa-css3-alt' },
  { name: 'Git', level: 90, icon: 'fa-brands fa-git-alt' },
]

const proyectos = [
  {
    title: "🏭 Dashboard de Eficiencia Productiva y Financiera",
    description: "Análisis integral de desempeño empresarial con Power BI, integrando datos de producción, costos, eficiencia operativa y rentabilidad para detectar oportunidades de mejora.",
    image: "/proyectos/Alimentos_sur.png",
    slug: "dashboard-eficiencia-productiva",
    tecnologias: ["Power BI", "SQL", "DAX", "Modelado de Datos"],
    link: "proyecto",
    //link: "https://tu-demo-o-repo.com",
  },
  // {
  //   title: "📊Dashboard de Demoras de Vuelos",
  //   description: "Análisis exploratorio y visualizaciones interactivas con Power BI y SQL para entender patrones de demoras y optimizar la gestión aeroportuaria.",
  //   image: "/proyectos/dashboard_vuelos.png",
  //   slug: "dashboard-demoras-vuelos",
  //   tecnologias: ["Power BI", "SQL", "Data Cleaning"],
  //   //link: "https://tu-demo-o-repo.com",
  // },
  // {
  //   title: "🏨 Sistema Hotelero",
  //   description: "Administra habitaciones, empresas y clientes con FastAPI y PostgreSQL.",
  //   image: "/proyectos/dashboard_vuelos.png",
  //   slug: "sistema-hotelero",
  //   tecnologias: ["Power BI", "SQL", "Data Cleaning"],
  //   link: "proyecto",
  // },
  {
    title: "📦 NORTHWIND ANALYTICS",
    description: "Dashboard BI + consultas SQL para mejorar la eficiencia.",
    slug: "stock-logistica",
    image: "/proyectos/northwind_analytics.png",
    // embed: {
    //   title: "Dashboard Power BI: Stock y Logística",
    //   link: "https://app.powerbi.com/view?r=eyJrIjoiZTA2ZGVjMGItNjE0Ny00MmZlLTg4YjgtODQyOWY0NmExYjU4IiwidCI6ImFhM2EwOTgzLTFmZTEtNDQxOC04NzJmLWNiYmZhOTA1ZjZlMyIsImMiOjR9"
    // },
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "proyecto",
  },
  {
    title: "🌿Monitoreo Hidropónico Arduino + Web Fullstack",
    description: "Visualización de datos con sensores Arduino y desarrollo web fullstack para monitorear cultivos hidropónicos.",
    slug: "sistema-ml-agricola",
    image: "/proyectos/hidroponic.png",
    tecnologias: ["React", "Node.js", "Arduino", "PostgreSQL"],
    link: "https://hidroponic.vercel.app/",
  },
]

export default function Home() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const proyectosRef = useRef(null)
  const certificadosRef = useRef(null)
  const contactoRef = useRef(null)

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: "smooth" })

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-sans overflow-x-hidden">

      <Navbar
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        proyectosRef={proyectosRef}
        skillsRef={skillsRef}
        certificadosRef={certificadosRef}
        contactoRef={contactoRef}
      />

      {/* Hero / Sobre mí */}
      <motion.section
        ref={aboutRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl mx-auto pt-36 pb-16 flex flex-col items-center"
      >
        <motion.img
          src="/avatar.jpg"
          alt="Avatar Nachito"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
          className="w-36 h-36 rounded-full shadow-2xl border-4 border-teal-500 mb-5"
        />
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold mb-3 bg-gradient-to-r from-teal-300 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent drop-shadow animate__animated animate__fadeInDown"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Ignacio Peñamaria
        </motion.h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, type: "spring", stiffness: 120 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-700 via-teal-600 to-yellow-400 px-4 py-1.5 rounded-full shadow-lg mb-4 animate-pulse"
        >
          <i className="fas fa-graduation-cap text-white text-lg"></i>
          <span className="text-white font-semibold text-base">
            Licenciatura en Ciencias de Datos <span className="text-xs font-normal">(in progress...)</span>
          </span>
        </motion.div>

        <motion.p
          className="text-lg sm:text-2xl text-teal-200 mb-3 animate__animated animate__fadeIn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Ciencia de Datos • Backend • Visualización Inteligente • Desarrollo Fullstack
        </motion.p>
        <motion.p
          className="text-center max-w-2xl text-gray-300 text-base sm:text-lg px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="text-teal-400 font-semibold">¡Hola! </span>
          Soy Nacho, alguien que disfruta buscarle la vuelta a todo y encontrar formas más simples y eficientes de hacer las cosas. Me motiva transformar datos en valor real y resolver desafíos que otros suelen dejar para después.Las ganas de aprender no se negocian.
          <br /><br />
          <span className="text-teal-400 font-semibold">Curioso y proactivo</span>, siempre estoy probando nuevas herramientas y buscando optimizar procesos. Si hay un problema, veo una oportunidad para marcar la diferencia; si hay datos, hay historias esperando a ser contadas.

        </motion.p>

        <div className="flex gap-7 mt-6">
          <a href="https://github.com/nachitoxx6262" target="_blank" rel="noopener noreferrer"
            className="hover:text-teal-400 text-2xl transition"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/ignacio-peniamaria/" target="_blank" rel="noopener noreferrer"
            className="hover:text-teal-400 text-2xl transition"><i className="fab fa-linkedin"></i></a>
        </div>
      </motion.section>



      {/* Proyectos */}
      <SectionFadeIn refProp={proyectosRef}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-fuchsia-400 text-center animate__animated animate__fadeIn">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {proyectos.map((proy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.13 }}
            >
              <Card
                title={proy.title}
                description={proy.description}
                embed={proy.embed}
                image={proy.image}
                slug={proy.slug}
                tecnologias={proy.tecnologias}
                link={proy.link}
              />
            </motion.div>
          ))}
        </div>
      </SectionFadeIn>
      <SectionFadeIn>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-teal-300 text-center">
          Plataformas en vivo
        </h2>
<p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
  Plataformas desarrolladas y mantenidas por mí persona, actualmente en producción, orientadas a brindar servicios reales a empresas.
</p>


        <div className="grid grid-cols-1 gap-10 max-w-5xl mx-auto">

          <WebPreview
            title="Cuneus Data Studio"
            url="https://www.cuneusdata.com"
            description="Landing principal de Cuneus Data Studio. Presenta los servicios de datos, automatización y sistemas que desarrollo para ayudar a empresas a vender mejor, operar con eficiencia y decidir con información real."
          />

          <WebPreview
            title="Cuneus Comercial"
            url="https://www.cuneusdata.com/cuneus-comercial"
            description="Sistema de gestión comercial: vendedores, clientes, pedidos, comisiones y control en tiempo real."
          />
        </div>
      </SectionFadeIn>

      {/* Skills */}
      <SectionFadeIn refProp={skillsRef}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-teal-200 text-center animate__animated animate__fadeIn">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="bg-gray-900/80 p-5 rounded-2xl shadow-md flex flex-col items-center group hover:scale-105 transition-all duration-300"
            >
              <span className={`text-4xl mb-2 text-teal-400 group-hover:text-fuchsia-400 transition-all`}><i className={`${skill.icon}`}></i></span>
              <span className="font-semibold mb-1">{skill.name}</span>
              <div className="w-full h-3 bg-gray-800 rounded-lg overflow-hidden mt-2 mb-1">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-teal-400 to-fuchsia-500"
                ></motion.div>
              </div>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </SectionFadeIn>

      <SectionFadeIn refProp={certificadosRef}>
        <Certificados />
      </SectionFadeIn>

      {/* Contacto */}
      <SectionFadeIn refProp={contactoRef}>
        <h2 className="text-2xl font-bold mb-4 text-teal-300 animate__animated animate__fadeIn text-center">Contacto</h2>
        <p className="text-gray-300 text-center mb-6 max-w-xl mx-auto">
          ¿Te interesó mi perfil? ¿Buscás alguien que combina datos, desarrollo y sentido común?
          <br />
          Escribime: <a className="underline hover:text-fuchsia-400 transition" href="mailto:tucorreo@ejemplo.com">ignaciopenamaria@gmail.com</a>
        </p>
      </SectionFadeIn>

      {/* Footer */}
      <footer className="mt-10 mb-2 text-center text-sm text-gray-500">
        Hecho con 💻 y mucha cafeína por Nachito | © {new Date().getFullYear()}
      </footer>
    </main>
  )
}

// Animación de fade in por scroll con Framer Motion (custom hook para secciones)
function SectionFadeIn({ children, refProp }) {
  const localRef = useRef(null)
  const ref = refProp ?? localRef

  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="py-16 px-6"
    >
      {children}
    </motion.section>
  )
}


function Card({ title, description, image, embed, slug, tecnologias, link }) {

  return (
    <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/80 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-400 border border-teal-900/40 flex flex-col items-center">
      {/* Visualización dinámica */}
      {embed ? (
        <div className="w-full mb-4 rounded-xl overflow-hidden shadow-md aspect-w-16 aspect-h-9 bg-gray-800">
          <iframe
            src={embed.link}
            title={embed.title || title}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full min-h-[340px] max-h-[400px] border-0 rounded-xl"
          ></iframe>
        </div>
      ) : (
        image && (
          <img
            src={image}
            alt={`Screenshot ${title}`}
            className="mb-4 rounded-xl shadow-md w-full h-48 object-cover object-top"
          />
        )
      )}

      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-300 mb-3 text-center">{description}</p>
      {tecnologias && (
        <div className="flex flex-wrap gap-2 mb-2 justify-center">
          {tecnologias.map((tec, idx) => (
            <span
              key={idx}
              className="bg-teal-700/40 text-teal-200 px-2 py-0.5 rounded text-xs font-mono"
            >
              {tec}
            </span>
          ))}
        </div>
      )}
      {link && (
        <Link
          href={link === "proyecto" ? `/proyectos/${slug}` : link}
          className="mt-2 text-fuchsia-400 hover:text-teal-300 underline text-sm"
        >
          Ver más
        </Link>
      )}
    </div>
  );
}

function WebPreview({ title, url, description }) {
  return (
    <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/80 
                    rounded-2xl shadow-xl border border-teal-900/40 overflow-hidden">

      {/* Barra navegador */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <div className="text-xs text-gray-300 truncate">
          {url}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-teal-300 hover:text-fuchsia-300 underline"
        >
          Abrir
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

      {/* Texto */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}
