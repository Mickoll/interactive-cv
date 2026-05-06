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
    recruiterScan: "Recruiter scan",
    viewProof: "View proof",
    contact: "Contact",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "Resume page",
    printableResume: "Printable resume",
    back: "Back",
    backToCockpit: "Back to cockpit",
    resume: "Resume",
    operationsCockpit: "Operations cockpit",
    fastProofFirst: "Fast proof first",
    exploreSystems: "Explore the systems",
    recruiter: "Recruiter",
    explorer: "Explorer",
    whyProfileWorks: "Why this profile works",
    topRoleFit: "Top role fit",
    sanitizedNote:
      "Sanitized from local project routes and generated outputs. Private names, locations, contacts, coordinates, and file identifiers are replaced with demo values.",
    valuePipeline: "Value pipeline",
    showStage: "Show",
    openCaseStudy: "Open case study",
    sanitizedWorkSample: "Sanitized work sample",
    workflowRun: "Workflow run",
    workflowRunHeading: "From messy input to usable output",
    systemDesigned: "System designed",
    operatingFlow: "Operating flow",
    raw: "messy",
    structured: "structured",
    usable: "usable",
    valueKicker: "How the work changes",
    valueHeading: "Messy input becomes something people can act on.",
    valueText:
      "Click the runbook. The same pattern shows up across reports, dashboards, pricing data, and QA/QC documents.",
    activeStage: "Active stage",
    careerRoute: "Career route",
    timelineHeading: "Industrial operations to shipped tools.",
    timelineText: "The story is not a pivot into random code. It is operations judgment turned into working systems.",
    workSamples: "Work samples",
    workSamplesHeading: "Four tools, one operating pattern.",
    workSamplesText:
      "These are sanitized previews from the local project work: no private names, addresses, contacts, coordinates, or file identifiers.",
    problemToOutput: "Problem to output",
    operatingSystem: "Operating system",
    skillsHeading: "Skills grouped by what they produce.",
    skillsText:
      "The value is not knowing isolated tools. It is understanding the work, shaping the system, and making the output usable.",
    recruiterHeading: "Practical operator. Useful builder. Remote-ready.",
    recruiterText:
      "Best fit where a team needs process ownership, product sense, analytics, and lightweight automation.",
    targetRoles: "Target roles",
    remoteNote:
      "Open to remote EU, UK, and global teams. The strongest match is a role where business workflow, product implementation, and data tooling meet.",
    experienceAnchors: "Experience anchors",
    problemConstraints: "Problem / constraints",
    whySystem: "Why this needed a system",
    outputImpact: "Output / impact",
    whatThisProves: "What this proves",
    stackEvidence: "Stack and evidence",
    inputLabel: "Input",
    systemLabel: "System",
    outputLabel: "Output",
    evidenceLabel: "Evidence",
    usedIn: "Used in",
    strongestProof: "Strongest proof",
    builtAroundWorkflow: "Built around the real workflow",
    nextStep: "Next step",
    returnToCv: "Return to the interactive CV",
    cockpit: "Cockpit",
    coreOperatingSystem: "Core operating system",
    selectedExperience: "Selected experience",
    featuredProjectProof: "Featured project proof",
    education: "Education",
    pdf: "PDF",
  },
  es: {
    language: "Idioma",
    remoteFromSpain: "Remoto desde España",
    downloadCv: "Descargar CV",
    recruiterScan: "Vista rápida",
    viewProof: "Ver proyectos",
    contact: "Contacto",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "CV imprimible",
    printableResume: "CV imprimible",
    back: "Volver",
    backToCockpit: "Volver al panel",
    resume: "CV",
    operationsCockpit: "Panel de operaciones",
    fastProofFirst: "Prueba rápida",
    exploreSystems: "Explorar los sistemas",
    recruiter: "Rápida",
    explorer: "Explorar",
    whyProfileWorks: "Por qué este perfil encaja",
    topRoleFit: "Mejor encaje",
    sanitizedNote:
      "Muestras saneadas a partir de proyectos locales y salidas generadas. Nombres privados, ubicaciones, contactos, coordenadas e identificadores se sustituyen por valores demo.",
    valuePipeline: "Flujo de valor",
    showStage: "Mostrar",
    openCaseStudy: "Abrir caso",
    sanitizedWorkSample: "Muestra saneada",
    workflowRun: "Flujo operativo",
    workflowRunHeading: "De entrada cruda a salida útil",
    systemDesigned: "Sistema diseñado",
    operatingFlow: "Flujo operativo",
    raw: "desordenado",
    structured: "estructurado",
    usable: "usable",
    valueKicker: "Cómo cambia el trabajo",
    valueHeading: "El trabajo desordenado se convierte en algo accionable.",
    valueText:
      "Selecciona una etapa. El mismo patrón aparece en reportes, paneles, datos de precios y documentos QA/QC.",
    activeStage: "Etapa activa",
    careerRoute: "Ruta profesional",
    timelineHeading: "De operaciones industriales a herramientas funcionando.",
    timelineText: "No es un giro aleatorio hacia programación. Es criterio operativo convertido en sistemas útiles.",
    workSamples: "Muestras de trabajo",
    workSamplesHeading: "Cuatro herramientas, un mismo patrón operativo.",
    workSamplesText:
      "Son vistas saneadas de proyectos locales: sin nombres privados, direcciones, contactos, coordenadas ni identificadores de archivo.",
    problemToOutput: "Del problema a la salida",
    operatingSystem: "Sistema de trabajo",
    skillsHeading: "Capacidades agrupadas por lo que producen.",
    skillsText:
      "El valor no está en listar herramientas aisladas. Está en entender el trabajo, estructurar el sistema y hacer la salida útil.",
    recruiterHeading: "Operaciones prácticas. Herramientas útiles. Listo para remoto.",
    recruiterText:
      "Mejor encaje donde el equipo necesita responsabilidad sobre procesos, criterio de producto, analítica y automatización ligera.",
    targetRoles: "Roles objetivo",
    remoteNote:
      "Abierto a equipos remotos en la UE, Reino Unido y globales. El mejor encaje está donde se cruzan procesos de negocio, implementación de producto y herramientas de datos.",
    experienceAnchors: "Anclas de experiencia",
    problemConstraints: "Problema / restricciones",
    whySystem: "Por qué necesitaba un sistema",
    outputImpact: "Salida / impacto",
    whatThisProves: "Qué demuestra",
    stackEvidence: "Tecnologías y evidencia",
    inputLabel: "Entrada",
    systemLabel: "Sistema",
    outputLabel: "Salida",
    evidenceLabel: "Evidencia",
    usedIn: "Usado en",
    strongestProof: "Prueba más fuerte",
    builtAroundWorkflow: "Construido alrededor del flujo real",
    nextStep: "Siguiente paso",
    returnToCv: "Volver al CV interactivo",
    cockpit: "Panel",
    coreOperatingSystem: "Sistema de trabajo principal",
    selectedExperience: "Experiencia seleccionada",
    featuredProjectProof: "Prueba de proyectos destacados",
    education: "Educación",
    pdf: "PDF",
  },
} as const;

