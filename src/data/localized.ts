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
    downloadCv: "Download ATS CV",
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
    recruiterSummary: "Recruiter summary",
    businessProblem: "Business problem",
    myRole: "My role",
    dataWorkflowInputs: "Data / workflow inputs",
    systemBehavior: "System behavior",
    outputs: "Outputs",
    observableImpact: "Measurable or observable impact",
    roleRelevance: "Role relevance",
    skillsProven: "Skills proven",
    before: "Before",
    after: "After",
    privacySanitization: "Privacy / sanitization note",
    improveNext: "What I would improve next",
    previousCase: "Previous case study",
    nextCase: "Next case study",
    backToHome: "Back to Home",
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
    returnToPortfolio: "Back to portfolio",
    home: "Home",
    coreSkills: "Core skills",
    selectedExperience: "Selected experience",
    projectExamples: "Project examples",
    education: "Education",
    pdf: "ATS PDF",
  },
  es: {
    language: "Idioma",
    remoteFromSpain: "Remoto desde España",
    downloadCv: "Descargar CV ATS",
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
    recruiterSummary: "Resumen para reclutadores",
    businessProblem: "Problema de negocio",
    myRole: "Mi rol",
    dataWorkflowInputs: "Datos y entradas del proceso",
    systemBehavior: "Comportamiento del sistema",
    outputs: "Salidas",
    observableImpact: "Impacto medible u observable",
    roleRelevance: "Relevancia para roles",
    skillsProven: "Habilidades demostradas",
    before: "Antes",
    after: "Después",
    privacySanitization: "Privacidad y anonimización",
    improveNext: "Qué mejoraría después",
    previousCase: "Caso anterior",
    nextCase: "Caso siguiente",
    backToHome: "Volver al inicio",
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
    returnToPortfolio: "Volver al portfolio",
    home: "Inicio",
    coreSkills: "Habilidades principales",
    selectedExperience: "Experiencia seleccionada",
    projectExamples: "Proyectos destacados",
    education: "Educación",
    pdf: "PDF ATS",
  },
} as const;

