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
    },
    {
  slug: "dashboard-eficiencia-productiva",
  title: "🏭 Dashboard Ejecutivo: Eficiencia Productiva & Finanzas",
  description:
    "Panel ejecutivo en Power BI con KPIs de ingresos, márgenes, productividad y desperdicio. Incluye análisis temporal (MoM/YoY), cuadrantes de eficiencia y storytelling visual para toma de decisiones.",
  embed: {
    title: "Dashboard Power BI: Eficiencia Productiva & Finanzas",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNWVkMWJhYzctMWJhZi00ZTYyLThkZmMtYzMwNTQ4NjAwYzQ0IiwidCI6ImFhM2EwOTgzLTFmZTEtNDQxOC04NzJmLWNiYmZhOTA1ZjZlMyIsImMiOjR9"  // pega aquí tu enlace público si lo querés embebido
  },
  descripcionLarga:
    "Proyecto end-to-end de Business Intelligence orientado a dirección. Integra información de producción y finanzas para monitorear ingresos, márgenes, productividad (u/h) y perdidas. Se modeló la fecha, se construyeron medidas DAX robustas (MoM/YoY, moving average, targets) y se diseñó una capa visual ejecutiva en modo oscuro con reglas de color y cuadrantes de eficiencia (costo vs productividad).",
  items: [
    "Modelado de datos con tabla calendario, relaciones estrella y medidas DAX para KPIs (MoM, YoY, objetivos y desvíos).",
    "Capa de producción: productividad (unidades/hora), costo unitario (promedio y ponderado), waste % y capacidad.",
    "Cuadrantes de eficiencia por planta (Alta/Baja Prod × Alto/Bajo Costo) con color por punto y tooltips dinámicos.",
    "Página ejecutiva con KPIs, tendencia de ingresos vs. variación mensual y objetivos con semáforos.",
    "Diseño UI/UX modo oscuro, tipografía consistente, líneas de referencia y storytelling con insights automáticos."
  ],
  screenshots: [
    // "/proyectos/eficiencia/portada_ejecutiva.png",
    // "/proyectos/eficiencia/scatter_cuadrantes.png",
    // "/proyectos/eficiencia/heatmap_waste.png"
  ],
//   miAporte:
//     "Owner del modelado y del DAX (medidas, objetivos y comparativas), diseño visual, creación de reglas de color por cuadrante y construcción de los KPIs ejecutivos. Iteración junto al ‘cliente’ para definir métricas accionables.",
  tecnologias: [
    { nombre: "Power BI", logo: "fas fa-chart-bar" },
    { nombre: "DAX", logo: "fas fa-superscript" },
    { nombre: "SQL", logo: "fas fa-database" },
    { nombre: "Data Modeling", logo: "fas fa-project-diagram" },
    { nombre: "UX/UI", logo: "fas fa-paint-brush" },
    { nombre: "Git", logo: "fab fa-git-alt" }
  ],
  conclusiones:
    "El tablero permite visualizar, en una sola vista, el pulso del negocio: ingresos, márgenes y eficiencia operativa. Los cuadrantes de costo vs productividad aceleran la identificación de oportunidades y riesgos por planta. El diseño ejecutivo y los objetivos con semáforos facilitan la conversación directiva y priorizan acciones.",
  resumenEjecutivo: {
    titulo: "📈 Resumen Ejecutivo — Resultados y Tendencias",
    secciones: [
      {
        heading: "🎯 Propósito del proyecto",
        items: [
          "Unificar métricas financieras y operativas en un panel ejecutivo accionable.",
          "Medir tendencia mensual/anual y desempeño vs objetivos.",
          "Detectar ineficiencias (alto costo/baja prod) y oportunidades de mejora."
        ]
      },
      {
        heading: "📌 Indicadores clave (KPI)",
        items: [
          "Ingresos: $ 5,92 bill.",
          "Margen Bruto: 0,52",
          "Margen Operativo: 0,10",
          "Productividad (u/h): 208,35",
          "Tendencia Mensual (MoM): 0,08 vs objetivo 0,02"
        ]
      },
      {
        heading: "🔎 Hallazgos estratégicos",
        items: [
          "Aceleración de ingresos desde 2023 con MoM sostenido positivo.",
          "Plantas con alta productividad pero costo alto: foco en energía/materiales.",
          "Plantas en cuadrante ideal (alta prod/bajo costo) marcan mejores prácticas.",
          "Las perdidas muestran estacionalidad; Córdoba mantiene el nivel más bajo promedio."
        ]
      },
      {
        heading: "💡 Valor generado",
        items: [
          "Visión 360° de negocio en un único panel ejecutable.",
          "Priorización de iniciativas por cuadrante (impacto vs esfuerzo).",
          "Gobernanza de indicadores con metas y desvíos (semáforos y alertas).",
          "Base para revisiones mensuales con dirección y operaciones."
        ]
      }
    ]
  },
  link: "" // si vas a publicar repo o demo, colocalo aquí
}

    // {dashboard-eficiencia-productiva
    //     slug: "sistema-hotelero",
    //     title: "🏨 Sistema Hotelero",
    //     description: "App para administrar habitaciones, reservas y clientes.",
    //     image: "/proyectos/relaciones_db.png",
    //     descripcionLarga: "Desarrollo de backend y frontend para un sistema integral de gestión hotelera.",
    //     tecnologias: [
    //         { nombre: "SQL", logo: "fas fa-database" },
    //         { nombre: "Power BI", logo: "fas fa-chart-bar" },
    //         { nombre: "Python", logo: "fab fa-python" },
    //         { nombre: "React", logo: "fab fa-react" },
    //         // ...agregá las que uses
    //     ],
    //     miAporte: "Diseño y desarrollo de la base de datos, API REST y lógica de negocio.",
    //     conclusiones: "Este proyecto representa una simulación funcional de un sistema de gestión hotelera, centrado en la administración de reservas, clientes, empresas y habitaciones. A través del desarrollo backend con FastAPI, SQLAlchemy y PostgreSQL, se logró estructurar una base de datos relacional robusta y una API RESTful capaz de manejar las principales operaciones del flujo operativo.Si bien no se implementó en un entorno real, el modelo permite visualizar cómo la digitalización de procesos como la gestión de reservas o el control de habitaciones podría optimizar las operaciones internas, reducir errores manuales y facilitar la trazabilidad de datos. El sistema se diseñó priorizando la escalabilidad, la claridad en la estructura de datos y el mantenimiento futuro.Esta experiencia aportó una comprensión más profunda del diseño de bases de datos normalizadas, la construcción de endpoints eficientes, y la organización de proyectos profesionales orientados a microservicios, ofreciendo una base sólida para futuros despliegues en producción.",
    //     resumenEjecutivo: {
    //         titulo: "🏨 Sistema de Gestión Hotelera - Backend con FastAPI",
    //         secciones: [
    //             {
    //                 heading: "Objetivo del Proyecto",
    //                 items: [
    //                     "Desarrollar una API REST modular, escalable y robusta para la gestión de reservas, clientes, empresas y habitaciones dentro de un entorno hotelero.",
    //                     "Implementar un backend reutilizable, listo para integrarse con un sistema frontend o panel administrativo en el futuro."
    //                 ]
    //             },
    //             {
    //                 heading: "Alcance y Funcionalidades",
    //                 items: [
    //                     "Gestión de clientes individuales y corporativos, con vinculación opcional a empresas.",
    //                     "Control de habitaciones con estados actualizados automáticamente según las reservas.",
    //                     "Reservas asociadas a empresas o clientes, con fechas de ingreso/egreso y validaciones.",
    //                     "Modelo de datos relacional completo con relaciones entre clientes, empresas, reservas y habitaciones.",
    //                     "Sistema preparado para futuras funcionalidades como autenticación, reportes, o integración con BI."
    //                 ]
    //             },
    //             {
    //                 heading: "Diseño del Sistema",
    //                 items: [
    //                     "Estructura modular del backend: `routers`, `models`, `schemas`, `database`.",
    //                     "Modelos definidos con SQLAlchemy y validaciones con Pydantic.",
    //                     "Separación de responsabilidades y código limpio siguiendo buenas prácticas de desarrollo.",
    //                     "Base de datos relacional normalizada, con claves foráneas y relaciones 1:N y N:1."
    //                 ]
    //             },
    //             {
    //                 heading: "Documento ERS (Especificación de Requerimientos del Software)",
    //                 items: [
    //                     "Actores definidos: Administrador del sistema, Cliente (individual o empresa).",
    //                     "Requerimientos funcionales: ABM de clientes, habitaciones, reservas, y empresas.",
    //                     "Requerimientos no funcionales: Modularidad, mantenimiento sencillo, escalabilidad.",
    //                     "Reglas de negocio implementadas (ej.): no permitir reservas en habitaciones ocupadas, asignar cliente o empresa, validación de fechas."
    //                 ]
    //             },
    //             {
    //                 heading: "Mi Aporte",
    //                 items: [
    //                     "Diseñé el modelo de datos completo y su implementación en SQLAlchemy.",
    //                     "Desarrollé todos los endpoints REST usando FastAPI, con documentación automática.",
    //                     "Implementé lógica de negocio y validaciones robustas en Pydantic.",
    //                     "Organicé la estructura del backend para facilitar futuras expansiones.",
    //                     "Documenté cada parte del sistema, tanto técnica como funcionalmente."
    //                 ]
    //             },
    //             {
    //                 heading: "Tecnologías Utilizadas",
    //                 items: [
    //                     "⚡ FastAPI para el backend principal.",
    //                     "🐘 PostgreSQL como sistema de base de datos.",
    //                     "🔧 SQLAlchemy para modelado ORM.",
    //                     "📦 Pydantic para validaciones y schemas.",
    //                     "💻 Git y GitHub para control de versiones y documentación.",
    //                     "🧠 Pensado para integrarse con frontend en React o dashboards BI."
    //                 ]
    //             },
    //             {
    //                 heading: "Conclusiones",
    //                 items: [
    //                     "Este sistema demuestra cómo estructurar un backend profesional para una aplicación administrativa real.",
    //                     "La separación de capas, el modelado relacional y la lógica de negocio aseguran la mantenibilidad del sistema.",
    //                     "Sirve como base para proyectos más complejos, ya sea en contextos hoteleros, administrativos o comerciales."
    //                 ]
    //             }
    //        ]
    //    },
    //    link: "",
    //},
    // ...otros proyectos
];
export default proyectos;
