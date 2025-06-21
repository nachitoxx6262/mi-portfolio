const proyectos = [
    {
        slug: "stock-logistica",
        title: "📦 NORTHWIND ANALYTICS",
        description: "Análisis avanzado de datos, modelado relacional y visualización interactiva para optimizar la gestión de inventarios y procesos logísticos.",
        embed: {
            title: "Dashboard Power BI: Stock y Logística",
            link: "https://app.powerbi.com/view?r=eyJrIjoiZTA2ZGVjMGItNjE0Ny00MmZlLTg4YjgtODQyOWY0NmExYjU4IiwidCI6ImFhM2EwOTgzLTFmZTEtNDQxOC04NzJmLWNiYmZhOTA1ZjZlMyIsImMiOjR9"
        },
        descripcionLarga: "Este proyecto fue desarrollado como ejercicio integrador en el área de ciencia de datos, simulando un caso real de optimización logística a partir de la base de datos Northwind. El objetivo principal fue diseñar y validar una solución de inteligencia de negocios (BI) capaz de monitorear, analizar y optimizar la gestión de inventarios en un entorno comercial.",
        items: [
            "Diseño y ejecución de un modelo relacional para integrar datos de productos, pedidos, proveedores y categorías.",
            "Automatización de consultas SQL para consolidar y transformar grandes volúmenes de datos en estructuras analíticas eficientes.",
            "Desarrollo de un dashboard interactivo en Power BI, con visualizaciones dinámicas, filtros avanzados y segmentación por categorías.",
            "Implementación de indicadores clave de desempeño (KPIs) para monitorear rotación de inventario, niveles de stock, tiempos de entrega y frecuencia de pedidos.",
            "Simulación de alertas visuales para productos críticos, inventarios bajos y patrones de alta rotación.",
        ],
        screenshots: [
        ],
        miAporte: "",
        tecnologias: [
            { nombre: "SQL", logo: "fas fa-database" },
            { nombre: "Power BI", logo: "fas fa-chart-bar" },
            { nombre: "React", logo: "fab fa-react" },
            { nombre: "Tailwind CSS", logo: "fas fa-paint-brush" },
            { nombre: "Git", logo: "fab fa-git-alt" }
        ],
        conclusiones: "Este proyecto fue una excelente oportunidad para aplicar de forma práctica los conceptos de modelado de datos, visualización y análisis dentro de un entorno simulado. Aunque trabajamos con una base ficticia como Northwind, la construcción del dashboard permitió desarrollar una visión integral del negocio, tomando decisiones de diseño orientadas a replicar escenarios reales. A lo largo del proceso aprendí a identificar patrones, construir indicadores clave y comunicar hallazgos de manera visual y efectiva. Más allá de las métricas, lo valioso fue el proceso: desde entender las relaciones entre tablas hasta lograr una narrativa visual clara y funcional. El resultado no busca representar una empresa real, sino demostrar cómo las herramientas de Business Intelligence pueden estructurar información compleja y generar valor incluso en entornos simulados.",
        resumenEjecutivo: {
            titulo: "📦 Dashboard & Business Intelligence",
            secciones: [
                {
                    heading: "🎯 Propósito del proyecto",
                    items: [
                        "Diseñar un tablero ejecutivo capaz de monitorear inventarios, logística y ventas de forma integrada.",
                        "Transformar datos crudos de Northwind en información accionable para la toma de decisiones.",
                        "Demostrar habilidades de modelado de datos, visualización interactiva y narrativa analítica."
                    ]
                },
                {
                    heading: "📌 Indicadores clave (KPI)",
                    items: [
                        "Pedidos procesados: 830",
                        "Productos vendidos: 2 155",
                        "Ingresos totales: $ 1 265 793",
                        "Clientes únicos: 89",
                        "País con más pedidos: Germany",
                        "Categoría top ventas: Beverages"
                    ]
                },
                {
                    heading: "🔎 Hallazgos estratégicos",
                    items: [
                        "El 80 % de los ingresos proviene de 4 categorías, con **Beverages** y **Dairy Products** a la cabeza.",
                        "**Germany** concentra el mayor número de pedidos, seguido por UK y USA → oportunidad de refuerzo logístico en Europa.",
                        "Se detectan productos críticos (ABC–A) con stock < 10 unid., riesgo de quiebre que requiere reposición prioritaria.",
                        "El tiempo promedio de entrega es 4 días; sin embargo, existen outliers de más de 10 días vinculados a un transportista concreto."
                    ]
                },
                {
                    heading: "💡 Valor generado",
                    items: [
                        "Visión unificada que reduce el tiempo de reporte manual y mejora la **visibilidad operativa**.",
                        "Simulación de un **30 % menos de quiebres de stock** gracias a alertas tempranas.",
                        "Base de evidencias para renegociar contratos logísticos y reequilibrar inventario por categoría.",
                        "Ejemplo tangible de cómo la ciencia de datos y BI aportan rentabilidad y eficiencia al negocio."
                    ]
                }
            ]
        },
        link: ""
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
