import {
  capabilityGroups,
  caseStudies,
  professionalExperience,
  profile,
  roleFit,
  signalCards,
  timeline,
  workflowStages,
} from "@/data/profile";
import type { CapabilityGroup, CaseStudy, ProfessionalExperience, TimelineItem } from "@/data/profile";

export type Locale = "en" | "es";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export const uiText = {
  en: {
    language: "Language",
    remoteFromSpain: "Remote from Spain",
    downloadCv: "Download CV",
    recruiterScan: "Scan my CV",
    contact: "Contact",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "Resume page",
    printableResume: "Printable resume",
    back: "Back",
    backToCockpit: "Back to site",
    resume: "Resume",
    operationsCockpit: "Work dashboard",
    startHere: "Start here",
    entryHeading: "Choose what you need.",
    entryIntro: "Use the CV path for a quick hiring scan, or jump into the project work if you want to see what I have built.",
    scanMyCv: "Scan my CV",
    scanMyCvHelp: "Role fit, experience, CV, and contact.",
    exploreProjects: "Explore projects",
    exploreProjectsHelp: "Tools, screenshots, case studies, and build notes.",
    exampleProject: "Example project",
    whyProfileWorks: "Why the background helps",
    topRoleFit: "Top role fit",
    sanitizedNote:
      "Screenshots are anonymized. Private names, locations, contacts, coordinates, and file identifiers are replaced with demo values.",
    valuePipeline: "How I work",
    showStage: "Show",
    openCaseStudy: "Open case study",
    sanitizedWorkSample: "Sanitized work sample",
    workflowRun: "Project steps",
    workflowRunHeading: "How it works",
    systemBuilt: "What I built",
    workflowLabel: "Project view",
    operatingFlow: "Project view",
    valueKicker: "How I work",
    valueHeading: "From files and notes to reports, dashboards, and decisions.",
    valueText:
      "Most of my projects start with scattered material: photos, PDFs, spreadsheets, listings, or project notes. I turn that into something a team can check, update, and use.",
    activeStage: "Selected step",
    careerRoute: "Career route",
    timelineHeading: "Industrial operations to shipped tools.",
    timelineText: "I started in operations, then moved closer to the tools around the work: SaaS support, pricing, dashboards, reports, and automation.",
    workSamples: "Work samples",
    workSamplesHeading: "Four projects from real operational friction.",
    workSamplesText:
      "These are anonymized previews from local projects and generated outputs. They are shown as work samples, not polished fake app screens.",
    problemToOutput: "How it works",
    operatingSystem: "Skills",
    skillsHeading: "Where I can help.",
    skillsText:
      "My strongest work happens when I understand the operation first, then build the tool around it.",
    recruiterHeading: "Best fit: operations, implementation, data, and product support.",
    recruiterText:
      "I am strongest in roles where someone needs to understand the work, talk to users, clean up data, and ship small internal tools.",
    targetRoles: "Target roles",
    remoteNote:
      "Open to remote EU, UK, and global teams. The strongest match is a role where business workflow, product implementation, and data tooling meet.",
    experienceAnchors: "Experience anchors",
    problemConstraints: "Problem",
    whySystem: "Why I built it",
    outputImpact: "What changed",
    whatThisProves: "What this shows",
    stackEvidence: "Stack",
    inputLabel: "Handles",
    systemLabel: "Built",
    outputLabel: "Result",
    evidenceLabel: "Source note",
    usedIn: "Used in",
    experienceHighlights: "Experience highlights",
    builtAroundWorkflow: "Built around the real work",
    nextStep: "Next step",
    returnToCv: "Back to the CV",
    cockpit: "Home",
    coreOperatingSystem: "Core skills",
    selectedExperience: "Selected experience",
    projectExamples: "Project examples",
    education: "Education",
    pdf: "PDF",
  },
  es: {
    language: "Idioma",
    remoteFromSpain: "Remoto desde España",
    downloadCv: "Descargar CV",
    recruiterScan: "Ver mi CV",
    contact: "Contacto",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "CV imprimible",
    printableResume: "CV imprimible",
    back: "Volver",
    backToCockpit: "Volver al panel",
    resume: "CV",
    operationsCockpit: "Panel de trabajo",
    startHere: "Empieza aquí",
    entryHeading: "Elige lo que necesitas.",
    entryIntro: "Usa el CV para una revisión rápida, o entra en los proyectos para ver las herramientas que he construido.",
    scanMyCv: "Ver mi CV",
    scanMyCvHelp: "Encaje, experiencia, CV y contacto.",
    exploreProjects: "Explorar proyectos",
    exploreProjectsHelp: "Herramientas, capturas, casos y notas técnicas.",
    exampleProject: "Proyecto ejemplo",
    whyProfileWorks: "Por qué este perfil encaja",
    topRoleFit: "Mejor encaje",
    sanitizedNote:
      "Muestras anonimizadas a partir de proyectos locales y salidas generadas. Nombres privados, ubicaciones, contactos, coordenadas e identificadores se sustituyen por valores demo.",
    valuePipeline: "Cómo trabajo",
    showStage: "Mostrar",
    openCaseStudy: "Abrir caso",
    sanitizedWorkSample: "Muestra anonimizada",
    workflowRun: "Pasos del proyecto",
    workflowRunHeading: "Cómo funciona",
    systemBuilt: "Qué construí",
    workflowLabel: "Vista del proyecto",
    operatingFlow: "Vista del proyecto",
    valueKicker: "Cómo trabajo",
    valueHeading: "De archivos y notas a reportes, paneles y decisiones.",
    valueText:
      "La mayoría de mis proyectos empiezan con material disperso: fotos, PDFs, hojas, listados o notas de proyecto. Lo convierto en algo que un equipo puede revisar, actualizar y usar.",
    activeStage: "Etapa activa",
    careerRoute: "Ruta profesional",
    timelineHeading: "De operaciones industriales a herramientas funcionando.",
    timelineText: "Empecé en operaciones y fui acercándome a las herramientas alrededor del trabajo: SaaS, precios, paneles, reportes y automatización.",
    workSamples: "Muestras de trabajo",
    workSamplesHeading: "Cuatro proyectos nacidos de fricción operativa real.",
    workSamplesText:
      "Son vistas anonimizadas de proyectos locales: sin nombres privados, direcciones, contactos, coordenadas ni identificadores de archivo.",
    problemToOutput: "Cómo funciona",
    operatingSystem: "Habilidades",
    skillsHeading: "Dónde puedo aportar.",
    skillsText:
      "Mi mejor trabajo empieza entendiendo la operación y construyendo la herramienta alrededor de eso.",
    recruiterHeading: "Mejor encaje: operaciones, implementación, datos y soporte de producto.",
    recruiterText:
      "Encajo mejor en roles donde hace falta entender el trabajo, hablar con usuarios, ordenar datos y construir herramientas internas pequeñas.",
    targetRoles: "Roles objetivo",
    remoteNote:
      "Abierto a equipos remotos en la UE, Reino Unido y globales. El mejor encaje está donde se cruzan procesos de negocio, implementación de producto y herramientas de datos.",
    experienceAnchors: "Anclas de experiencia",
    problemConstraints: "Problema",
    whySystem: "Por qué lo construí",
    outputImpact: "Qué cambió",
    whatThisProves: "Qué muestra",
    stackEvidence: "Tecnologías",
    inputLabel: "Maneja",
    systemLabel: "Construí",
    outputLabel: "Resultado",
    evidenceLabel: "Nota de origen",
    usedIn: "Usado en",
    experienceHighlights: "Experiencia destacada",
    builtAroundWorkflow: "Construido alrededor del trabajo real",
    nextStep: "Siguiente paso",
    returnToCv: "Volver al CV",
    cockpit: "Panel",
    coreOperatingSystem: "Habilidades principales",
    selectedExperience: "Experiencia seleccionada",
    projectExamples: "Proyectos destacados",
    education: "Educación",
    pdf: "PDF",
  },
} as const;

