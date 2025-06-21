import { Geist, Geist_Mono,Inter } from "next/font/google";
import "../../styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nacho Portfolio 💼",
  description: "Work & Cofee ☕",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="font-sans bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