const profileEs = {
  role: "Especialista en Implementación SaaS y Automatización de Operaciones",
  location: "Badajoz, España",
  availability: "Remoto desde España para equipos de la UE, UK y globales",
  headline:
    "Ingeniero industrial con liderazgo operativo en Amazon, experiencia remota en producto SaaS y proyectos de automatización en reportes, pricing, QA/QC, paneles y procesos documentales.",
  targetRoles: [
    "Consultor de implementación",
    "Consultor de soluciones",
    "Consultor técnico",
    "Especialista de operaciones de producto",
    "Especialista técnico de producto",
    "RevOps / Revenue Operations / pricing",
    "BI/Data Analyst con foco operativo",
  ],
  recruiterSnapshot: [
    {
      label: "Mejor encaje",
      value: [
        "Nivel 1: consultor de implementación; consultor de soluciones; consultor técnico.",
        "Nivel 2: operaciones de producto; especialista técnico de producto.",
        "Nivel 3: RevOps / pricing / Revenue Operations; BI/Data con foco operativo.",
      ].join(" "),
    },
    { label: "Ubicación", value: "Remoto desde España para equipos de la UE, UK y globales" },
    { label: "Idiomas", value: "Español nativo, inglés C2, portugués C1" },
    {
      label: "Evidencia",
      value:
        "Equipo Amazon de 107 personas, experiencia SaaS/producto/pricing en PriceLabs, operaciones remotas en PerchPeek y 4 casos de automatización",
    },
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
    role: "Product Specialist",
    context: "SaaS de gestión de ingresos para precios de alquileres de corta estancia.",
    bullets: [
      "Trabajé con análisis de precios, investigación de mercado, investigación de comportamiento de producto, dudas de clientes y procesos de gestión de ingresos.",
      "Ayudé a convertir problemas de precios/producto en seguimiento más claro para clientes y equipos internos.",
      "Construí experiencia en SaaS, revenue management hotelero, paneles, lógica de precios y trabajo remoto.",
    ],
  },
  {
    period: "Mayo 2022 - Mayo 2023",
    organization: "PerchPeek",
    role: "Customer Success Specialist",
    context: "Entorno de tecnología de relocation con procesos operativos de cara al cliente.",
    bullets: [
      "Apoyé operaciones SaaS remotas con comunicación con clientes, seguimiento y resolución de incidencias de producto.",
      "Desarrollé mejor criterio sobre brechas de implementación, fricción de usuario y el traspaso entre proceso de negocio y comportamiento de producto.",
    ],
  },
  {
    period: "Mayo 2021 - Enero 2023",
    organization: "Padme Yoga",
    role: "Manager y Co-founder",
    context: "Negocio local de bienestar con operaciones, agenda, seguimiento comercial y coordinación de equipo.",
    bullets: [
      "Gestioné operaciones diarias, agenda, comunicación con clientes, iniciativas de ingresos y coordinación de equipo.",
      "Implementé mejoras operativas y comerciales que contribuyeron a un aumento del 30% en ingresos mensuales.",
    ],
  },
  {
    period: "Octubre 2020 - Febrero 2021",
    organization: "Amazon",
    role: "Area Manager",
    context: "Liderazgo operativo de alto volumen con responsabilidad sobre KPIs y disciplina de procesos.",
    bullets: [
      "Lideré y coordiné un equipo operativo de 107 personas, incluyendo seguimiento QA, control de inventario, KPIs y planes de acción.",
      "Desarrollé la disciplina operativa que ahora aplico en implementación, operaciones de producto, BI y automatización.",
    ],
  },
  {
    period: "Julio 2019 - Octubre 2020",
    organization: "Amazon",
    role: "Logistics Specialist",
    context: "Operaciones logísticas y fulfillment con ejecución diaria, calidad y seguimiento de procesos.",
    bullets: [
      "Trabajé en operaciones logísticas, seguimiento de incidencias, procesos de inventario y control de rendimiento.",
      "Desarrollé criterio práctico sobre cuellos de botella, traspasos y datos necesarios para decisiones diarias.",
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
    period: "Enero 2017 - Diciembre 2017",
    organization: "Organizacion El Tunal",
    role: "Industrial Engineering Intern and Thesis Project",
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
    cardProblem: "El trabajo de campo y reporte estaba repartido entre fotos, PDFs, certificados, incidencias y ediciones en Word.",
    cardBuilt:
      "Constructor local de reportes con React/TypeScript + FastAPI, almacenamiento por proyecto, cargas, anotación de imágenes, OCR, catálogos, mapas/geocoding y exportación DOCX.",
    cardValue: "Mejor trazabilidad entre evidencia y reporte, con menos formateo repetido.",
    cardRoleRelevance: "Mejor para: implementación, automatización documental, consultoría técnica",
    recruiterSummary:
      "Este proyecto muestra cómo convierto trabajo documental de campo en un flujo de reportes con trazabilidad desde la fuente hasta la salida, generación DOCX repetible y registros revisables por proyecto.",
    businessProblem:
      "Los reportes de inspección dependen de muchas piezas pequeñas de evidencia. Fotos, PDFs, certificados, incidencias, anotaciones y ediciones en Word pueden separarse si la herramienta no mantiene una cadena clara hasta el reporte final.",
    workflowInputs:
      "Fotos, PDFs, certificados, notas del proyecto, incidencias, anotaciones de imagen, texto OCR, catálogos, mapas y ajustes del reporte.",
    systemBehavior:
      "La app guarda proyectos localmente, organiza archivos subidos, permite anotar imágenes y revisar OCR, mantiene catálogos disponibles y prepara el material para generar reportes repetibles.",
    outputs:
      "Reportes DOCX, archivos revisados, catálogos de incidencias, imágenes procesadas y carpetas de proyecto auditables.",
    observableImpact: [
      "Menos trabajo repetido de formateo en reportes Word.",
      "Más trazabilidad entre evidencia de campo y secciones del reporte.",
      "Una herramienta web interna para un proceso que antes dependía de carpetas y ediciones manuales.",
    ],
    roleRelevance:
      "Este proyecto apoya roles de Implementation Consultant, Solutions Consultant, Technical Consultant y automatización de procesos porque muestra levantamiento de requisitos, diseño de procesos documentales, trazabilidad de fuente a salida y entrega práctica de herramientas.",
    skillsProven: [
      "Levantamiento de requisitos",
      "Automatización documental",
      "Trazabilidad",
      "React/FastAPI",
      "DOCX/OCR",
      "Revisión QA",
    ],
    improveNext: [
      "Añadir permisos de revisión e historial de versiones para reportes generados.",
      "Mejorar la gestión de plantillas para generar distintos tipos de reporte desde los mismos datos.",
    ],
    sampleCaption:
      "La herramienta soporta flujos ES/EN; esta captura demo anonimizada usa etiquetas de interfaz en español.",
    beforeAfter: {
      before: [
        "Carpetas, ediciones en Word y evidencia dispersa.",
        "Manejo manual de imágenes y reportes.",
        "Trazabilidad débil entre fuente y reporte final.",
      ],
      after: [
        "Registros de proyecto estructurados.",
        "Revisión de archivos y generación DOCX.",
        "Rastro auditable de fuente a reporte.",
      ],
    },
    extraNotes: [],
    metrics: ["export DOCX", "OCR", "revisión de archivos"],
    sampleAlt: "Captura anonimizada de la herramienta local de reportes de inspección con un proyecto demo.",
    input: "fotos, PDFs, certificados, listas de incidencias y notas del proyecto",
    system: "app React/FastAPI local con almacenamiento de proyectos, estados de revisión, OCR y generación DOCX",
    problem:
      "Los reportes de inspección pueden convertirse en carpetas, fotos, ediciones de Word, listas de incidencias y certificados dispersos. Lo difícil es mantener cada hallazgo trazable hasta el reporte final.",
    role: "Builder de automatización enfocado en implementación",
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
    cardProblem:
      "Las visitas de proyectos solares necesitan calendario, asignación de asesores, estado de reportes, contactos, mapas, importaciones y seguimiento.",
    cardBuilt:
      "PWA con Next.js/TypeScript, paneles, calendario, tablas de proyectos, contactos, mapas, gastos, reportes, ajustes, importaciones CSV/Excel, autenticación, Prisma/Neon y scripts QA.",
    cardValue:
      "Demuestra criterio de operaciones de producto, despliegue, modelado de estados y responsabilidad operativa.",
    cardRoleRelevance: "Mejor para: operaciones de producto, implementación, producto técnico",
    recruiterSummary:
      "Este proyecto muestra criterio de operaciones de producto: visitas, responsables, estado de reportes, importaciones, paneles y seguimiento dentro de una herramienta desplegada.",
    businessProblem:
      "Los proyectos solares generan muchos pendientes pequeños: visitas, asesores, reportes, contactos, mapas, importaciones, gastos y seguimiento. La herramienta organiza ese estado para verlo y actualizarlo con menos fricción.",
    workflowInputs:
      "Fechas de visita, asesores, proyectos, estado de reportes, contactos, mapas, gastos, importaciones CSV/Excel y notas operativas editables.",
    systemBehavior:
      "La PWA agrupa el trabajo en paneles, calendario, tablas de proyectos, contactos, reportes, ajustes, importaciones, autenticación y pruebas de persistencia.",
    outputs:
      "Visibilidad de proyectos, listas de reportes pendientes, filtros por asesor/proyecto, registros importados, paneles y vistas de estado.",
    observableImpact: [
      "Hace más fácil encontrar pendientes entre proyectos, asesores, reportes y contactos.",
      "Muestra despliegue real con persistencia, autenticación, importaciones y scripts QA.",
      "Sirve como ejemplo concreto para conversaciones de implementación y operaciones de producto.",
    ],
    roleRelevance:
      "Este proyecto apoya roles de Product Operations, Technical Product Specialist, Implementation Consultant y Technical Consultant porque muestra mapeo de procesos, modelado de estados, importaciones, dashboards, seguimiento de usuarios, despliegue, persistencia y scripts QA.",
    skillsProven: [
      "Operaciones de producto",
      "Diseño de procesos",
      "Paneles",
      "Seguimiento de estados",
      "Importaciones",
      "Despliegue y pruebas de persistencia",
    ],
    improveNext: [
      "Añadir permisos por rol para distintos usuarios operativos.",
      "Añadir historial de cambios para estados de reporte y registros importados.",
    ],
    sampleCaption:
      "La app desplegada es privada porque contiene registros operativos. Este caso público usa capturas anonimizadas y etiquetas demo.",
    extraNotes: [
      {
        title: "Relevancia para implementación",
        body:
          "Este proyecto muestra cómo abordo trabajo de implementación: entender el proceso, definir responsables y estados, importar registros con fricción, crear visibilidad operativa y probar que el sistema persiste la información correcta.",
      },
    ],
    metrics: ["desplegada", "PWA", "varias vistas"],
    sampleAlt: "Vista anonimizada de SolarTrack basada en la app local de organización de proyectos.",
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
      "PWA Next.js / TypeScript con KPIs, calendario, tablas de proyectos, contactos, mapas, gastos, reportes y ajustes.",
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
    cardProblem:
      "Los datos públicos de listados están duplicados, son inconsistentes, tienen geografía irregular y se ven afectados por moneda y frescura.",
    cardBuilt:
      "Scraping/ETL en Python, PostgreSQL/PostGIS, deduplicación, métricas de confianza/frescura, paneles y reportes diarios/semanales.",
    cardValue: "Convierte observaciones de mercado fragmentadas en contexto útil de pricing.",
    cardRoleRelevance: "Mejor para: RevOps, pricing, BI/data, inteligencia de mercado",
    recruiterSummary:
      "Este proyecto muestra cómo convierto datos públicos de mercado en contexto de pricing mediante ETL, controles de calidad, estructura geoespacial, señales de confianza/frescura y reportes.",
    businessProblem:
      "Los datos inmobiliarios públicos son ruidosos. Una propiedad puede repetirse, las ubicaciones no siempre están limpias, la moneda cambia y los anuncios antiguos pueden distorsionar decisiones de pricing.",
    workflowInputs:
      "Listados públicos, capturas por fuente, precios, atributos de propiedades, ubicación, zonas, moneda, fechas de frescura y posibles duplicados.",
    systemBehavior:
      "El pipeline captura observaciones, almacena datos geoespaciales, separa registros crudos de métricas publicables, marca problemas de frescura/confianza y prepara paneles y reportes.",
    outputs:
      "Contexto de precios por zona y tipo de propiedad, registros deduplicados, indicadores de confianza/frescura, paneles y reportes de mercado.",
    observableImpact: [
      "Separa observaciones crudas de vistas de pricing listas para análisis.",
      "Hace explícitos los riesgos de frescura, geografía y duplicados.",
      "Da una mejor base para conversaciones comerciales y de mercado.",
    ],
    roleRelevance:
      "Este proyecto apoya roles de RevOps, Pricing Analyst, Revenue Operations, BI/Data Analyst y producto de datos porque muestra ETL, calidad de datos, geografía, deduplicación, scoring de confianza/frescura y reporting.",
    skillsProven: [
      "Calidad de datos",
      "ETL",
      "Análisis geoespacial",
      "Contexto de pricing",
      "Deduplicación",
      "Reportes",
    ],
    improveNext: [
      "Añadir paneles más claros de calidad por fuente para usuarios no técnicos.",
      "Automatizar la revisión de ubicaciones no resueltas y duplicados de alto impacto.",
    ],
    sampleCaption:
      "Vista anonimizada de inteligencia de pricing basada en salidas del MVP local, con zonas exactas y fuentes generalizadas.",
    extraNotes: [
      {
        title: "Nota de gobernanza / ética de datos",
        body:
          "Construido como MVP con datos públicos y ejemplos anonimizados. Un uso productivo requeriría revisar cumplimiento por fuente, límites de frecuencia, permisos y reglas claras de gobernanza de datos.",
      },
      {
        title: "Ejemplo de salida",
        body:
          "Resumen diario de mercado por zona/tipo de propiedad, alertas de frescura, flags de riesgo de duplicado, notas de confianza y vistas de contexto de pricing para conversaciones de mercado.",
      },
    ],
    metrics: ["ETL", "PostGIS", "reportes de mercado"],
    sampleAlt: "Vista anonimizada del dashboard de inteligencia de pricing basada en el MVP local.",
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
    cardProblem:
      "Los registros QA/QC estaban repartidos entre Excel, dossiers PDF, referencias débiles, listas de equipos y revisiones manuales.",
    cardBuilt:
      "Índice maestro, catálogos cerrados, mapas de cobertura, reportes de anomalías, resúmenes de validación, flujos SQLite/Pandas, scripts de aprobación QA y salidas Excel trazables.",
    cardValue: "La muestra pública cubre 1.594 registros, 98 sistemas y 13.351 checks.",
    cardRoleRelevance: "Mejor para: operaciones de datos, QA/QC, implementación, BI",
    recruiterSummary:
      "Este proyecto muestra cómo convierto registros industriales documentales en índices trazables, validaciones, alertas de anomalías y exports listos para revisión.",
    businessProblem:
      "La documentación QA/QC es difícil de confiar cuando vive entre hojas de cálculo, dossiers PDF, referencias repetidas, equipos y revisiones manuales. Hacía falta una forma repetible de indexar, validar y revisar el material.",
    workflowInputs:
      "Registros Excel, dossiers PDF, listas de sistemas, equipos, referencias débiles, tolerancias, anomalías y controles de aprobación.",
    systemBehavior:
      "Los scripts crean un índice maestro, normalizan catálogos, comparan cobertura, detectan anomalías, preparan extracción de equipos y generan resúmenes de validación y salidas Excel.",
    outputs:
      "Registros QA/QC trazables, mapas de cobertura, reportes de anomalías, datos de equipos, resúmenes de validación, exports de aprobación y Excels revisables.",
    observableImpact: [
      "Menos reconciliación manual entre hojas de cálculo y PDFs.",
      "Estado de validación y trazabilidad más fáciles de revisar.",
      "Muestra pública: 1.594 registros, 98 sistemas, 13.351 checks.",
    ],
    roleRelevance:
      "Este proyecto apoya roles de Data Operations, BI/Data Analyst, Implementation Consultant, QA/QC y automatización operativa porque muestra normalización documental, pipelines de validación, detección de anomalías, trazabilidad y exports listos para revisión.",
    skillsProven: [
      "Datos industriales",
      "Pipelines de validación",
      "Procesamiento Excel/PDF",
      "Detección de anomalías",
      "Trazabilidad",
      "Exports revisables",
    ],
    improveNext: [
      "Añadir una pequeña interfaz de revisión para aprobar anomalías y resultados de extracción.",
      "Añadir logs de ejecución más claros para entender qué cambió entre exports.",
    ],
    sampleCaption:
      "Vista anonimizada del índice maestro QA/QC basada en salidas de validación generadas. No se muestran nombres privados de archivos fuente.",
    extraNotes: [
      {
        title: "Valor de negocio",
        body:
          "El valor no fue solo automatizar; hizo que el estado documental, la cobertura faltante, las referencias repetidas y la preparación para revisión fueran más fáciles de confiar.",
      },
      {
        title: "Ejemplo de trazabilidad",
        body:
          "PDF/registro fuente -> registro normalizado -> check de validación -> flag de anomalía -> export Excel listo para revisión.",
      },
    ],
    metrics: ["1.594 registros", "98 sistemas", "13.351 checks"],
    sampleAlt: "Vista anonimizada del índice maestro QA/QC basada en salidas de validación generadas.",
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
  "Consultor de implementación",
  "Consultor de soluciones",
  "Consultor técnico",
  "Operaciones de producto / producto técnico",
  "RevOps / Revenue Operations / pricing",
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