const profileEs = {
  role: "Especialista remoto en operaciones y automatización de datos",
  location: "Badajoz, España",
  availability: "Remoto desde España | equipos UE y globales",
  headline:
    "Ingeniero industrial con experiencia liderando operaciones, trabajando en SaaS remoto y construyendo herramientas para reportes, paneles, datos de precios, QA/QC y automatización.",
  targetRoles: [
    "Consultor de Implementación",
    "Consultor de Soluciones",
    "Analista RevOps",
    "Analista de Operaciones de Producto",
    "Analista BI/Data",
    "Especialista Técnico de Producto",
  ],
  recruiterSnapshot: [
    { label: "Encaje", value: "Implementación, RevOps, Operaciones de Producto, BI" },
    { label: "Disponibilidad", value: "Abierto a roles remotos UE, UK y globales" },
    { label: "Idiomas", value: "Español nativo, inglés C2, portugués C1" },
    { label: "Modo de trabajo", value: "Basado en España, remoto, cómodo con clientes y equipos internos" },
  ],
};

const signalCardsEs = [
  { label: "Amazon Ops", detail: "personas lideradas en operaciones Amazon" },
  { label: "SaaS/Producto", value: "2 años", detail: "precios y herramientas de ingresos en SaaS" },
  { label: "Automatización", detail: "proyectos destacados de datos y automatización" },
  { label: "Remoto", detail: "inglés, además de español y portugués" },
];

