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
    recruiterScan: "Vista recruiter",
    viewProof: "Ver proyectos",
    contact: "Contacto",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "CV imprimible",
    printableResume: "CV imprimible",
    back: "Volver",
    backToCockpit: "Volver al cockpit",
    resume: "CV",
    operationsCockpit: "Cockpit de operaciones",
    fastProofFirst: "Prueba rápida primero",
    exploreSystems: "Explorar sistemas",
    recruiter: "Recruiter",
    explorer: "Explorar",
    whyProfileWorks: "Por qué este perfil encaja",
    topRoleFit: "Mejor encaje",
    sanitizedNote:
      "Vista saneada a partir de rutas y salidas de proyectos locales. Nombres privados, ubicaciones, contactos, coordenadas e identificadores de archivos se reemplazan por valores demo.",
    valuePipeline: "Pipeline de valor",
    showStage: "Mostrar",
    openCaseStudy: "Abrir caso",
    sanitizedWorkSample: "Muestra saneada",
    workflowRun: "Flujo de trabajo",
    workflowRunHeading: "De entrada desordenada a salida útil",
    systemDesigned: "Sistema diseñado",
    operatingFlow: "Flujo operativo",
    raw: "desordenado",
    structured: "estructurado",
    usable: "usable",
    valueKicker: "Cómo cambia el trabajo",
    valueHeading: "El trabajo desordenado se convierte en algo accionable.",
    valueText:
      "Pulsa el runbook. El mismo patrón aparece en reportes, dashboards, pricing data y documentos QA/QC.",
    activeStage: "Etapa activa",
    careerRoute: "Ruta profesional",
    timelineHeading: "De operaciones industriales a herramientas funcionando.",
    timelineText: "No es un giro aleatorio hacia programación. Es criterio operativo convertido en sistemas útiles.",
    workSamples: "Muestras de trabajo",
    workSamplesHeading: "Cuatro herramientas, un mismo patrón operativo.",
    workSamplesText:
      "Son vistas saneadas de proyectos locales: sin nombres privados, direcciones, contactos, coordenadas ni identificadores de archivo.",
    problemToOutput: "Del problema a la salida",
    operatingSystem: "Sistema operativo",
    skillsHeading: "Skills agrupados por lo que producen.",
    skillsText:
      "El valor no está en listar herramientas aisladas. Está en entender el trabajo, estructurar el sistema y hacer la salida útil.",
    recruiterHeading: "Operaciones prácticas. Herramientas útiles. Listo para remoto.",
    recruiterText:
      "Mejor encaje donde el equipo necesita ownership de procesos, criterio de producto, analítica y automatización ligera.",
    targetRoles: "Roles objetivo",
    remoteNote:
      "Abierto a equipos remotos en la UE, Reino Unido y globales. El mejor encaje está donde se cruzan workflow de negocio, implementación de producto y tooling de datos.",
    experienceAnchors: "Anclas de experiencia",
    problemConstraints: "Problema / restricciones",
    whySystem: "Por qué necesitaba un sistema",
    outputImpact: "Salida / impacto",
    whatThisProves: "Qué demuestra",
    stackEvidence: "Stack y evidencia",
    builtAroundWorkflow: "Construido alrededor del workflow real",
    nextStep: "Siguiente paso",
    returnToCv: "Volver al CV interactivo",
    cockpit: "Cockpit",
    coreOperatingSystem: "Sistema operativo principal",
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
    "Ingeniero industrial con experiencia liderando operaciones, trabajando en SaaS remoto y construyendo herramientas prácticas para reportes, dashboards, inteligencia de precios, QA/QC y automatización de workflows.",
  targetRoles: [
    "Consultor de Implementación",
    "Consultor de Soluciones",
    "Analista RevOps",
    "Analista de Product Ops",
    "Analista BI/Data",
    "Technical Product Specialist",
  ],
  recruiterSnapshot: [
    { label: "Encaje", value: "Implementación, RevOps, Product Ops, BI" },
    { label: "Disponibilidad", value: "Abierto a roles remotos UE, UK y globales" },
    { label: "Idiomas", value: "Español nativo, inglés C2, portugués C1" },
    { label: "Setup", value: "Basado en España, async-friendly, orientado a stakeholders" },
  ],
};

const signalCardsEs = [
  { label: "Amazon Ops", detail: "personas lideradas en operaciones Amazon" },
  { label: "SaaS/Product", detail: "pricing SaaS y workflows de revenue" },
  { label: "Automatización", detail: "proyectos destacados de automatización/data" },
  { label: "Remoto", detail: "inglés, más español y portugués" },
];

