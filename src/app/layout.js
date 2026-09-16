import { Archivo, Courier_Prime, Caveat } from "next/font/google";
import "../../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Archivo (display y cuerpo), Courier Prime (etiquetas tipo máquina), Caveat (notas a mano).
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"], display: "swap", variable: "--font-archivo" });
const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-courier" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], display: "swap", variable: "--font-caveat" });

const DESCRIPCION =
  "Desarrollador fullstack con foco en datos. Sistemas a medida en uso diario, como el ERP de una metalúrgica y la plataforma de una clínica, y reporting para decidir con los números que la empresa ya tiene.";

export const metadata = {
  metadataBase: new URL("https://www.ignaciopenamaria.com"),
  title: { default: "Ignacio Peñamaria — Data & Systems", template: "%s · Ignacio Peñamaria" },
  description: DESCRIPCION,
  applicationName: "Ignacio Peñamaria",
  authors: [{ name: "Ignacio Peñamaria", url: "https://www.ignaciopenamaria.com" }],
  keywords: ["desarrollador fullstack", "análisis de datos", "Power BI", "ERP a medida", "reporting", "FastAPI", "React", "Santa Fe"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "es_AR", url: "/", siteName: "Ignacio Peñamaria",
    title: "Ignacio Peñamaria — Data & Systems", description: DESCRIPCION,
  },
  twitter: { card: "summary_large_image", title: "Ignacio Peñamaria — Data & Systems", description: DESCRIPCION },
};

export const viewport = {
  themeColor: "#181818",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${archivo.variable} ${courier.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