const capabilityGroupsEs: Array<Omit<CapabilityGroup, "icon">> = [
  {
    name: "Operar",
    verb: "Conocer la operación",
    input: "campo, colas de servicio, brechas QA",
    system: "responsables, estados y próximos pasos",
    items: ["operaciones de campo", "seguimiento KPI", "QA/QC", "traspasos"],
    output: "Prioridades claras y menos pendientes sueltos.",
    usedIn: ["SolarTrack", "Amazon", "reportes"],
  },
  {
    name: "Analizar",
    verb: "Hacer útiles los números",
    input: "datos de precios, exportaciones, páginas de mercado",
    system: "controles SQL/Python y paneles",
    items: ["SQL", "análisis de precios", "investigación de mercado", "paneles"],
    output: "Contexto más claro para precios, QA y planificación.",
    usedIn: ["PriceLabs", "MVP de pricing", "QA/QC"],
  },
  {
    name: "Automatizar",
    verb: "Quitar trabajo repetitivo",
    input: "PDFs, hojas, imágenes, plantillas",
    system: "ETL, OCR, validación y generación",
    items: ["Python", "ETL", "PDF/OCR", "generación DOCX/Excel"],
    output: "Salidas repetibles desde documentos, hojas y registros operativos.",
    usedIn: ["report builder", "QA/QC", "equipos"],
  },
  {
    name: "Construir",
    verb: "Construir la pantalla necesaria",
    input: "fricción de usuario y requisitos del proceso",
    system: "interfaces React/Next/FastAPI",
    items: ["React", "Next.js", "TypeScript", "FastAPI"],
    output: "Herramientas web pequeñas que la gente puede usar de verdad.",
    usedIn: ["SolarTrack", "report builder", "portfolio"],
  },
  {
    name: "Comunicar",
    verb: "Explicar con claridad",
    input: "usuarios, producto y contexto de negocio",
    system: "seguimiento claro y traducción técnica simple",
    items: ["inglés C2", "español nativo", "portugués C1", "seguimiento con clientes"],
    output: "Menos confusión entre usuarios, necesidades de negocio y trabajo técnico.",
    usedIn: ["SaaS", "implementación", "equipos remotos"],
  },
];

const workflowStagesEs = [
  { badge: "Archivos", label: "Material de origen", detail: "PDFs, hojas, exportaciones, páginas de mercado" },
  { badge: "Reglas", label: "Reglas de negocio", detail: "reglas, estados, responsables, validación" },
  { badge: "Datos", label: "Registros claros", detail: "tablas, registros, catálogos, controles" },
  { badge: "Reportes", label: "Trabajo terminado", detail: "paneles, reportes, documentos, exportaciones" },
  { badge: "Acción", label: "Decisiones de negocio", detail: "precios, revisión QA, seguimiento, acción" },
];

