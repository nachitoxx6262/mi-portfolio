const proyectos = [
  {
    slug: "stock-logistica",
    title: "📦 Stock y Logística",
    description: "Dashboard BI + consultas SQL para mejorar la eficiencia logística.",
    embed: {
      title: "Dashboard Power BI: Stock y Logística",
      link: "https://app.powerbi.com/view?r=eyJrIjoiZTA2ZGVjMGItNjE0Ny00MmZlLTg4YjgtODQyOWY0NmExYjU4IiwidCI6ImFhM2EwOTgzLTFmZTEtNDQxOC04NzJmLWNiYmZhOTA1ZjZlMyIsImMiOjR9"
    },
    descripcionLarga: "Desarrollo de un dashboard interactivo para analizar el movimiento y la gestión de stock en tiempo real. Se automatizó la carga de datos y se generaron indicadores clave de desempeño.",
    items: [
      "Automatización de consultas SQL para consolidar información.",
      "Visualización dinámica de niveles de stock.",
      "Alertas para baja de inventario y rotación.",
    ],
    screenshots: [
      "/proyectos/stock1.png",
      "/proyectos/stock2.png"
    ],
    miAporte: "Lideré el análisis de datos y la creación del dashboard, desde la conexión a fuentes hasta la visualización final y capacitación al usuario.",
   tecnologias: [
    { nombre: "SQL", logo: "fas fa-database" },
    { nombre: "Power BI", logo: "fas fa-chart-bar" },
    { nombre: "Python", logo: "fab fa-python" },
    { nombre: "React", logo: "fab fa-react" },
    // ...agregá las que uses
  ],
    conclusiones: "La solución permitió reducir los quiebres de stock un 30% y optimizar la toma de decisiones en logística.",
    link: "https://..."
  },
  {
    slug: "sistema-hotelero",
    title: "🏨 Sistema Hotelero",
    description: "App para administrar habitaciones, reservas y clientes.",
    image: "/proyectos/sistema_hotelero.png",
    descripcionLarga: "Desarrollo de backend y frontend para un sistema integral de gestión hotelera.",
    tecnologias: [
    { nombre: "SQL", logo: "fas fa-database" },
    { nombre: "Power BI", logo: "fas fa-chart-bar" },
    { nombre: "Python", logo: "fab fa-python" },
    { nombre: "React", logo: "fab fa-react" },
    // ...agregá las que uses
  ],
    miAporte: "Diseño y desarrollo de la base de datos, API REST y lógica de negocio.",
    conclusiones: "Permitió digitalizar el 100% de las reservas y reducir los errores de carga.",
    link: "",
  },
  // ...otros proyectos
];
export default proyectos;
