'use client';

import proyectos from '../../../data/proyectos';
import { motion } from 'framer-motion';

// Puedes hacer un diccionario con los logos de cada tecnología aquí:
const techIcons = {
  'Power BI': '/proyectos/powerbi.png',
  'SQL': '/proyectos/sql.png',
  'React': '/proyectos/react.png',
  'FastAPI': '/proyectos/fastapi.png',
  'ETL': '/proyectos/etl.png',
  'Python': '/proyectos/python.png',
  'PostgreSQL': '/proyectos/postgresql.png',
  // Agrega más según necesites
};

export default function ProyectoDetalle({ params }) {
  const { slug } = params;
  const proyecto = proyectos.find(p => p.slug === slug);

  if (!proyecto) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-fuchsia-400"
        >
          Proyecto no encontrado
        </motion.h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-teal-300 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
        >
          {proyecto.title}
        </motion.h1>

        {/* Imagen principal o embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-10 max-w-6xl mx-auto"
        >
          {proyecto.embed && proyecto.embed.link ? (
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 p-6 border-teal-800 h-[600px]">
              <iframe
                src={proyecto.embed.link}
                title={proyecto.embed.title || proyecto.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full border-0 rounded-xl"
              ></iframe>
            </div>
          ) : proyecto.image && (
            <img
              src={proyecto.image}
              alt={proyecto.title}
              className="rounded-2xl shadow-2xl w-full max-h-[420px] object-cover border-2 border-teal-800"
            />
          )}
        </motion.div>

        {/* Descripción extendida */}
        {proyecto.descripcionLarga && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.13 }}
            className="mb-7 text-lg text-gray-200 leading-relaxed animate__animated animate__fadeIn"
          >
            {proyecto.descripcionLarga}
          </motion.p>
        )}

        {/* Lista de items destacados */}
        {proyecto.items && proyecto.items.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mb-8 grid gap-3 bg-gray-900/80 p-4 rounded-xl shadow-inner"
          >
            {proyecto.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-teal-200 font-medium text-base">
                <span className="inline-block w-3 h-3 bg-teal-400 rounded-full animate-pulse"></span>
                {item}
              </li>
            ))}
          </motion.ul>
        )}

        {/* Galería de screenshots */}
        {proyecto.screenshots && proyecto.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.23 }}
            className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {proyecto.screenshots.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Screenshot ${proyecto.title} ${idx + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.09 * idx }}
                className="rounded-xl shadow-lg w-full h-48 object-cover border border-fuchsia-800"
              />
            ))}
          </motion.div>
        )}

        {/* Mi aporte */}
        {proyecto.miAporte && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19 }}
            className="mb-8 bg-gradient-to-r from-teal-900/30 via-gray-900/80 to-fuchsia-900/30 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-teal-200 font-bold text-xl mb-2 tracking-wide">Mi aporte</h3>
            <p className="text-gray-200">{proyecto.miAporte}</p>
          </motion.div>
        )}

        {/* Tecnologías */}
        {proyecto.tecnologias && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.21 }}
            className="mb-8"
          >
            <h3 className="text-fuchsia-300 font-bold text-xl mb-3">Tecnologías utilizadas</h3>
            <div className="flex flex-wrap gap-4 items-center">
              {proyecto.tecnologias.map((tec, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-gray-900/70 rounded-lg px-3 py-2 shadow-md hover:scale-105 transition-all"
        >
          <span className="w-10 h-10 mb-1 flex items-center justify-center text-3xl text-teal-400">
            <i className={tec.logo}></i>
          </span>
          <span className="text-teal-200 text-xs font-mono">{tec.nombre}</span>
        </div>
      ))}
            </div>
          </motion.div>
        )}

        {/* Conclusiones */}
        {proyecto.conclusiones && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mb-10 bg-gradient-to-r from-yellow-800/40 via-gray-900/70 to-teal-700/40 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-yellow-200 font-bold text-xl mb-2">Conclusiones / Resultados</h3>
            <p className="text-gray-100">{proyecto.conclusiones}</p>
          </motion.div>
        )}

        {/* Link externo */}
        {proyecto.link && (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-fuchsia-300 hover:text-teal-300 underline font-bold text-lg transition"
          >
            Ver más / Ir al dashboard
          </motion.a>
        )}
      </div>
    </main>
  );
}