const profileEs = {
  role: "Especialista remoto en operaciones y automatización de datos",
  location: "Badajoz, España",
  availability: "Remoto desde España | equipos UE y globales",
  headline:
    "Ingeniero industrial con experiencia liderando operaciones, trabajando en SaaS remoto y construyendo herramientas prácticas para reportes, paneles, inteligencia de precios, QA/QC y automatización de procesos.",
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
    { label: "Modo de trabajo", value: "Basado en España, compatible con trabajo asíncrono y coordinación entre equipos" },
  ],
};

const signalCardsEs = [
  { label: "Amazon Ops", detail: "personas lideradas en operaciones Amazon" },
  { label: "SaaS/Producto", detail: "precios SaaS y procesos de ingresos" },
  { label: "Automatización", detail: "proyectos destacados de automatización y datos" },
  { label: "Remoto", detail: "inglés, además de español y portugués" },
];

const capabilityGroupsEs: Array<Omit<CapabilityGroup, "icon">> = [
  {
    name: "Operar",
    verb: "Entender el trabajo",
    input: "campo, colas de servicio, brechas QA",
    system: "ritmo de estados, responsables y traspasos",
    items: ["flujos de campo", "seguimiento KPI", "QA/QC", "traspasos"],
    output: "Una visión clara de qué debe pasar después.",
    usedIn: ["SolarTrack", "Amazon", "reportes"],
  },
  {
    name: "Analizar",
    verb: "Encontrar la señal",
    input: "datos de precios, exportaciones, páginas de mercado",
    system: "controles SQL/Python y paneles",
    items: ["SQL", "análisis de precios", "investigación de mercado", "paneles"],
    output: "Contexto más limpio para decidir y priorizar.",
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
    verb: "Hacerlo usable",
    input: "fricción de usuario y requisitos del proceso",
    system: "interfaces React/Next/FastAPI",
    items: ["React", "Next.js", "TypeScript", "FastAPI"],
    output: "Herramientas web pequeñas que la gente puede usar de verdad.",
    usedIn: ["SolarTrack", "report builder", "portfolio"],
  },
  {
    name: "Comunicar",
    verb: "Conectar equipos",
    input: "usuarios, producto y contexto de negocio",
    system: "seguimiento claro y traducción técnica",
    items: ["inglés C2", "español nativo", "portugués C1", "seguimiento entre equipos"],
    output: "Mejor traducción entre usuarios, necesidades de negocio y trabajo técnico.",
    usedIn: ["SaaS", "implementación", "equipos remotos"],
  },
];

