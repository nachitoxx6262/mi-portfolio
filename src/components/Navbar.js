import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ scrollTo, aboutRef, skillsRef, proyectosRef,certificadosRef, contactoRef }) {
    const [open, setOpen] = useState(false);

    const links = [
        { label: "Sobre mí", ref: aboutRef },
        { label: "Proyectos", ref: proyectosRef },
        { label: "Skills", ref: skillsRef },
        { label: "Certificados", ref: certificadosRef },
        { label: "Contacto", ref: contactoRef },
    ];

    const handleNavClick = (ref) => {
        scrollTo(ref);
        setOpen(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-950/80 via-gray-900/80 to-gray-800/80 shadow-md border-b border-teal-900/30 backdrop-blur-md">
            <div className="flex justify-between items-center px-6 py-3 max-w-5xl mx-auto">
                <span className="font-bold text-lg tracking-widest text-teal-300 drop-shadow-lg">
                    Mi portfolio
                </span>

                {/* Desktop menu */}
                <ul className="hidden md:flex gap-8 text-base font-semibold">
                    {links.map((link, idx) => (
                        <li
                            key={idx}
                            className="cursor-pointer hover:text-teal-300 transition"
                            onClick={() => handleNavClick(link.ref)}
                        >
                            {link.label}
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-teal-700/10 hover:bg-teal-800/20 transition"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Abrir menú"
                >
                    <svg
                        className="w-7 h-7 text-teal-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.2}
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            // Icono X (cerrar)
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            // Icono hamburguesa
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.23 }}
                        className="md:hidden flex flex-col gap-2 px-8 py-4 bg-gradient-to-b from-gray-950/95 via-gray-900/95 to-gray-800/90 border-b border-teal-900/40 shadow-xl rounded-b-2xl"
                    >
                        {links.map((link, idx) => (
                            <li
                                key={idx}
                                className="cursor-pointer py-2 text-base font-semibold text-teal-200 hover:text-fuchsia-400 transition"
                                onClick={() => handleNavClick(link.ref)}
                            >
                                {link.label}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;
