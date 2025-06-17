"use client";
import '@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import Navbar from "../components/Navbar";
import { useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const skills = [
  { name: 'Python', level: 65, icon: 'fab fa-python' },
  { name: 'SQL', level: 70, icon: 'fas fa-database' },
  { name: 'Power BI', level: 85, icon: 'fas fa-chart-bar' },
  { name: 'React', level: 80, icon: 'fab fa-react' },
  { name: 'FastAPI', level: 80, icon: 'fas fa-bolt' },
  { name: 'Machine Learning', level: 75, icon: 'fas fa-brain' },
  { name: 'Tailwind', level: 75, icon: 'fab fa-css3-alt' },
]

const proyectos = [
  {
    title: "📊Dashboard de Demoras de Vuelos",
    description: "Análisis exploratorio y visualizaciones interactivas con Power BI y SQL para entender patrones de demoras y optimizar la gestión aeroportuaria.",
    image: "/proyectos/dashboard_vuelos.png",
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "https://tu-demo-o-repo.com",
  },
  {
    title: "🏨 Sistema Hotelero",
    description: "Administra habitaciones, empresas y clientes con FastAPI y PostgreSQL.",
    image: "/proyectos/dashboard_vuelos.png",
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "https://tu-demo-o-repo.com",
  },
  {
    title: "📦 Stock y Logística",
    description: "Dashboard BI + consultas SQL para mejorar la eficiencia logística.",
    image: "/proyectos/dashboard_vuelos.png",
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "https://tu-demo-o-repo.com",
  },
  {
    title: "🚀 Machine Learning Agrícola",
    description: "Predicción de rendimiento de cultivos con regresión y redes neuronales.",
    image: "/proyectos/dashboard_vuelos.png",
    tecnologias: ["Power BI", "SQL", "Data Cleaning"],
    link: "https://tu-demo-o-repo.com",
  },
]

export default function Home() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const proyectosRef = useRef(null)
  const contactoRef = useRef(null)

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: "smooth" })

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-sans overflow-x-hidden">

      <Navbar
        scrollTo={scrollTo}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        proyectosRef={proyectosRef}
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
          Soy Nachito, alguien que disfruta buscarle la vuelta a todo y encontrar formas más simples y eficientes de hacer las cosas. Me motiva transformar datos en valor real y resolver desafíos que otros suelen dejar para después.
          <br /><br />
          Las ganas de aprender no se negocian. Mantengo la mirada analítica, pero siempre con creatividad y humor: para mí, las mejores soluciones aparecen cuando hay buena onda y colaboración.
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
                image={proy.image}
                tecnologias={proy.tecnologias}
                link={proy.link}
              />
            </motion.div>
          ))}
        </div>
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
  const isInView = useInView(refProp, { once: true })
  return (
    <motion.section
      ref={refProp}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="py-16 px-6"
    >
      {children}
    </motion.section>
  )
}

function Card({ title, description, image, tecnologias, link }) {
  return (
    <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/80 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-400 border border-teal-900/40 flex flex-col items-center">
      <img
        src={image}
        alt={`Screenshot ${title}`}
        className="mb-4 rounded-xl shadow-md w-full h-48 object-cover object-top"
      />
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-fuchsia-400 hover:underline text-sm"
        >
          Ver más
        </a>
      )}
    </div>
  );
}
