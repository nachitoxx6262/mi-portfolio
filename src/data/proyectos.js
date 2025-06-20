const proyectos = [
    {
    slug: "stock-logistica",
    title: "📦 Stock y Logística",
    description: "Análisis avanzado de datos, modelado relacional y visualización interactiva para optimizar la gestión de inventarios y procesos logísticos.",
    embed: {
        title: "Dashboard Power BI: Stock y Logística",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZTA2ZGVjMGItNjE0Ny00MmZlLTg4YjgtODQyOWY0NmExYjU4IiwidCI6ImFhM2EwOTgzLTFmZTEtNDQxOC04NzJmLWNiYmZhOTA1ZjZlMyIsImMiOjR9"
    },
    descripcionLarga: "Este proyecto fue desarrollado como ejercicio integrador en el área de ciencia de datos, simulando un caso real de optimización logística a partir de la base de datos Northwind. El objetivo principal fue diseñar y validar una solución de inteligencia de negocios (BI) capaz de monitorear, analizar y optimizar la gestión de inventarios en un entorno comercial. La metodología incluyó modelado relacional, automatización de consultas SQL avanzadas, integración de fuentes múltiples y el desarrollo de visualizaciones interactivas en Power BI. El dashboard resultante permite identificar cuellos de botella, anticipar quiebres de stock y optimizar la toma de decisiones mediante KPIs y alertas visuales. Adicionalmente, se automatizó la carga y transformación de datos, documentando todo el proceso técnico y de análisis.",
    items: [
        "Diseño y ejecución de un modelo relacional para integrar datos de productos, pedidos, proveedores y categorías.",
        "Automatización de consultas SQL para consolidar y transformar grandes volúmenes de datos en estructuras analíticas eficientes.",
        "Desarrollo de un dashboard interactivo en Power BI, con visualizaciones dinámicas, filtros avanzados y segmentación por categorías.",
        "Implementación de indicadores clave de desempeño (KPIs) para monitorear rotación de inventario, niveles de stock, tiempos de entrega y frecuencia de pedidos.",
        "Simulación de alertas visuales para productos críticos, inventarios bajos y patrones de alta rotación.",
        "Elaboración de documentación técnica detallada, abarcando desde la extracción de datos hasta la visualización final."
    ],
    screenshots: [
        "/proyectos/stock1.png",
        "/proyectos/stock2.png"
    ],
    miAporte: "Lideré tanto el diseño conceptual como la ejecución técnica, incluyendo la arquitectura de datos, la optimización de consultas SQL, la construcción del modelo semántico en Power BI y la estética del dashboard. También desarrollé la interfaz web en React para la presentación del proyecto en mi portfolio profesional, documentando de manera exhaustiva el flujo de trabajo y simulando escenarios de impacto operativo a partir de métricas logísticas clave.",
    tecnologias: [
        { nombre: "SQL", logo: "fas fa-database" },
        { nombre: "Power BI", logo: "fas fa-chart-bar" },
        { nombre: "Python", logo: "fab fa-python" },
        { nombre: "React", logo: "fab fa-react" },
        { nombre: "Tailwind CSS", logo: "fas fa-paint-brush" },
        { nombre: "Git", logo: "fab fa-git-alt" }
    ],
    conclusiones: "La solución desarrollada permitió simular una reducción del 30% en quiebres de stock y una mejora significativa en la eficiencia logística, gracias a una mayor visibilidad y explotación analítica de los datos. El proyecto evidencia cómo la ciencia de datos, combinada con herramientas de BI y procesos de automatización, genera valor real para la toma de decisiones en contextos empresariales. Esta experiencia refuerza la aplicabilidad de los principios y metodologías de la ciencia de datos en escenarios concretos de negocio.",
    link: "https://..."
}

    ,

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