const capabilityGroupsEs: Array<Omit<CapabilityGroup, "icon">> = [
  {
    name: "Operar",
    verb: "Entender el trabajo",
    items: ["workflows de campo", "seguimiento KPI", "QA/QC", "handoffs"],
    output: "Una vision clara de que debe pasar despues.",
  },
  {
    name: "Analizar",
    verb: "Encontrar la señal",
    items: ["SQL", "análisis de precios", "research de mercado", "dashboards"],
    output: "Contexto más limpio para decidir y priorizar.",
  },
  {
    name: "Automatizar",
    verb: "Quitar trabajo repetitivo",
    items: ["Python", "ETL", "PDF/OCR", "generación DOCX/Excel"],
    output: "Salidas repetibles desde documentos, hojas y registros operativos.",
  },
  {
    name: "Construir",
    verb: "Hacerlo usable",
    items: ["React", "Next.js", "TypeScript", "FastAPI"],
    output: "Herramientas web pequeñas que la gente puede usar de verdad.",
  },
  {
    name: "Comunicar",
    verb: "Conectar equipos",
    items: ["inglés C2", "español nativo", "portugués C1", "seguimiento de stakeholders"],
    output: "Mejor traducción entre usuarios, necesidades de negocio y trabajo técnico.",
  },
];

const workflowStagesEs = [
  { label: "entradas crudas", detail: "PDFs, hojas, exports, paginas de mercado" },
  { label: "lógica del workflow", detail: "reglas, estados, ownership, validación" },
  { label: "datos estructurados", detail: "tablas, registros, catálogos, checks" },
  { label: "salidas automáticas", detail: "dashboards, reportes, documentos, exports" },
  { label: "decisiones de negocio", detail: "pricing, revisión QA, follow-up, acción" },
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
    title: "Operaciones de cliente, soporte de producto y revenue workflows",
    summary:
      "Construí experiencia SaaS remota en Perchpeek y PriceLabs, combinando trabajo customer-facing con pricing, revenue management, research de mercado, investigación de producto y comunicación con stakeholders.",
    signals: ["SaaS remoto", "pricing", "market research", "product operations"],
  },
  {
    period: "2025-presente",
    label: "Automatización independiente",
    title: "Proyectos independientes de operaciones y automatización de datos",
    summary:
      "Construí herramientas para reportes de inspección, organización solar, inteligencia inmobiliaria, trazabilidad QA/QC, extracción de equipos, dashboards y automatización documental.",
    signals: ["Python", "SQL", "React", "FastAPI", "Next.js", "PostgreSQL"],
  },
];