const timelineEs: TimelineItem[] = [
  {
    period: "2017-2018",
    label: "Base industrial",
    title: "Ingeniería industrial y automatización de producción",
    summary:
      "Diseñé e implementé mejoras de procesos en producción de alimentos, incluyendo lanzamiento de línea, coordinación de operadores, análisis OEE, reducción de ciclo y mejoras de capacidad.",
    signals: ["Ingeniería Industrial", "OEE", "automatización", "capacidad"],
  },
  {
    period: "2018-2021",
    label: "Escala operativa",
    title: "Operaciones de servicio, logística y liderazgo en Amazon",
    summary:
      "Trabajé en logística y fulfillment de Amazon, incluyendo liderazgo de un equipo de 107 personas, QA, control de inventario, seguimiento de KPIs y planes de acción.",
    signals: ["liderazgo", "last-mile logistics", "calidad", "planes KPI"],
  },
  {
    period: "2021-2025",
    label: "SaaS remoto y producto",
    title: "Operaciones de cliente, soporte de producto y procesos de ingresos",
    summary:
      "Trabajé en remoto en PerchPeek y PriceLabs, cerca de clientes, precios dinámicos, gestión de ingresos, investigación de mercado, producto y seguimiento de soporte.",
    signals: ["SaaS remoto", "precios", "investigación de mercado", "operaciones de producto"],
  },
  {
    period: "2025-presente",
    label: "Automatización independiente",
    title: "Proyectos independientes de operaciones y automatización de datos",
    summary:
      "Construí herramientas para reportes de inspección, organización solar, inteligencia inmobiliaria, trazabilidad QA/QC, extracción de equipos, paneles y automatización documental.",
    signals: ["Python", "SQL", "React", "FastAPI", "Next.js", "PostgreSQL"],
  },
];

const experienceEs: ProfessionalExperience[] = [
  {
    period: "Julio 2025 - Presente",
    organization: "Proyectos Independientes de Operaciones y Automatización de Datos",
    role: "Builder remoto de procesos, datos y sistemas web",
    context: "Trabajo independiente desde España para procesos reales de negocio.",
    bullets: [
      "Construí herramientas para reportes de inspección, organización de proyectos solares, inteligencia inmobiliaria, trazabilidad QA/QC, extracción de datos de equipos, paneles y automatización documental.",
      "Trabajé con React/TypeScript, Next.js, FastAPI, Python, SQL/PostgreSQL, SQLite, PDF/OCR, generación DOCX y automatización de hojas de cálculo.",
      "Me enfoqué en reducir revisión manual, mantener registros claros y hacer reportes más fáciles de repetir.",
    ],
  },
  {
    period: "Junio 2023 - Junio 2025",
    organization: "PriceLabs",
    role: "SaaS remoto de precios, ingresos y operaciones de producto",
    context: "SaaS de gestión de ingresos para precios de alquileres de corta estancia.",
    bullets: [
      "Trabajé con análisis de precios, investigación de mercado, investigación de comportamiento de producto, dudas de clientes y procesos de gestión de ingresos.",
      "Ayudé a convertir problemas de precios/producto en seguimiento más claro para clientes y equipos internos.",
      "Construí experiencia en SaaS, revenue management hotelero, paneles, lógica de precios y trabajo remoto.",
    ],
  },
  {
    period: "2021 - 2023",
    organization: "PerchPeek",
    role: "Operaciones remotas de cliente y producto SaaS",
    context: "Entorno de tecnología de relocation con procesos operativos de cara al cliente.",
    bullets: [
      "Apoyé operaciones SaaS remotas con comunicación con clientes, seguimiento y resolución de incidencias de producto.",
      "Desarrollé mejor criterio sobre brechas de implementación, fricción de usuario y el traspaso entre proceso de negocio y comportamiento de producto.",
    ],
  },
  {
    period: "Mayo 2021 - Enero 2023",
    organization: "Padme Yoga",
    role: "Manager y cofundador",
    context: "Negocio local de bienestar con operaciones, agenda, seguimiento comercial y coordinación de equipo.",
    bullets: [
      "Gestioné operaciones diarias, agenda, comunicación con clientes, iniciativas de ingresos y coordinación de equipo.",
      "Implementé mejoras operativas y comerciales que contribuyeron a un aumento del 30% en ingresos mensuales.",
    ],
  },
  {
    period: "2018 - 2021",
    organization: "Amazon y operaciones de servicio",
    role: "Operaciones, logística, QA y liderazgo de equipo",
    context: "Entornos operativos de alto volumen con responsabilidad sobre KPIs y disciplina de procesos.",
    bullets: [
      "Lideré y coordiné trabajo operativo incluyendo un equipo Amazon de 107 personas, seguimiento QA, control de inventario, KPIs y planes de acción.",
      "Desarrollé el ritmo operativo que ahora informa mi trabajo en implementación, operaciones de producto, BI y automatización.",
    ],
  },
  {
    period: "Enero 2018 - Junio 2019",
    organization: "Badajoz Speed Queen",
    role: "Manager",
    context: "Operaciones de negocio de servicio con planificación, cuentas, marketing y ejecución diaria.",
    bullets: [
      "Gestioné cuentas, planificación, marketing, operaciones diarias, análisis de datos y comunicación con clientes.",
      "Contribuí a aumentar los ingresos un 55% interanual mediante mejoras operativas y comerciales.",
    ],
  },
  {
    period: "2017 - 2018",
    organization: "Ingeniería industrial y mejora de producción",
    role: "Ingeniero industrial",
    context: "Mejora de procesos en producción alimentaria y soporte al lanzamiento de línea.",
    bullets: [
      "Trabajé en automatización de producción, coordinación de operadores, análisis OEE, reducción de ciclos, soporte al lanzamiento de línea y mejora de capacidad.",
    ],
  },
];

