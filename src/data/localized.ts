import {
  capabilityGroups,
  caseStudies,
  professionalExperience,
  profile,
  roleFit,
  signalCards,
  timeline,
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
    recruiterScan: "Hiring snapshot",
    contact: "Contact",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "Resume page",
    printableResume: "Printable resume",
    back: "Back",
    backToSite: "Back to site",
    resume: "Resume",
    viewProjects: "View projects",
    exploreProjects: "Explore projects",
    featuredProjects: "Featured projects",
    openCaseStudy: "Open case study",
    systemBuilt: "What I built",
    roleLabel: "Role",
    resultLabel: "Output",
    situation: "The situation",
    inPractice: "In practice",
    inputsLabel: "Inputs",
    processingLabel: "System behavior",
    outputsLabel: "Outputs",
    madeEasier: "What it made easier",
    hiringTakeaway: "Hiring takeaway",
    toolsUsed: "Tools used",
    publicSampleNote: "Public sample",
    publicSampleIntro: "Screenshots and examples are sanitized and use demo labels where needed.",
    careerRoute: "Career route",
    timelineHeading: "Industrial operations to shipped tools.",
    timelineText: "I started in operations, then moved closer to the tools around the work: SaaS support, pricing, dashboards, reports, and automation.",
    workSamples: "Work samples",
    workSamplesHeading: "Four projects built from real work problems.",
    workSamplesText:
      "These samples use anonymized captures and generated outputs from local projects. They show the kind of tools I have actually worked on.",
    skills: "Skills",
    skillsHeading: "Where I can help.",
    skillsText:
      "These are the areas where my operations background and tool-building work overlap.",
    recruiterHeading: "Best fit: implementation, product operations, RevOps, and data-heavy operations roles.",
    recruiterText:
      "I am strongest when a role needs operational judgment, customer-facing SaaS experience, data cleanup, reporting, and practical internal tools.",
    targetRoles: "Target roles",
    experienceAnchors: "Experience anchors",
    experienceAnchorItems: [
      "Led a 107-person Amazon operations team.",
      "Worked remotely at PriceLabs and PerchPeek in SaaS/customer/product-adjacent roles.",
      "Built independent operations and data automation projects since July 2025.",
    ],
    communicationLanguages: "Communication & languages",
    communicationLanguagesText:
      "Spanish native · English C2 · Portuguese C1 · Remote async documentation · Customer-facing SaaS communication",
    whySystem: "Why I built it",
    stackEvidence: "Stack",
    usedIn: "Used in",
    experienceHighlights: "Experience highlights",
    nextStep: "Next step",
    returnToCv: "Back to the CV",
    home: "Home",
    coreSkills: "Core skills",
    selectedExperience: "Selected experience",
    projectExamples: "Project examples",
    education: "Education",
    pdf: "PDF",
  },
  es: {
    language: "Idioma",
    remoteFromSpain: "Remoto desde España",
    downloadCv: "Descargar CV",
    recruiterScan: "Resumen para contratación",
    contact: "Contacto",
    email: "Email",
    linkedIn: "LinkedIn",
    resumePage: "CV imprimible",
    printableResume: "CV imprimible",
    back: "Volver",
    backToSite: "Volver al sitio",
    resume: "CV",
    viewProjects: "Ver proyectos",
    exploreProjects: "Explorar proyectos",
    featuredProjects: "Proyectos destacados",
    openCaseStudy: "Abrir caso",
    systemBuilt: "Qué construí",
    roleLabel: "Rol",
    resultLabel: "Salida",
    situation: "Situación",
    inPractice: "En la práctica",
    inputsLabel: "Entradas",
    processingLabel: "Comportamiento del sistema",
    outputsLabel: "Salidas",
    madeEasier: "Qué facilitó",
    hiringTakeaway: "Por qué importa para contratación",
    toolsUsed: "Herramientas usadas",
    publicSampleNote: "Nota sobre la muestra",
    publicSampleIntro: "Las capturas y ejemplos están anonimizados y usan etiquetas demo cuando hace falta.",
    careerRoute: "Ruta profesional",
    timelineHeading: "De operaciones industriales a herramientas funcionando.",
    timelineText: "Empecé en operaciones y fui acercándome a las herramientas alrededor del trabajo: SaaS, precios, paneles, reportes y automatización.",
    workSamples: "Muestras de trabajo",
    workSamplesHeading: "Cuatro proyectos creados a partir de problemas reales.",
    workSamplesText:
      "Las muestras usan capturas anonimizadas y salidas generadas a partir de proyectos locales. Enseñan el tipo de herramientas en las que he trabajado.",
    skills: "Habilidades",
    skillsHeading: "Dónde puedo aportar.",
    skillsText:
      "Estas son las áreas donde se cruzan mi experiencia operativa y mi trabajo construyendo herramientas.",
    recruiterHeading: "Mejor encaje: implementación, operaciones de producto, RevOps y roles de datos con foco operativo.",
    recruiterText:
      "Encajo mejor cuando el rol necesita criterio operativo, experiencia SaaS de cara al cliente, limpieza de datos, reportes y herramientas internas sencillas.",
    targetRoles: "Roles objetivo",
    experienceAnchors: "Anclas de experiencia",
    experienceAnchorItems: [
      "Lideré un equipo Amazon de 107 personas.",
      "Trabajé en remoto en PriceLabs y PerchPeek, cerca de SaaS, clientes y producto.",
      "Construyo proyectos independientes de operaciones y automatización de datos desde julio de 2025.",
    ],
    communicationLanguages: "Comunicación e idiomas",
    communicationLanguagesText:
      "Español nativo · Inglés C2 · Portugués C1 · Documentación asíncrona en remoto · Comunicación SaaS con clientes",
    whySystem: "Por qué lo construí",
    stackEvidence: "Tecnologías",
    usedIn: "Usado en",
    experienceHighlights: "Experiencia destacada",
    nextStep: "Siguiente paso",
    returnToCv: "Volver al CV",
    home: "Inicio",
    coreSkills: "Habilidades principales",
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
    "Consultoría de implementación / soluciones",
    "Operaciones de producto / soporte técnico de producto",
    "RevOps / operaciones de datos",
    "BI/Data con foco operativo",
  ],
  recruiterSnapshot: [
    { label: "Encaje", value: "Implementación, operaciones de producto, RevOps y BI/data" },
    { label: "Disponibilidad", value: "Remoto desde España para equipos UE, UK y globales" },
    { label: "Idiomas", value: "Español nativo, inglés C2, portugués C1" },
    { label: "Modo de trabajo", value: "Cómodo con clientes, equipos internos, documentación asíncrona y traspasos" },
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
    name: "Implementación y operaciones",
    verb: "Convertir trabajo real en procesos claros",
    items: ["onboarding", "traspasos", "triage de incidencias", "seguimiento"],
    output: "Mapeo cómo ocurre el trabajo y después adapto el proceso o la herramienta a esa realidad.",
    usedIn: ["liderazgo operativo en Amazon", "trabajo SaaS remoto en PerchPeek / PriceLabs", "SolarTrack Operations PWA"],
  },
  {
    name: "Datos, reportes y análisis",
    verb: "Ordenar datos y mostrar lo importante",
    items: ["SQL", "vistas de precios", "paneles", "controles QA"],
    output: "Estructuro datos operativos para detectar huecos, comparar opciones y decidir con más contexto.",
    usedIn: ["MVP de inteligencia inmobiliaria", "automatización QA/QC industrial", "reportes de inspección"],
  },
  {
    name: "Herramientas internas y automatización",
    verb: "Construir la herramienta que quita trabajo repetido",
    items: ["React", "Next.js", "Python", "FastAPI", "PDF/OCR", "DOCX/Excel"],
    output: "Construyo herramientas ligeras para trabajo con muchos documentos, hojas de cálculo y seguimiento.",
    usedIn: ["plataforma de reportes de inspección", "SolarTrack Operations PWA", "exports de validación QA/QC"],
  },
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
      "Desarrollé la disciplina de trabajo que ahora aplico en implementación, operaciones de producto, BI y automatización.",
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
    hiringTakeaway:
      "Muestra que puedo convertir trabajo documental de campo en herramientas de reporte trazables.",
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
    hiringTakeaway:
      "Muestra que puedo diseñar software operativo alrededor de visitas, asignaciones, seguimiento y responsabilidad.",
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
    hiringTakeaway:
      "Muestra que puedo convertir datos de mercado fragmentados en contexto de precios para decidir mejor.",
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
    hiringTakeaway:
      "Muestra que puedo convertir registros QA/QC documentales en controles, registros y exports trazables.",
  },
};

const roleFitEs = [
  "Consultoría de implementación / soluciones",
  "Operaciones de producto / soporte técnico de producto",
  "RevOps / operaciones de datos",
  "BI/Data con foco operativo",
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