const experienceEs: ProfessionalExperience[] = [
  {
    period: "Julio 2025 - Presente",
    organization: "Proyectos Independientes de Operaciones y Automatización de Datos",
    role: "Builder remoto de workflows, datos y sistemas web",
    context: "Trabajo independiente desde España para workflows de negocio prácticos.",
    bullets: [
      "Construí herramientas para reportes de inspección, organización de proyectos solares, inteligencia inmobiliaria, trazabilidad QA/QC, extracción de datos de equipos, dashboards y automatización documental.",
      "Trabajé con React/TypeScript, Next.js, FastAPI, Python, SQL/PostgreSQL, SQLite, PDF/OCR, generación DOCX y automatización de hojas de cálculo.",
      "Me enfoqué en utilidad operativa: entradas más limpias, estados claros, validación, salidas repetibles y reportes listos para handoff.",
    ],
  },
  {
    period: "Junio 2023 - Junio 2025",
    organization: "PriceLabs",
    role: "Pricing SaaS remoto, revenue y product operations",
    context: "SaaS de revenue management para pricing de alquileres de corta estancia.",
    bullets: [
      "Trabajé con análisis de precios, research de mercado, investigación de comportamiento de producto, dudas customer-facing y workflows de revenue management.",
      "Traduje problemas de pricing/producto en seguimiento operativo más claro para clientes y stakeholders internos.",
      "Construí criterio de dominio en SaaS, revenue management hotelero, dashboards, lógica de pricing y trabajo remoto cross-functional.",
    ],
  },
  {
    period: "2021 - 2023",
    organization: "PerchPeek",
    role: "Operaciones remotas de cliente y producto SaaS",
    context: "Entorno de relocation technology con workflows operativos customer-facing.",
    bullets: [
      "Apoyé operaciones SaaS remotas combinando comunicación con clientes, seguimiento de workflows y troubleshooting de producto.",
      "Desarrollé mejor criterio sobre gaps de implementación, fricción de usuario y el handoff entre proceso de negocio y comportamiento de producto.",
    ],
  },
  {
    period: "2018 - 2021",
    organization: "Amazon y operaciones de servicio",
    role: "Operaciones, logística, QA y liderazgo de equipo",
    context: "Entornos operativos de alto volumen con ownership de KPIs y disciplina de procesos.",
    bullets: [
      "Lideré y coordiné trabajo operativo incluyendo un equipo Amazon de 107 personas, seguimiento QA, control de inventario, KPIs y planes de acción.",
      "Desarrollé el ritmo operativo que ahora informa mi trabajo en implementación, product operations, BI y automatización.",
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
    eyebrow: "Workflows de inspección",
    summary:
      "Una plataforma web local-first que convierte proyectos de inspección, fotos, anotaciones, OCR, catálogos y plantillas en reportes DOCX estructurados.",
    problem:
      "El reporting de inspecciones puede caer en manejo manual de archivos, ediciones repetidas en Word, catálogos inconsistentes y poca trazabilidad entre fotos, hallazgos y reporte final.",
    role: "Diseñador del workflow e implementador full-stack",
    output: "Workflow estructurado de inspeccion con salida DOCX generada",
    constraints: [
      "Había que preservar la fiabilidad de un proceso muy dependiente de documentos.",
      "La evidencia, anotaciones, catálogos y generación del reporte debían seguir siendo trazables.",
      "Tenía que funcionar localmente sin convertir un workflow de campo en una dependencia cloud frágil.",
    ],
    built: [
      "Workflow web en React y TypeScript para proyectos, front matter, assets, anotaciones, clasificaciones y ajustes de generación.",
      "Backend FastAPI con almacenamiento local-first de proyectos, assets subidos, imágenes procesadas, backups de catálogos y reportes generados.",
      "Generación DOCX, soporte OCR, manejo de imágenes, catálogos, mapas/geocoding y descargas.",
    ],
    value: [
      "Reduce trabajo repetido de formateo de reportes.",
      "Mejora la consistencia entre evidencia de inspección y salida del reporte.",
      "Crea un camino desde procesos manuales/de escritorio hacia una herramienta web operativa.",
    ],
    proof: ["API para proyectos/assets/catálogos/reportes", "Modelo local-first", "Workflow de reporte generado"],
    proves: [
      "Modelo el proceso operativo antes de elegir la interfaz.",
      "Conecta workflow de usuario, archivos, APIs y automatización documental.",
      "Construye herramientas internas con estructura suficiente para superar scripts puntuales.",
    ],
    workflow: ["setup de proyecto", "subida de fotos", "catálogo de issues", "export DOCX"],
  },
  "solartrack-workflow-pwa": {
    title: "SolarTrack Workflow PWA",
    shortTitle: "SolarTrack PWA",
    eyebrow: "Organizador desplegado",
    summary:
      "Una PWA desplegada en Next.js para visitas de proyectos renovables, estado de reportes, contactos, dashboards, mapas, importacion CSV/Excel y follow-up operativo.",
    problem:
      "Los workflows de campo y asesoria necesitan un lugar fiable para seguir visitas, reportes pendientes, contactos, gastos, estado de proyectos y handoffs entre asesores.",
    role: "Diseñador e implementador de producto/workflow",
    output: "PWA desplegada para visitas, reportes, contactos, mapas, imports y seguimiento operativo",
    constraints: [
      "Tenía que servir para uso operativo diario, no solo para verse bien en una demo.",
      "Debía soportar varias vistas del mismo trabajo: calendario, proyectos, reportes, contactos, mapas y gastos.",
      "Tenía que manejar imports prácticos y registros editables manteniendo deploy en Vercel.",
    ],
    built: [
      "PWA Next.js 16 y TypeScript con KPIs, calendario, tablas de proyectos, contactos, mapas, gastos, reportes y settings.",
      "Importación CSV/Excel, detalles editables de visitas, filtros por año/mes/asesor/cliente/estado y progreso visual de reportes.",
      "Autenticacion, Neon/PostgreSQL, Prisma, deploy Vercel y scripts de smoke/persistencia en la app de producto.",
    ],
    value: [
      "Muestra pensamiento de producto en un organizador diseñado para uso operativo diario.",
      "Demuestra dashboard design, modelado de workflows, importación de datos, deploy y detalle operativo.",
      "Da una prueba viva para roles de implementación y product operations.",
    ],
    proof: ["App live en Vercel", "PWA", "Import CSV/Excel", "filtros de dashboard", "scripts QA"],
    proves: [
      "Crea estructura de producto alrededor de un workflow real de negocio.",
      "Traduce operaciones de campo en navegación, registros, filtros y estados.",
      "Construye y verifica aplicaciones Next.js desplegadas.",
    ],
    workflow: ["registros de visita", "filtros de estado", "cola de reportes", "follow-up"],
  },
  "real-estate-pricing-intelligence": {
    title: "MVP de Inteligencia de Precios Inmobiliarios",
    shortTitle: "Pricing intelligence",
    eyebrow: "Producto de datos de mercado",
    summary:
      "Un MVP de inteligencia inmobiliaria para un mercado fragmentado con scraping, ETL, almacenamiento geoespacial, deduplicación, métricas de confianza, dashboards y reportes.",
    problem:
      "Los datos inmobiliarios son inconsistentes, duplicados, desiguales geográficamente y afectados por volatilidad de moneda. Un producto útil necesita observaciones crudas, métricas normalizadas y señales de confianza.",
    role: "Diseñador de producto de datos y pipeline",
    output: "Pipeline de inteligencia de mercado con almacenamiento geoespacial, dashboards y reportes",
    constraints: [
      "Las fuentes eran fragmentadas, inconsistentes y con distinta confiabilidad.",
      "Las métricas publicables debían separarse de las observaciones capturadas.",
      "Geografía, moneda, frescura y listados duplicados afectaban la confianza.",
    ],
    built: [
      "Arquitectura de ingesta multi-fuente con controles por modo, archivo raw y cache de estado actual.",
      "Modelo PostgreSQL/PostGIS para observaciones, entidades, diccionarios de zona y análisis geoespacial.",
      "Deduplicación, manejo de geografía no resuelta, métricas de confianza/frescura, dashboards y reportes diarios/semanales.",
    ],
    value: [
      "Convierte listados públicos fragmentados en inteligencia de precios estructurada.",
      "Separa observaciones crudas de métricas publicables para un análisis más confiable.",
      "Demuestra data engineering, analytics, pensamiento de producto y razonamiento de mercado.",
    ],
    proof: ["ingesta multi-fuente", "modelo geoespacial", "métricas de frescura", "generación de reportes"],
    proves: [
      "Piensa como owner de producto de datos, no solo como implementador de scraping.",
      "Diseña alrededor de confianza de datos, calidad de fuente y utilidad operativa.",
      "Conecta lógica de mercado, bases de datos, dashboards y reportes.",
    ],
    workflow: ["listados raw", "dedupe", "confianza geo", "reporte de mercado"],
  },
  "industrial-qaqc-data-automation": {
    title: "Automatizacion Industrial QA/QC",
    shortTitle: "QA/QC automation",
    eyebrow: "Datos industriales",
    summary:
      "Automatización de workflows industriales QA/QC y datos de equipos mediante extracción, validación, normalización y trazabilidad desde fuentes Excel y PDF.",
    problem:
      "La documentación industrial suele vivir en hojas inconsistentes, grandes sets PDF, referencias repetidas y validación manual, lo que hace difícil confiar en la trazabilidad.",
    role: "Implementador de automatización de datos industriales",
    output: "Workflow QA/QC trazable desde documentos hasta salidas validadas",
    constraints: [
      "Las entradas eran document-heavy, inconsistentes y difíciles de auditar manualmente.",
      "Las salidas debían preservar trazabilidad y posibilidad de revisión.",
      "La solución debía soportar validación, no solo extracción.",
    ],
    built: [
      "Generación de índice maestro documental desde fuentes Excel y PDF.",
      "Catálogos cerrados, reglas de normalización, mapas de cobertura, reportes de anomalías, resúmenes de validación y entregables Excel finales.",
      "Workflow de extracción de datos de equipos con PDFs indexados, bases SQLite, extracción por etapas, scripts de aprobación QA y dashboard de revisión.",
    ],
    value: [
      "Reduce reconciliación en hojas de cálculo y revisión documental manual.",
      "Mejora la trazabilidad desde documentos fuente hasta entregables QA/QC.",
      "Demuestra encaje para implementación, análisis de operaciones, datos industriales y technical product roles.",
    ],
    proof: ["índice maestro", "salidas de validación", "mapa de cobertura", "flujo de aprobación QA"],
    proves: [
      "Aporta criterio de ingeniería industrial al trabajo de automatización de datos.",
      "Construye pipelines revisables para workflows documentales de alta friccion.",
      "Mejora la confianza operativa sin inventar precision falsa.",
    ],
    workflow: ["entrada documental", "índice maestro", "checks de cobertura", "resumen QA"],
  },
};

const roleFitEs = [
  "Consultor de Implementación",
  "Consultor de Soluciones",
  "Analista Revenue Operations",
  "Analista Product Operations",
  "Analista BI/Data",
  "Technical Product Specialist",
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
