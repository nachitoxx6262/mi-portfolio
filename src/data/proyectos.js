const proyectos = [
    {
        slug: "carmetal-erp",
        title: "🏭 CARMETAL ERP",
        description: "ERP a medida para una metalúrgica de corte láser y plegado. Empezó resolviendo la cotización y hoy llega hasta la factura, con una app para que el taller cargue lo que hace y el supervisor lo vea en vivo.",
        image: "/proyectos/carmetal/cockpit.jpg",
        descripcionLarga: "CARMETAL es una metalúrgica de corte láser fibra y plegado en Santa Fe. Cada pedido vivía repartido en mails, planillas y papel, y cotizar dependía de un solo software y de una sola persona: cincuenta piezas eran una tarde de trabajo y nadie más podía hacerlo. Antes de escribir código pasé por la planta a entender el proceso completo, desde que entra el pedido hasta que la máquina emite su reporte de producción. El primer objetivo fue uno solo: automatizar y centralizar la cotización. Con eso funcionando, el sistema se fue expandiendo hacia donde seguía el trabajo, y hoy la empresa usa a diario lo que está en producción mientras se sigue sumando funcionalidad. Desplegado en carmetal.cuneusdata.cloud bajo el sello de Cuneus Data Studio.",
        items: [
            "Cotización: el sistema lee el plano DXF, reconoce el marco del rótulo, mide cada pieza y la previsualiza. Calcula tiempo de corte, kilos y precio, y exporta las planillas técnicas a Excel y PDF, en pesos o en dólares al cambio del Banco Nación.",
            "Nesting: el sistema acomoda las piezas sobre la chapa como un rompecabezas, buscando que entren en la menor cantidad de chapas y sobre el menor recorte posible. Muestra el aprovechamiento de cada una y se puede corregir a mano arrastrando las piezas.",
            "El anidado se exporta como un archivo DXF por chapa, que es el formato que leen los programas de todas las máquinas del taller: lo que se cotizó pasa al corte sin volver a dibujarlo.",
            "Producción: la orden de trabajo congela lo cotizado, genera las tareas de corte y plegado y el plan de chapas, con una cola por máquina que el supervisor reordena arrastrando.",
            "Seguimiento: pantalla de planta que se refresca sola y aviso cuando se asigna una chapa a una máquina que no llega a ese espesor.",
            "Agenda en vivo: cada chapa ocupa su bloque en la cola de su máquina, respetando el horario de trabajo del taller. Se ve la carga real día por día, dónde quedan huecos y cuándo se libera cada máquina, así se puede comprometer una fecha de entrega con fundamento en vez de a ojo.",
            "Taller: una hoja A4 por chapa con el plano y su código QR, y la app del operario para iniciar, pausar y completar el trabajo.",
            "Administración: remitos, facturación electrónica ante ARCA, compras, proveedores, stock, listas de precios y tickets de soporte.",
            "Dirección: cada área carga sus números del mes y el sistema arma el informe con metas, semáforo y aviso a quien todavía no cargó.",
        ],
        screenshots: [
            { src: "/proyectos/carmetal/nesting-erp.jpg", cap: "cotización con nesting" },
            { src: "/proyectos/carmetal/app-chapa.jpg", cap: "app del operario" },
            { src: "/proyectos/carmetal/hoja-tecnica.jpg", cap: "hoja del taller" },
        ],
        miAporte: "Relevamiento del proceso en planta, análisis de las cotizaciones históricas contra los reportes de la máquina, y diseño y desarrollo completo: modelo de datos, API, frontend, app de operarios y la infraestructura donde corre. Hoy son 31 módulos, 383 endpoints, 891 pruebas automatizadas y 131 versiones de base de datos, con entorno de prueba propio y despliegue sin cortar el servicio.",
        tecnologias: [
            { nombre: "FastAPI", logo: "fas fa-bolt" },
            { nombre: "PostgreSQL", logo: "fas fa-database" },
            { nombre: "React", logo: "fab fa-react" },
            { nombre: "TypeScript", logo: "fas fa-code" },
            { nombre: "React Native", logo: "fas fa-mobile-alt" },
            { nombre: "Docker", logo: "fab fa-docker" },
            { nombre: "Git", logo: "fab fa-git-alt" },
        ],
        conclusiones: "El cuello de botella se abrió: hoy cotiza cualquiera del equipo, en minutos y con la calibración vigente. La información de un pedido dejó de estar repartida y pasó a tener un solo lugar donde vive, desde el plano hasta la factura. El supervisor sabe qué chapa se está cortando, en qué máquina, quién la corta y hace cuánto, sin bajar a preguntar. Y cuando un cliente pregunta para cuándo lo tiene, la respuesta sale de la carga real de la planta y no de una estimación.",
        resumenEjecutivo: {
            titulo: "🏭 CARMETAL ERP — Del plano al remito",
            secciones: [
                {
                    heading: "🔬 Cómo se resolvió la cotización",
                    items: [
                        "El tiempo de corte no se estima: sale de perfiles de calibración contrastados contra los reportes de producción reales de la máquina, separando el corte recto del curvo y el tiempo de perforado.",
                        "Esos perfiles quedan versionados. Antes, un ajuste de parámetros en la máquina desfasaba las cotizaciones y nadie se enteraba hasta comparar contra el costo real.",
                        "Cada pieza guarda una foto del cálculo con el que se cotizó. Un presupuesto enviado hace meses se puede reconstruir tal cual salió, aunque después cambien los precios o la calibración.",
                        "El anidado que se va a cortar es el mismo que se cobra. Antes se presupuestaba sobre un acomodo ideal y en la máquina se cortaba otro, y esa diferencia se perdía en cada trabajo.",
                        "Un buscador recorre todas las piezas ya cotizadas: en vez de volver a cargar una pieza conocida, se clona con un atajo de teclado.",
                    ]
                },
                {
                    heading: "🧱 Cómo se fue armando",
                    items: [
                        "Primero el cotizador, que era el cuello de botella. El software viejo siguió corriendo intacto hasta que el nuevo estuvo validado con cotizaciones reales.",
                        "Después producción y taller, tomando como unidad de trabajo la chapa, que es como se organiza la planta de verdad.",
                        "Luego el circuito administrativo: remitos, facturación electrónica, compras y stock, todo colgando de la misma orden de trabajo.",
                        "En septiembre de 2026, el tablero de indicadores para la dirección. Sigue en desarrollo el resto del ERP.",
                    ]
                },
                {
                    heading: "📲 Por qué una app aparte",
                    items: [
                        "Para que cargar datos en planta no dependa de sentarse en una computadora: el operario escanea el QR de la chapa y tiene delante el plano, el material y las piezas que salen de ahí.",
                        "Marca inicio, pausa y fin desde el teléfono; el tiempo real vuelve al sistema y actualiza la cola de la máquina sin que nadie transcriba nada.",
                        "Versión nativa para Android y iOS construida sobre los mismos endpoints que la web, sin una API paralela que mantener.",
                        "Modo kiosco para los talleres que no dan un teléfono por operario: una computadora con lector y credencial personal de cada uno.",
                    ]
                },
                {
                    heading: "⚙️ Decisiones de construcción",
                    items: [
                        "Se construyó en paralelo al sistema viejo en lugar de reescribirlo por dentro: riesgo cero sobre la operación diaria mientras se migraba módulo por módulo.",
                        "Un módulo por área del negocio y tipos estrictos desde la base de datos hasta el navegador, para que un cambio no rompa algo lejano sin avisar.",
                        "Auditoría de cada cambio y papelera con restauración: se puede responder quién tocó qué y cuándo, y deshacer un borrado.",
                        "Entornos de prueba y producción separados: nada pasa a producción sin que el cliente lo apruebe antes en el de prueba.",
                    ]
                }
            ]
        },
        link: "https://carmetal.cuneusdata.cloud"
    },
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
        title: "🏥 Eva · Sistema de Gestión Clínica",
        description: "Plataforma para una clínica privada que empezó como un bot de WhatsApp para sacar turnos y hoy es donde trabajan recepción, médicos y administración. En uso diario, con mantenimiento mensual y la base preparada para vender a otras clínicas.",
        image: "/proyectos/eva/eva-whatsapp.jpg",
        panel: "eva-stats",
        descripcionLarga: "La recepción de la clínica trabajaba en emergencia permanente. Una recepcionista podía tener cinco o seis conversaciones de WhatsApp abiertas al mismo tiempo, cada una en un tema distinto: una pidiendo turno, otra preguntando si lo tenía, otra cancelando, otra queriendo saber si su plan estaba cubierto. Y todo eso mientras atendía al paciente parado frente al mostrador, esperando que lo mirara. Sostener esa atención partida sin perder el hilo de ninguna conversación y sin hacer esperar a nadie es bastante más difícil de lo que parece desde afuera, y cualquier error se paga con un turno mal dado o una persona enojada. De noche o un domingo, directamente no contestaba nadie y los mensajes se acumulaban para el lunes. Eva nació chica y concreta, como un bot de WhatsApp que sacara turnos solo. Apenas empezó a funcionar apareció el resto del problema: para ofrecer un horario, el bot necesitaba leer una agenda que estaba en un cuaderno, y para cobrarlo hacía falta una caja que estaba en una planilla. Así que el sistema fue creciendo hacia atrás del bot, hasta cubrir el recorrido completo del paciente, desde que escribe hasta que el médico cierra la consulta. Hoy está en uso diario con mantenimiento mensual contratado, y la base ya es multi-clínica: una clínica nueva se da de alta desde un panel y arranca en su propio subdominio.",
        items: [
            "Recepción: vista del día con todos los turnos, reserva, reprogramación y cancelación con aviso automático por WhatsApp, búsqueda del paciente por documento, nombre o teléfono.",
            "Cobro al llegar: al marcar que el paciente llegó se abre el cobro con el monto sugerido según el médico y la obra social, y se registra la forma de pago.",
            "Caja: apertura y cierre por turno, arqueo de efectivo, egresos, cobros de productos y servicios sueltos, y liquidación a cada médico.",
            "Médicos: agenda propia, historia clínica con signos vitales, diagnóstico libre o por catálogo CIE-10, recetas, estudios, e interconsultas entre colegas.",
            "Imágenes clínicas: el médico carga una radiografía o una foto y el paciente la recibe por un código que vence a los quince días.",
            "Obras sociales: aranceles por médico y plan, cupos mensuales, doble cobertura por paciente y la cobertura propia de la clínica con sus abonos y su deuda.",
            "Configuración: usuarios por invitación, especialidades y horarios de cada médico, feriados y licencias, y plantillas de los mensajes que manda el bot.",
        ],
        screenshots: [],
        miAporte: "Backend, frontend, flujo del bot, integración con la API de WhatsApp y con el panel de conversaciones, hardening de seguridad, migración a multi-clínica y despliegue. Lo más delicado fue la plata: transacciones atómicas, registro de cada cobro y cada cierre, y una máquina de estados que no deja saltear pasos. Después de un mes de operación medí cuánto cuesta en mensajes cada turno que saca el bot y propuse un flujo que los baja cerca del 40 % sin perder reservas. Son 177 endpoints, 190 pruebas automatizadas y cinco servicios aislados en el servidor.",
        tecnologias: [
            { nombre: "FastAPI", logo: "fas fa-bolt" },
            { nombre: "PostgreSQL", logo: "fas fa-database" },
            { nombre: "React", logo: "fab fa-react" },
            { nombre: "TypeScript", logo: "fas fa-code" },
            { nombre: "n8n", logo: "fas fa-diagram-project" },
            { nombre: "WhatsApp API", logo: "fab fa-whatsapp" },
            { nombre: "Docker", logo: "fab fa-docker" },
        ],
        conclusiones: "Recepción dejó de sostener cinco conversaciones a la vez para repetir la misma respuesta, y puede atender a quien tiene enfrente. La clínica sabe cuánto cobró, por quién y de qué obra social sin cuadrar planillas al cierre. El paciente que escribe un domingo a la noche saca su turno igual. Y como cada reserva queda marcada con su origen, se puede mostrar con números cuánto del trabajo de recepción está resolviendo el bot.",
        resumenEjecutivo: {
            titulo: "🏥 Eva — Gestión clínica + asistente de WhatsApp",
            secciones: [
                {
                    heading: "💬 Cómo trabaja el bot",
                    items: [
                        "Reconoce al paciente por su número de teléfono, pero nunca reserva a su nombre sin preguntar: siempre confirma para quién es el turno. Un teléfono lo comparte toda la familia.",
                        "Ofrece horarios que existen de verdad, leídos de la agenda en ese momento, respetando feriados, licencias y los médicos que manejan su agenda aparte.",
                        "Cuando la consulta se sale del libreto, pasa la conversación a una persona de recepción y se queda callado hasta que la cierran.",
                        "Fuera de la ventana de respuesta de WhatsApp usa plantillas aprobadas por Meta para recordar el turno, avisar una cancelación o avisar que un estudio está listo.",
                    ]
                },
                {
                    heading: "🧩 Lo que hay que resolver bien",
                    items: [
                        "Dos personas pidiendo el mismo horario al mismo tiempo: la reserva se resuelve en una sola operación de base de datos que toma el turno solo si sigue libre, y al otro le vuelve a ofrecer horarios.",
                        "Los cupos de obra social los verifica la propia base antes de confirmar, no la aplicación: por más caminos que haya para reservar, el límite es el mismo.",
                        "El turno avanza por estados encadenados y no admite saltos: no se puede volver de atendido a sala de espera, ni cobrar dos veces el mismo turno.",
                        "Un médico solo ve lo suyo, y eso está verificado por pruebas automáticas que fallan si alguna vez se filtra la agenda o la historia clínica de otro.",
                    ]
                },
                {
                    heading: "📈 Medir lo que hace el bot",
                    items: [
                        "Cada turno guarda si lo reservó el bot, recepción o si fue un sobreturno, con la hora exacta de la reserva.",
                        "Con eso hay un tablero propio del bot: cuántos turnos trae, a qué médicos y obras sociales, cuántos pacientes asisten y cuántos faltan.",
                        "Un histograma por hora muestra cuánto se agenda fuera del horario de la clínica, que es exactamente el trabajo que antes no se hacía.",
                        "También medí el costo: cuántos mensajes manda Eva por cada turno y cuáles se pueden sacar sin perder reservas ni claridad.",
                    ]
                },
                {
                    heading: "🔐 Datos de salud y multi-clínica",
                    items: [
                        "Sesión en cookie protegida, bloqueo por intentos fallidos y cierre de sesión que invalida el acceso de verdad.",
                        "Auditoría legible en español de cada acción: quién reservó, quién cobró, quién cerró la caja y cuándo.",
                        "Cada clínica tiene su propio identificador en todas las tablas y su propio usuario de base de datos, con reglas en PostgreSQL que impiden leer lo de otra.",
                        "Copias de seguridad cifradas, monitoreo de errores y un entorno de prueba separado para ensayar los cambios antes de tocar la clínica real.",
                    ]
                }
            ]
        },
        link: "https://asistentevirtualeva.cloud"
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
        description: "Ejercicio de Business Intelligence sobre la base de muestra Northwind: modelo relacional, consultas SQL y tablero interactivo en Power BI para stock y logística. Datos ficticios, hecho para practicar el método.",
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