const workflowStagesEs = [
  { label: "entradas crudas", detail: "PDFs, hojas, exportaciones, páginas de mercado" },
  { label: "lógica del proceso", detail: "reglas, estados, responsables, validación" },
  { label: "datos estructurados", detail: "tablas, registros, catálogos, controles" },
  { label: "salidas automáticas", detail: "paneles, reportes, documentos, exportaciones" },
  { label: "decisiones de negocio", detail: "precios, revisión QA, seguimiento, acción" },
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
      "Construí experiencia SaaS remota en Perchpeek y PriceLabs, combinando trabajo de cara al cliente con precios dinámicos, gestión de ingresos, investigación de mercado, investigación de producto y comunicación entre equipos.",
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
    context: "Trabajo independiente desde España para procesos de negocio prácticos.",
    bullets: [
      "Construí herramientas para reportes de inspección, organización de proyectos solares, inteligencia inmobiliaria, trazabilidad QA/QC, extracción de datos de equipos, paneles y automatización documental.",
      "Trabajé con React/TypeScript, Next.js, FastAPI, Python, SQL/PostgreSQL, SQLite, PDF/OCR, generación DOCX y automatización de hojas de cálculo.",
      "Me enfoqué en utilidad operativa: entradas más limpias, estados claros, validación, salidas repetibles y reportes listos para traspaso.",
    ],
  },
  {
    period: "Junio 2023 - Junio 2025",
    organization: "PriceLabs",
    role: "SaaS remoto de precios, ingresos y operaciones de producto",
    context: "SaaS de gestión de ingresos para precios de alquileres de corta estancia.",
    bullets: [
      "Trabajé con análisis de precios, investigación de mercado, investigación de comportamiento de producto, dudas de clientes y procesos de gestión de ingresos.",
      "Traduje problemas de precios/producto en seguimiento operativo más claro para clientes y equipos internos.",
      "Construí criterio de dominio en SaaS, revenue management hotelero, paneles, lógica de precios y trabajo remoto entre equipos.",
    ],
  },
  {
    period: "2021 - 2023",
    organization: "PerchPeek",
    role: "Operaciones remotas de cliente y producto SaaS",
    context: "Entorno de tecnología de relocation con procesos operativos de cara al cliente.",
    bullets: [
      "Apoyé operaciones SaaS remotas combinando comunicación con clientes, seguimiento de procesos y resolución de incidencias de producto.",
      "Desarrollé mejor criterio sobre brechas de implementación, fricción de usuario y el traspaso entre proceso de negocio y comportamiento de producto.",
    ],
  },
  {
    period: "Mayo 2021 - Enero 2023",
    organization: "Padme Yoga",
    role: "Manager y cofundador",
    context: "Negocio local de bienestar con operaciones, agenda, seguimiento comercial y coordinación de equipo.",
    bullets: [
      "Gestioné operaciones diarias, agenda, comunicación con interlocutores, iniciativas de ingresos y coordinación de equipo.",
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
      "Gestioné cuentas, planificación, marketing, operaciones diarias, análisis de datos y comunicación con interlocutores.",
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
    eyebrow: "Flujos de inspección",
    summary:
      "Una plataforma web con trabajo local que convierte proyectos de inspección, fotos, anotaciones, OCR, catálogos y plantillas en reportes DOCX estructurados.",
    input: "fotos de inspección, PDFs, certificados, catálogos de incidencias y metadatos de proyecto",
    system: "mesa de trabajo React/FastAPI con almacenamiento local, estados de revisión, OCR y generación DOCX",
    problem:
      "El reporte de inspecciones puede caer en manejo manual de archivos, ediciones repetidas en Word, catálogos inconsistentes y poca trazabilidad entre fotos, hallazgos y reporte final.",
    role: "Diseñador del flujo e implementador full-stack",
    output: "Flujo estructurado de inspección con salida DOCX generada",
    constraints: [
      "Había que preservar la fiabilidad de un proceso muy dependiente de documentos.",
      "La evidencia, anotaciones, catálogos y generación del reporte debían seguir siendo trazables.",
      "Tenía que funcionar localmente sin convertir un flujo de campo en una dependencia cloud frágil.",
    ],
    built: [
      "Flujo web en React y TypeScript para proyectos, metadatos, archivos, anotaciones, clasificaciones y ajustes de generación.",
      "Backend FastAPI con almacenamiento local de proyectos, archivos subidos, imágenes procesadas, copias de seguridad de catálogos y reportes generados.",
      "Generación DOCX, soporte OCR, manejo de imágenes, catálogos, mapas/geocoding y descargas.",
    ],
    value: [
      "Reduce trabajo repetido de formateo de reportes.",
      "Mejora la consistencia entre evidencia de inspección y salida del reporte.",
      "Crea un camino desde procesos manuales/de escritorio hacia una herramienta web operativa.",
    ],
    proof: ["API para proyectos/archivos/catálogos/reportes", "Modelo de trabajo local", "Flujo de reporte generado"],
    evidence: ["Captura local de la app Vite/FastAPI con un proyecto demo saneado.", "Otros proyectos visibles fueron tapados y sustituidos por etiquetas demo."],
    proves: [
      "Modelo el proceso operativo antes de elegir la interfaz.",
      "Conecta flujo de usuario, archivos, APIs y automatización documental.",
      "Construye herramientas internas con estructura suficiente para superar scripts puntuales.",
    ],
    workflow: ["configuración de proyecto", "subida de fotos", "catálogo de incidencias", "exportación DOCX"],
  },
  "solartrack-workflow-pwa": {
    title: "SolarTrack PWA de operaciones",
    shortTitle: "SolarTrack PWA",
    eyebrow: "Organizador desplegado",
    summary:
      "Una PWA desplegada en Next.js para visitas de proyectos renovables, estado de reportes, contactos, paneles, mapas, importación CSV/Excel y seguimiento operativo.",
    input: "calendarios de visita, asesores, estado de reportes, contactos, importaciones y gastos",
    system: "PWA en Next.js con panel, calendario, mapas, registros, filtros, importaciones, autenticación y scripts QA",
    problem:
      "Los flujos de campo y asesoría necesitan un lugar fiable para seguir visitas, reportes pendientes, contactos, gastos, estado de proyectos y traspasos entre asesores.",
    role: "Diseñador e implementador de producto y proceso",
    output: "PWA desplegada para visitas, reportes, contactos, mapas, importaciones y seguimiento operativo",
    constraints: [
      "Tenía que servir para uso operativo diario, no solo para verse bien en una demo.",
      "Debía soportar varias vistas del mismo trabajo: calendario, proyectos, reportes, contactos, mapas y gastos.",
      "Tenía que manejar importaciones prácticas y registros editables manteniendo el despliegue en Vercel.",
    ],
    built: [
      "PWA Next.js 16 y TypeScript con KPIs, calendario, tablas de proyectos, contactos, mapas, gastos, reportes y ajustes.",
      "Importación CSV/Excel, detalles editables de visitas, filtros por año/mes/asesor/cliente/estado y progreso visual de reportes.",
      "Autenticación, Neon/PostgreSQL, Prisma, despliegue en Vercel y scripts de prueba/persistencia en la app de producto.",
    ],
    value: [
      "Muestra pensamiento de producto en un organizador diseñado para uso operativo diario.",
      "Demuestra diseño de paneles, modelado de procesos, importación de datos, despliegue y detalle operativo.",
      "Da una prueba viva para roles de implementación y operaciones de producto.",
    ],
    proof: ["App desplegada en Vercel", "PWA", "Import CSV/Excel", "filtros de panel", "scripts QA"],
    evidence: ["Vista basada en los componentes reales de panel, navegación y reportes de SolarTrack.", "No se usó captura cruda porque el almacenamiento local contiene registros operativos privados."],
    proves: [
      "Crea estructura de producto alrededor de un flujo real de negocio.",
      "Traduce operaciones de campo en navegación, registros, filtros y estados.",
      "Construye y verifica aplicaciones Next.js desplegadas.",
    ],
    workflow: ["registros de visita", "filtros de estado", "cola de reportes", "seguimiento"],
  },
  "real-estate-pricing-intelligence": {
    title: "MVP de Inteligencia de Precios Inmobiliarios",
    shortTitle: "Inteligencia de precios",
    eyebrow: "Producto de datos de mercado",
    summary:
      "Un MVP de inteligencia inmobiliaria para un mercado fragmentado con scraping, ETL, almacenamiento geoespacial, deduplicación, métricas de confianza, paneles y reportes.",
    input: "listados públicos, snapshots de fuente, zonas, precios, geografía y frescura",
    system: "ingesta multi-fuente, modelo PostgreSQL/PostGIS, deduplicación, scoring de confianza y reportes",
    problem:
      "Los datos inmobiliarios son inconsistentes, duplicados, desiguales geográficamente y afectados por volatilidad de moneda. Un producto útil necesita observaciones crudas, métricas normalizadas y señales de confianza.",
    role: "Diseñador de producto de datos y pipeline",
    output: "Pipeline de inteligencia de mercado con almacenamiento geoespacial, paneles y reportes",
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
      "Convierte listados públicos fragmentados en inteligencia de precios estructurada.",
      "Separa observaciones crudas de métricas publicables para un análisis más confiable.",
      "Demuestra ingeniería de datos, analítica, pensamiento de producto y razonamiento de mercado.",
    ],
    proof: ["ingesta multi-fuente", "modelo geoespacial", "métricas de frescura", "generación de reportes"],
    evidence: ["Vista basada en reportes diarios generados por el MVP.", "Zonas exactas y nombres de fuentes se generalizan en el asset público."],
    proves: [
      "Piensa como responsable de producto de datos, no solo como implementador de scraping.",
      "Diseña alrededor de confianza de datos, calidad de fuente y utilidad operativa.",
      "Conecta lógica de mercado, bases de datos, paneles y reportes.",
    ],
    workflow: ["listados crudos", "deduplicación", "confianza geo", "reporte de mercado"],
  },
  "industrial-qaqc-data-automation": {
    title: "Automatizacion Industrial QA/QC",
    shortTitle: "Automatización QA/QC",
    eyebrow: "Datos industriales",
    summary:
      "Automatización de flujos industriales QA/QC y datos de equipos mediante extracción, validación, normalización y trazabilidad desde fuentes Excel y PDF.",
    input: "registros Excel, sets PDF, listas de sistemas, referencias débiles y anomalías",
    system: "índice maestro, catálogos cerrados, mapas de cobertura, resúmenes de validación y exportaciones revisables",
    problem:
      "La documentación industrial suele vivir en hojas inconsistentes, grandes sets PDF, referencias repetidas y validación manual, lo que hace difícil confiar en la trazabilidad.",
    role: "Implementador de automatización de datos industriales",
    output: "Flujo QA/QC trazable desde documentos hasta salidas validadas",
    constraints: [
      "Las entradas dependían mucho de documentos, eran inconsistentes y difíciles de auditar manualmente.",
      "Las salidas debían preservar trazabilidad y posibilidad de revisión.",
      "La solución debía soportar validación, no solo extracción.",
    ],
    built: [
      "Generación de índice maestro documental desde fuentes Excel y PDF.",
      "Catálogos cerrados, reglas de normalización, mapas de cobertura, reportes de anomalías, resúmenes de validación y entregables Excel finales.",
      "Flujo de extracción de datos de equipos con PDFs indexados, bases SQLite, extracción por etapas, scripts de aprobación QA y panel de revisión.",
    ],
    value: [
      "Reduce reconciliación en hojas de cálculo y revisión documental manual.",
      "Mejora la trazabilidad desde documentos fuente hasta entregables QA/QC.",
      "Demuestra encaje para implementación, análisis de operaciones, datos industriales y roles de producto técnico.",
    ],
    proof: ["índice maestro", "salidas de validación", "mapa de cobertura", "flujo de aprobación QA"],
    evidence: ["Vista basada en salidas generadas de resumen y validación QA/QC.", "Nombres privados de archivos fuente fueron eliminados del asset público."],
    proves: [
      "Aporta criterio de ingeniería industrial al trabajo de automatización de datos.",
      "Construye pipelines revisables para flujos documentales de alta fricción.",
      "Mejora la confianza operativa sin inventar precisión falsa.",
    ],
    workflow: ["entrada documental", "índice maestro", "controles de cobertura", "resumen QA"],
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
