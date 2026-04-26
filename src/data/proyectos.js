const proyectos = [
    {
        slug: "sistema-hotelero",
        title: "🏨 Sistema de Gestión Hotelera",
        description: "Sistema integral para centralizar la operación diaria de un hotel: habitaciones, reservas, disponibilidad en tiempo real y registro de huéspedes. En producción.",
        descripcionLarga: "Se desarrolló un sistema de gestión hotelera pensado para centralizar la operación diaria del establecimiento. El objetivo fue ordenar procesos que normalmente se manejan de forma manual o dispersa: control de habitaciones, reservas, estado de ocupación y registro de huéspedes. Hoy está desplegado y operativo en hotel.cuneusdata.com bajo el sello de Cuneus Data Studio.",
        items: [
            "Gestión de habitaciones con estados dinámicos: disponibles, ocupadas, reservadas o en limpieza.",
            "Registro de huéspedes individuales y empresas asociadas.",
            "Control de disponibilidad en tiempo real desde un único panel.",
            "Organización de reservas y asignación de habitaciones.",
            "Visualización clara del estado operativo del hotel.",
            "Base preparada para ampliaciones: facturación, historial de estadías y reportes.",
        ],
        screenshots: [],
        miAporte: "Diseño y desarrollo completo del sistema: modelo de datos relacional, API REST, lógica de negocio y frontend operativo. Proyecto desplegado en producción bajo Cuneus Data Studio.",
        tecnologias: [
            { nombre: "React", logo: "fab fa-react" },
            { nombre: "FastAPI", logo: "fas fa-bolt" },
            { nombre: "Python", logo: "fab fa-python" },
            { nombre: "PostgreSQL", logo: "fas fa-database" },
            { nombre: "Tailwind CSS", logo: "fas fa-paint-brush" },
            { nombre: "Git", logo: "fab fa-git-alt" },
        ],
        conclusiones: "Este sistema permite que la administración tenga una visión clara del negocio y que el personal trabaje con procesos más ordenados, rápidos y confiables. No es un ejercicio académico: está en producción y siendo usado en operación real.",
        resumenEjecutivo: {
            titulo: "🏨 Sistema Hotelero — En Producción",
            secciones: [
                {
                    heading: "🎯 Propósito del proyecto",
                    items: [
                        "Centralizar la operación diaria del hotel en una sola plataforma.",
                        "Eliminar procesos manuales y dispersos en papel o planillas.",
                        "Dar visibilidad en tiempo real del estado operativo del establecimiento.",
                    ]
                },
                {
                    heading: "📌 Funcionalidades clave",
                    items: [
                        "Control de habitaciones con estados dinámicos (disponible, ocupada, reservada, en limpieza).",
                        "ABM de huéspedes con vinculación opcional a empresas.",
                        "Reservas con asignación de habitación y validación de fechas.",
                        "Panel operativo con disponibilidad en tiempo real.",
                    ]
                },
                {
                    heading: "🔎 Diseño del sistema",
                    items: [
                        "Backend modular con FastAPI, SQLAlchemy y PostgreSQL.",
                        "Relaciones 1:N entre huéspedes, empresas, habitaciones y reservas.",
                        "Frontend React con Tailwind para uso ágil desde escritorio.",
                        "Arquitectura preparada para escalar: facturación, reportes y estadísticas.",
                    ]
                },
                {
                    heading: "💡 Valor generado",
                    items: [
                        "Operación más rápida, ordenada y sin errores manuales.",
                        "Visión centralizada del negocio desde un único panel.",
                        "Base sólida para incorporar facturación, historial y reportes.",
                        "Sistema en producción real — no solo un ejercicio académico.",
                    ]
                }
            ]
        },
        link: "https://hotel.cuneusdata.com/"
    },
    {
        slug: "sistema-comercial",
        title: "💼 Sistema Comercial para Vendedores",
        description: "Plataforma de gestión comercial para equipos de ventas: clientes, rendimiento, comisiones, segmentación geográfica y dashboards de seguimiento estratégico.",
        descripcionLarga: "Se diseñó un sistema comercial orientado a la gestión de vendedores, clientes, ventas y seguimiento del rendimiento comercial. Está pensado para empresas con equipos de venta que necesitan control, visibilidad y análisis para tomar mejores decisiones. Disponible en producción como parte de la oferta de Cuneus Data Studio.",
        items: [
            "Gestión de vendedores y clientes con historial de actividad.",
            "Consulta de ventas por período y análisis de tendencias.",
            "Seguimiento de rendimiento y visualización de comisiones.",
            "Segmentación geográfica y comercial de la cartera de clientes.",
            "Análisis de clientes activos, inactivos y oportunidades de reactivación.",
            "Integración con dashboards para seguimiento estratégico.",
            "Base preparada para automatización de consultas mediante chatbot.",
        ],
        screenshots: [],
        miAporte: "Diseño del sistema completo: arquitectura de datos, lógica de negocio, integración de dashboards y despliegue en producción bajo Cuneus Data Studio.",
        tecnologias: [
            { nombre: "React", logo: "fab fa-react" },
            { nombre: "Next.js", logo: "fas fa-code" },
            { nombre: "SQL", logo: "fas fa-database" },
            { nombre: "JavaScript", logo: "fab fa-js" },
            { nombre: "Tailwind CSS", logo: "fas fa-paint-brush" },
            { nombre: "Git", logo: "fab fa-git-alt" },
        ],
        conclusiones: "Este sistema transforma datos sueltos en información útil. En vez de vender a ciegas, se empieza a vender con criterio. Actualmente en producción y disponible para empresas con equipos de venta.",
        resumenEjecutivo: {
            titulo: "💼 Sistema Comercial — Gestión y Análisis de Ventas",
            secciones: [
                {
                    heading: "🎯 Propósito del proyecto",
                    items: [
                        "Dar a empresas y vendedores herramientas para entender su desempeño real.",
                        "Centralizar la gestión de clientes, ventas y comisiones en un único sistema.",
                        "Detectar oportunidades de venta y reactivar clientes inactivos.",
                    ]
                },
                {
                    heading: "📌 Funcionalidades clave",
                    items: [
                        "Panel de vendedores con resultados individuales y comparativos.",
                        "Historial de ventas por período, cliente y zona geográfica.",
                        "Cálculo y visualización de comisiones en tiempo real.",
                        "Segmentación de cartera: activos, inactivos y de alto valor.",
                    ]
                },
                {
                    heading: "🔎 Arquitectura del sistema",
                    items: [
                        "Frontend en React + Next.js con diseño responsive.",
                        "Base de datos relacional con SQL para análisis de históricos.",
                        "Integración con dashboards BI para reportes ejecutivos.",
                        "Preparado para conectar con chatbot de consultas automatizadas.",
                    ]
                },
                {
                    heading: "💡 Valor generado",
                    items: [
                        "Los vendedores ven su rendimiento y toman acción sin esperar informes.",
                        "La empresa detecta zonas frías y clientes en riesgo de abandono.",
                        "Las comisiones se calculan automáticamente, eliminando disputas.",
                        "Sistema en producción, usado por equipos comerciales reales.",
                    ]
                }
            ]
        },
        link: "https://www.cuneusdata.com/cuneus-comercial"
    },
    {
        slug: "bot-agenda-medica",
        title: "🏥 Sistema de Gestión Clínica",
        description: "Plataforma healthtech integral en producción: historia clínica digital, registro de pacientes, accesos diferenciados por rol para médicos, gestión de turnos y bot WhatsApp de agendamiento automatizado 24/7.",
        descripcionLarga: "Se desarrolló un bot conversacional orientado a la gestión de turnos médicos. El sistema permite que pacientes puedan consultar disponibilidad, elegir profesionales, seleccionar días y horarios, y avanzar en el proceso de reserva de forma automatizada. Sin intervención humana en el flujo estándar, con navegación por menús y opción de retroceso en cada paso.",
        items: [
            "Atención automatizada 24/7 por mensajería (WhatsApp).",
            "Selección de especialidad o profesional médico.",
            "Consulta de días disponibles con visualización de agenda.",
            "Visualización de horarios disponibles en tiempo real.",
            "Reserva de turnos de forma guiada paso a paso.",
            "Navegación conversacional con menús claros y opción de retroceso.",
            "Integración con lógica de agenda y control de disponibilidad.",
        ],
        screenshots: [],
        miAporte: "Desarrollo completo del bot: diseño del flujo conversacional, integración con lógica de agenda, gestión de estados y despliegue para uso productivo.",
        tecnologias: [
            { nombre: "Node.js", logo: "fab fa-node-js" },
            { nombre: "WhatsApp API", logo: "fab fa-whatsapp" },
            { nombre: "JavaScript", logo: "fab fa-js" },
            { nombre: "PostgreSQL", logo: "fas fa-database" },
            { nombre: "Git", logo: "fab fa-git-alt" },
        ],
        conclusiones: "El bot permite atender consultas repetitivas de forma automática, ordenada y escalable. Básicamente hace el trabajo pesado sin cansarse ni pedir café. Ideal para clínicas, consultorios y centros de salud con alto volumen de consultas.",
        resumenEjecutivo: {
            titulo: "🤖 Bot de Turnos Médicos — Automatización de Agenda",
            secciones: [
                {
                    heading: "🎯 Propósito del proyecto",
                    items: [
                        "Automatizar el proceso de asignación de turnos para reducir carga administrativa.",
                        "Mejorar la experiencia del paciente con atención inmediata y disponible 24/7.",
                        "Eliminar errores y demoras en la coordinación de agenda médica.",
                    ]
                },
                {
                    heading: "📌 Funcionalidades clave",
                    items: [
                        "Menú conversacional para seleccionar especialidad o médico.",
                        "Consulta dinámica de disponibilidad por día y horario.",
                        "Confirmación y registro de turno de forma completamente automatizada.",
                        "Opción de retroceder y corregir pasos sin perder el contexto.",
                    ]
                },
                {
                    heading: "🔎 Diseño del sistema",
                    items: [
                        "Bot construido sobre WhatsApp API con gestión de estados conversacionales.",
                        "Integración con base de datos de agenda y disponibilidad médica.",
                        "Flujo modular, fácil de ampliar con nuevas especialidades o profesionales.",
                        "Diseñado para escalar a entornos de alto volumen de consultas.",
                    ]
                },
                {
                    heading: "💡 Valor generado",
                    items: [
                        "Reducción significativa de llamadas entrantes y carga en recepción.",
                        "Disponibilidad de atención fuera del horario laboral.",
                        "Menos errores en asignación y eliminación de solapamientos de turnos.",
                        "Base para integrar recordatorios automáticos, cancelaciones y listas de espera.",
                    ]
                }
            ]
        },
        link: ""
    },
    {
        slug: "sistema-restaurant",
        title: "🍽️ Sistema de Gestión para Restaurant",
        description: "Sistema gastronómico para la operación diaria de restaurantes: toma de pedidos por mesa, gestión de mesas, comandas digitales e impresión automática para cocina.",
        descripcionLarga: "Se desarrolló un sistema gastronómico orientado a la operación diaria de restaurantes, con foco en la toma de pedidos, gestión de mesas, comandas e impresión para cocina. La idea fue construir una base sólida para un sistema moderno, rápido y adaptable al flujo real del salón. Proyecto actualmente en desarrollo activo.",
        items: [
            "Gestión de mesas y control de estado de ocupación en tiempo real.",
            "Creación de pedidos por mesa con productos, cantidades y notas especiales.",
            "Resumen del pedido con totales claros y desglose por ítem.",
            "Lógica de comandas para comunicación directa con cocina.",
            "Preparación para impresión automática de tickets en comandera.",
            "Base para módulos de cocina (KDS), caja, stock e inventario.",
            "Interfaz pensada para uso ágil en contextos de alta rotación.",
        ],
        screenshots: [],
        miAporte: "Desarrollo de la arquitectura base del sistema: lógica de mesas, pedidos y flujo hacia cocina. Interfaz optimizada para uso ágil en dispositivos táctiles.",
        tecnologias: [
            { nombre: "React", logo: "fab fa-react" },
            { nombre: "FastAPI", logo: "fas fa-bolt" },
            { nombre: "Python", logo: "fab fa-python" },
            { nombre: "PostgreSQL", logo: "fas fa-database" },
            { nombre: "Tailwind CSS", logo: "fas fa-paint-brush" },
            { nombre: "Git", logo: "fab fa-git-alt" },
        ],
        conclusiones: "El sistema permite trabajar con más velocidad, más control y menos caos. En gastronomía eso vale oro, porque donde hay papelitos volando, siempre termina explotando algo. El módulo base está funcional y en proceso de expansión hacia caja, stock y KDS.",
        resumenEjecutivo: {
            titulo: "🍽️ Sistema Gastronómico — Operación en Tiempo Real",
            secciones: [
                {
                    heading: "🎯 Propósito del proyecto",
                    items: [
                        "Digitalizar el flujo operativo del restaurante desde el salón hasta la cocina.",
                        "Minimizar errores en pedidos y mejorar la comunicación entre sectores.",
                        "Construir una base escalable para incorporar caja, stock y KDS.",
                    ]
                },
                {
                    heading: "📌 Funcionalidades clave",
                    items: [
                        "Mapa de mesas con estado en tiempo real (libre, ocupada, esperando cuenta).",
                        "Toma de pedidos por mesa con notas especiales por ítem.",
                        "Comanda digital enviada a cocina automáticamente al confirmar.",
                        "Resumen de cuenta con totales para el mozo.",
                    ]
                },
                {
                    heading: "🔎 Diseño del sistema",
                    items: [
                        "Frontend React con Tailwind optimizado para uso táctil en tablet o celular.",
                        "Backend FastAPI con PostgreSQL para persistencia en tiempo real.",
                        "Preparado para imprimir tickets en impresoras de comandera.",
                        "Arquitectura modular lista para sumar KDS, caja y stock.",
                    ]
                },
                {
                    heading: "💡 Valor generado",
                    items: [
                        "Cero papelitos: todo queda registrado, trazable y sin pérdidas.",
                        "Cocina recibe pedidos al instante sin riesgo de errores manuales.",
                        "El mozo puede atender más mesas con menos esfuerzo.",
                        "Base sólida para crecer hacia un sistema gastronómico completo.",
                    ]
                }
            ]
        },
        link: ""
    },
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
