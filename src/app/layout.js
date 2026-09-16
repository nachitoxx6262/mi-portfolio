import { Archivo, Courier_Prime, Caveat } from "next/font/google";
import "../../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Archivo (display y cuerpo), Courier Prime (etiquetas tipo máquina), Caveat (notas a mano).
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap", variable: "--font-archivo" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-courier" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], display: "swap", variable: "--font-caveat" });

export const metadata = {
  title: "Ignacio Peñamaria — Data & Systems",
  description:
    "Desarrollador fullstack con foco en datos. Sistemas en producción para una metalúrgica, una clínica y un hotel; reporting y análisis de ventas para dirección.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${archivo.variable} ${courier.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
