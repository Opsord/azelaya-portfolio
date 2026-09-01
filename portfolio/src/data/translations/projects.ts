export const projectsTranslations = {
  en: {
    title: "Featured Projects",
    languages: "Languages",
    tools: "Tools",
    role: "Role",
    tasks: "What I did",
    repo: {
      view: "View repository",
      unavailable: "Repository unavailable"
    },
    items: [
      {
        title: "Cargoability",
        description: "B2B SaaS for international freight forwarding: quote comparison, shipment tracking, and documents between shippers and forwarders. I owned the backend (Java 21 / Spring Boot) and the Google Cloud deployment — replacing a process that lived in email and spreadsheets.",
        languages: ["Java"],
        tools: ["Spring Boot", "PostgreSQL", "Google Cloud", "Stripe", "GCS"],
        role: "Backend & cloud",
        tasks: [
          "Modeled quoting and shipments: Incoterms, multi-forwarder bidding, quote-to-shipment",
          "Domain events after commit for email (SendGrid) and live UI (SSE)",
          "Private files on GCS via 15-minute signed URLs; Stripe plans with atomic quota updates",
          "Deployed and operated the backend on Google Cloud"
        ]
      },
      {
        title: "Architecture Evaluator",
        repository: "https://github.com/Opsord/architecture-evaluator",
        description: "Undergraduate thesis: a static analyzer for monolithic Spring Boot codebases. It walks classes, interfaces, and records with JavaParser to flag architectural smells so design drift shows up before it hardens.",
        languages: ["Java"],
        tools: ["JavaParser", "Spring Boot"],
        role: "Author · thesis",
        tasks: [
          "Designed and implemented the analyzer (Java / JavaParser)",
          "Rules for structural and architectural bad practices in Spring monoliths",
          "Runnable against real Spring Boot source trees"
        ]
      },
      {
        title: "Document & project platform — RosenmannLópez",
        description: "Web platform for an architecture studio: project files, tasks, and folder permissions on Google Drive. The product was built by the team (Django + React). I was PM/PO and owned CI/CD and code quality so it could ship and stay maintainable.",
        languages: ["TypeScript", "Python"],
        tools: ["GitHub Actions", "Docker", "SonarCloud", "Nginx"],
        role: "PM/PO · CI/CD & quality",
        tasks: [
          "GitHub Actions pipelines (test, SonarCloud, Docker) for frontend and backend",
          "Quality gates and code-smell cleanup in SonarCloud",
          "Backlog, sprints, and delivery as PM/PO for the studio"
        ]
      }
    ]
  },
  es: {
    title: "Proyectos destacados",
    languages: "Lenguajes",
    tools: "Herramientas",
    role: "Rol",
    tasks: "Qué hice",
    repo: {
      view: "Ver repositorio",
      unavailable: "Repositorio no disponible"
    },
    items: [
      {
        title: "Cargoability",
        description: "SaaS B2B de freight forwarding: comparación de cotizaciones, seguimiento de embarques y documentos entre clientes y agentes de carga. Me encargué del backend (Java 21 / Spring Boot) y del despliegue en Google Cloud — un proceso que antes vivía en correos y planillas.",
        languages: ["Java"],
        tools: ["Spring Boot", "PostgreSQL", "Google Cloud", "Stripe", "GCS"],
        role: "Backend y cloud",
        tasks: [
          "Modelo de cotizaciones y embarques: Incoterms, licitación a varios forwarders, paso de cotización a shipment",
          "Eventos de dominio tras el commit para email (SendGrid) y UI en vivo (SSE)",
          "Archivos privados en GCS con URLs firmadas de 15 minutos; planes Stripe con cuotas atómicas",
          "Despliegue y operación del backend en Google Cloud"
        ]
      },
      {
        title: "Evaluador de Arquitectura",
        repository: "https://github.com/Opsord/architecture-evaluator",
        description: "Tesis de pregrado: analizador estático para monolitos Spring Boot. Recorre clases, interfaces y records con JavaParser y marca malas prácticas arquitectónicas para ver la deriva de diseño antes de que se endurezca.",
        languages: ["Java"],
        tools: ["JavaParser", "Spring Boot"],
        role: "Autor · tesis",
        tasks: [
          "Diseño e implementación del analizador (Java / JavaParser)",
          "Reglas de malas prácticas estructurales y arquitectónicas en monolitos Spring",
          "Ejecutable sobre árboles de código Spring Boot reales"
        ]
      },
      {
        title: "Plataforma documental — RosenmannLópez",
        description: "Plataforma web para un estudio de arquitectura: documentos de proyecto, tareas y permisos por carpeta sobre Google Drive. El producto lo construyó el equipo (Django + React). Yo fui PM/PO y me encargué de CI/CD y calidad de código para poder entregar y mantener.",
        languages: ["TypeScript", "Python"],
        tools: ["GitHub Actions", "Docker", "SonarCloud", "Nginx"],
        role: "PM/PO · CI/CD y calidad",
        tasks: [
          "Pipelines en GitHub Actions (test, SonarCloud, Docker) para front y back",
          "Quality gates y corrección de code smells en SonarCloud",
          "Backlog, sprints y entrega como PM/PO para el estudio"
        ]
      }
    ]
  }
};
