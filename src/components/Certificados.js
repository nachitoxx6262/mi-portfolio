"use client";
import { motion } from "framer-motion";

const certificados = [
    {
        nombre: "Power BI",
        imagen: "Certificado-Power-BI-EducaciónIT.png",
        link: "https://www.educacionit.com/perfil/ignacio-penamaria-1075487/certificado/76840?_gl=1*h1kmpo*_ga*MjA5NTMzMDM0OC4xNzQ4OTg2NDIy*_ga_R8GR8LL2B8*czE3NTA4ODU3MjkkbzEwJGcxJHQxNzUwODg1NzM1JGo1NCRsMSRoMTczNTc5MDQyOQ..",
        color: "border-teal-400"
    },
    {
        nombre: "Introducción a Bases de Datos y SQL",
        imagen: "Certificado-Introducción-a-Bases-de-Datos-y-SQL-EducaciónIT.png",
        link: "https://www.educacionit.com/perfil/ignacio-penamaria-1075487/certificado/76884?_gl=1*gg1pbm*_ga*MjA5NTMzMDM0OC4xNzQ4OTg2NDIy*_ga_R8GR8LL2B8*czE3NTA4ODU3MjkkbzEwJGcxJHQxNzUwODg4NDkyJGoyNyRsMSRoMTczNTc5MDQyOQ..",
        color: "border-fuchsia-400"
    },
    {
        nombre: "Desarrollador Web Full Stack",
        imagen: "henry.png",
        link: "",
        color: "border-teal-400"
    },

];

export default function Certificados() {
    return (
        <section className="py-16 from-gray-950 via-gray-900 to-gray-800">
            <motion.h2
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-teal-300 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent text-center drop-shadow tracking-tight"
            >
                Certificados
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-gray-300 text-center mb-10 max-w-2xl mx-auto text-lg"
            >
                Estos son algunos de mis certificados, reflejo de mi formación y compromiso con el aprendizaje continuo.
            </motion.p>
            <div className="flex flex-col gap-12 items-center w-full">
                {certificados.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.97, y: 12 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className={`
        flex flex-col items-center justify-center
        bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/80
        rounded-2xl shadow-2xl border-2 ${cert.color}
        hover:shadow-[0_0_32px_4px] hover:shadow-teal-300/40
        transition-all duration-300
        w-full max-w-[1000px] p-2
      `}
                    >
                        <div className="w-full flex justify-center">
                            {cert.link ? (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block w-full"
                                >
                                    <img
                                        src={cert.imagen}
                                        alt={cert.nombre}
                                        className="w-full max-w-[1000px] h-auto object-contain rounded-xl shadow-lg group-hover:brightness-110 transition-all duration-300"
                                        style={{
                                            minWidth: "0",  // Para evitar overflow raro en flex
                                        }}
                                    />
                                </a>
                            ) : (
                                <img
                                    src={cert.imagen}
                                    alt={cert.nombre}
                                    className="w-full max-w-[1000px] h-auto object-contain rounded-xl shadow-lg group-hover:brightness-110 transition-all duration-300"
                                    style={{
                                        minWidth: "0",
                                    }}
                                />
                            )}
                        </div>
                        <span
                            className="mt-4 text-xl sm:text-2xl font-bold text-center drop-shadow-lg"
                            style={{
                                color:
                                    cert.color.includes("teal") ? "#2dd4bf" : cert.color.includes("fuchsia") ? "#e879f9" : "#fff"
                            }}
                        >
                            {cert.nombre}
                        </span>
                    </motion.div>
                ))}
            </div>


        </section>
    );
}