const caseStudyEs: Record<string, Partial<CaseStudy>> = {
  "inspection-report-automation": {
    title: "Plataforma de Automatización de Reportes de Inspección",
    shortTitle: "Reportes automáticos",
    eyebrow: "Reportes de inspección",
    summary:
      "Construí una herramienta local para reportes de inspección: fotos, PDFs, anotaciones, catálogos de incidencias, OCR y generación DOCX en un solo lugar.",
    input: "fotos, PDFs, certificados, listas de incidencias y notas del proyecto",
    system: "app React/FastAPI local con almacenamiento de proyectos, estados de revisión, OCR y generación DOCX",
    problem:
      "Los reportes de inspección pueden convertirse en carpetas, fotos, ediciones de Word, listas de incidencias y certificados dispersos. Lo difícil es mantener cada hallazgo trazable hasta el reporte final.",
    role: "Implementador full-stack",
    output: "Proyectos de inspección revisables, catalogables y exportables a DOCX",
    constraints: [
      "Había que preservar la fiabilidad de un proceso muy dependiente de documentos.",
      "La evidencia, anotaciones, catálogos y generación del reporte debían seguir siendo trazables.",
      "Tenía que funcionar localmente sin convertir el material de campo en una dependencia cloud frágil.",
    ],
    built: [
      "Interfaz en React y TypeScript para proyectos, metadatos, archivos, anotaciones, clasificaciones y ajustes de generación.",
      "Backend FastAPI con almacenamiento local de proyectos, archivos subidos, imágenes procesadas, copias de seguridad de catálogos y reportes generados.",
      "Generación DOCX, soporte OCR, manejo de imágenes, catálogos, mapas/geocoding y descargas.",
    ],
    value: [
      "Reduce trabajo repetido de formateo de reportes.",
      "Mejora la consistencia entre evidencia de inspección y salida del reporte.",
      "Mueve un proceso muy documental hacia una herramienta web interna.",
    ],
    facts: ["API para proyectos/archivos/catálogos/reportes", "trabajo local", "generación DOCX"],
    evidence: ["Captura local de la app Vite/FastAPI con un proyecto demo anonimizado.", "Otros proyectos visibles se ocultaron y se sustituyeron por etiquetas demo."],
    proves: [
      "Entiende el trabajo documental antes de diseñar la pantalla.",
      "Conecta archivos, APIs, estados de revisión y automatización documental.",
      "Construye herramientas internas con estructura suficiente para superar scripts puntuales.",
    ],
    workflow: ["crear proyecto", "añadir fotos", "clasificar incidencias", "exportar DOCX"],
  },
  "solartrack-workflow-pwa": {
    title: "SolarTrack PWA de operaciones",
    shortTitle: "SolarTrack PWA",
    eyebrow: "Organizador desplegado",
    summary:
      "Una PWA desplegada en Next.js para visitas solares: calendario, asignación de asesores, estado de reportes, contactos, mapas, importaciones y seguimiento.",
    input: "calendarios de visita, asesores, estado de reportes, contactos, importaciones y gastos",
    system: "PWA en Next.js con panel, calendario, mapas, registros, filtros, importaciones, autenticación y pruebas de persistencia",
    problem:
      "Las visitas solares generan mucho seguimiento pequeño: asesores asignados, reportes pendientes, contactos, estado de proyectos, gastos y contexto de mapa. Quería un solo lugar para ver qué seguía abierto.",
    role: "Builder con criterio de producto",
    output: "PWA desplegada para visitas, reportes, contactos, mapas, importaciones y seguimiento operativo",
    constraints: [
      "Tenía que servir para uso operativo diario, no solo para verse bien en una demo.",
      "Debía soportar varias vistas del mismo trabajo: calendario, proyectos, reportes, contactos, mapas y gastos.",
      "Tenía que manejar importaciones y registros editables manteniendo el despliegue en Vercel.",
    ],
    built: [
      "PWA Next.js 16 y TypeScript con KPIs, calendario, tablas de proyectos, contactos, mapas, gastos, reportes y ajustes.",
      "Importación CSV/Excel, detalles editables de visitas, filtros por año/mes/asesor/cliente/estado y progreso visual de reportes.",
      "Autenticación, Neon/PostgreSQL, Prisma, despliegue en Vercel y scripts de prueba/persistencia en la app de producto.",
    ],
    value: [
      "Muestra pensamiento de producto en un organizador diseñado para uso operativo diario.",
      "Demuestra diseño de paneles, importación de datos, despliegue y atención a detalles operativos pequeños.",
      "Da un ejemplo vivo para roles de implementación y operaciones de producto.",
    ],
    facts: ["App desplegada en Vercel", "PWA", "Import CSV/Excel", "filtros de panel", "scripts QA"],
    evidence: ["Vista basada en los componentes reales de panel, navegación y reportes de SolarTrack.", "No se usó captura cruda porque el almacenamiento local contiene registros operativos privados."],
    proves: [
      "Crea estructura de producto alrededor del trabajo de campo.",
      "Traduce operaciones de campo en navegación, registros, filtros y estados claros.",
      "Construye y verifica aplicaciones Next.js desplegadas.",
    ],
    workflow: ["registros de visita", "filtros de estado", "cola de reportes", "seguimiento"],
  },
  "real-estate-pricing-intelligence": {
    title: "MVP de Inteligencia de Precios Inmobiliarios",
    shortTitle: "Inteligencia de precios",
    eyebrow: "Producto de datos de mercado",
    summary:
      "Un MVP de inteligencia de precios inmobiliarios: scraping, ETL, almacenamiento PostGIS, deduplicación, controles de confianza, paneles y reportes.",
    input: "listados públicos, snapshots de fuente, zonas, precios, geografía y frescura",
    system: "ingesta multi-fuente, modelo PostgreSQL/PostGIS, deduplicación, scoring de confianza y reportes",
    problem:
      "Los datos inmobiliarios públicos son inconsistentes, duplicados, desiguales geográficamente y afectados por volatilidad de moneda. El MVP separa lo capturado de lo que se puede usar con confianza en análisis de mercado.",
    role: "Diseñador de producto de datos y pipeline",
    output: "Contexto de precios por zona y tipo de propiedad, con paneles y reportes diarios",
    constraints: [
      "Las fuentes eran fragmentadas, inconsistentes y con distinta confiabilidad.",
      "Las métricas publicables debían separarse de las observaciones capturadas.",
      "Geografía, moneda, frescura y listados duplicados afectaban la confianza.",
    ],
    built: [
      "Arquitectura de ingesta multi-fuente con controles por modo, archivo raw y cache de estado actual.",
      "Modelo PostgreSQL/PostGIS para observaciones, entidades, diccionarios de zona y análisis geoespacial.",
      "Deduplicación, manejo de geografía no resuelta, métricas de confianza/frescura, paneles y reportes diarios/semanales.",
    ],
    value: [
      "Convierte listados públicos fragmentados en contexto de precios comparable por zona y tipo de propiedad.",
      "Separa observaciones crudas de métricas publicables para un análisis más confiable.",
      "Demuestra ingeniería de datos, analítica, pensamiento de producto y razonamiento de mercado.",
    ],
    facts: ["ingesta multi-fuente", "modelo geoespacial", "métricas de frescura", "generación de reportes"],
    evidence: ["Vista basada en reportes diarios generados por el MVP.", "Zonas exactas y nombres de fuentes se generalizan en el asset público."],
    proves: [
      "Piensa como responsable de producto de datos, no solo como implementador de scraping.",
      "Diseña alrededor de confianza de datos, calidad de fuente y preguntas reales de mercado.",
      "Conecta lógica de mercado, bases de datos, paneles y reportes.",
    ],
    workflow: ["capturar listados", "deduplicar", "validar geografía", "generar reporte"],
  },
  "industrial-qaqc-data-automation": {
    title: "Automatizacion Industrial QA/QC",
    shortTitle: "Automatización QA/QC",
    eyebrow: "Datos industriales",
    summary:
      "Automatización para registros industriales QA/QC: hojas Excel, dossiers PDF, tolerancias, listas de equipos, resúmenes de validación y exportaciones trazables.",
    input: "registros Excel, sets PDF, listas de sistemas, referencias débiles y anomalías",
    system: "índice maestro, catálogos cerrados, mapas de cobertura, resúmenes de validación y exportaciones revisables",
    problem:
      "La documentación industrial suele vivir en hojas inconsistentes, grandes sets PDF, referencias repetidas y revisión manual. Eso hace difícil confiar en el estado del dossier y la trazabilidad.",
    role: "Implementador de automatización de datos industriales",
    output: "Registros QA/QC y de equipos trazables desde documentos hasta exportaciones validadas",
    constraints: [
      "Las entradas dependían mucho de documentos, eran inconsistentes y difíciles de auditar manualmente.",
      "Las salidas debían preservar trazabilidad y posibilidad de revisión.",
      "La solución debía soportar validación, no solo extracción.",
    ],
    built: [
      "Generación de índice maestro documental desde fuentes Excel y PDF.",
      "Catálogos cerrados, reglas de normalización, mapas de cobertura, reportes de anomalías, resúmenes de validación y entregables Excel finales.",
      "Extracción de datos de equipos con PDFs indexados, bases SQLite, extracción por etapas, scripts de aprobación QA y panel de revisión.",
    ],
    value: [
      "Reduce reconciliación en hojas de cálculo y revisión documental manual.",
      "Mejora la trazabilidad desde documentos fuente hasta entregables QA/QC.",
      "Demuestra encaje para implementación, análisis de operaciones, datos industriales y roles de producto técnico.",
    ],
    facts: ["índice maestro", "salidas de validación", "mapa de cobertura", "aprobación QA"],
    evidence: ["Vista basada en salidas generadas de resumen y validación QA/QC.", "Nombres privados de archivos fuente fueron eliminados del asset público."],
    proves: [
      "Aporta criterio de ingeniería industrial al trabajo de automatización de datos.",
      "Construye procesos revisables para trabajo documental de alta fricción.",
      "Mejora la confianza operativa sin inventar precisión falsa.",
    ],
    workflow: ["reunir documentos", "crear índice", "controlar cobertura", "resumir QA"],
  },
};

