// components/VisualizadorDeInformes.jsx

'use client';

import { motion } from 'framer-motion';

/**
 * VisualizadorDeInformes
 * ----------------------
 * Componente genérico para mostrar un informe ejecutivo.
 * Recibe:
 *  - titulo: string → título principal (opcional, default "Informe Ejecutivo")
 *  - secciones: Array<{ heading: string, items: string[] }> → cada sección con su encabezado (h3) y lista de textos.
 *
 * Ejemplo de uso:
 * <VisualizadorDeInformes
 *    titulo="Visión General"
 *    secciones=[
 *      { heading: 'Indicadores Clave (KPI)', items: ['Pedidos: 830', 'Ingresos: $1.2M'] },
 *      { heading: 'Hallazgos', items: ['Germany lidera en pedidos', 'Beverages domina en ventas'] }
 *    ]
 * />
 */
export default function VisualizadorDeInformes({ titulo = 'Informe Ejecutivo', secciones = [] }) {
  if (!secciones.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-10 bg-gradient-to-r from-green-800/40 via-gray-900/70 to-teal-600/40 p-6 rounded-xl shadow-md"
    >
      {/* Título principal */}
      <h3 className="text-green-200 font-bold text-2xl mb-6 flex items-center gap-2">
        <i className="fas fa-book-open text-green-300"></i> {titulo}
      </h3>

      {/* Render dinámico de secciones */}
      {secciones.map((sec, idx) => (
        <div key={idx} className="mb-6 last:mb-0">
          {sec.heading && (
            <h4 className="text-teal-300 font-semibold mb-2 flex items-center gap-1">
              <i className="fas fa-arrow-right text-teal-400"></i> {sec.heading}
            </h4>
          )}

          {Array.isArray(sec.items) && sec.items.length > 0 && (
            <ul className="list-disc list-inside text-gray-100 space-y-1 pl-2">
              {sec.items.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </motion.div>
  );
}