const roleFitEs = [
  "Consultor de Implementación",
  "Consultor de Soluciones",
  "Analista Revenue Operations",
  "Analista Product Operations",
  "Analista BI/Data",
  "Especialista Técnico de Producto",
];

export function getUi(locale: Locale) {
  return uiText[locale];
}

export function getLocalizedProfile(locale: Locale) {
  return locale === "es" ? { ...profile, ...profileEs } : profile;
}

export function getLocalizedSignalCards(locale: Locale) {
  if (locale === "en") {
    return signalCards;
  }

  return signalCards.map((card, index) => ({
    ...card,
    ...signalCardsEs[index],
  }));
}

export function getLocalizedCapabilityGroups(locale: Locale) {
  if (locale === "en") {
    return capabilityGroups;
  }

  return capabilityGroups.map((group, index) => ({
    ...group,
    ...capabilityGroupsEs[index],
  }));
}

export function getLocalizedWorkflowStages(locale: Locale) {
  return locale === "es" ? workflowStagesEs : workflowStages;
}

export function getLocalizedTimeline(locale: Locale) {
  return locale === "es" ? timelineEs : timeline;
}

export function getLocalizedExperience(locale: Locale) {
  return locale === "es" ? experienceEs : professionalExperience;
}

export function getLocalizedCaseStudies(locale: Locale) {
  if (locale === "en") {
    return caseStudies;
  }

  return caseStudies.map((caseStudy) => ({
    ...caseStudy,
    ...caseStudyEs[caseStudy.slug],
  }));
}

export function getLocalizedCaseStudy(slug: string, locale: Locale) {
  return getLocalizedCaseStudies(locale).find((caseStudy) => caseStudy.slug === slug);
}

export function getLocalizedRoleFit(locale: Locale) {
  return locale === "es" ? roleFitEs : roleFit;
}
