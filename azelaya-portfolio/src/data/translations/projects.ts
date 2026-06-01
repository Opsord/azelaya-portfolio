export const projectsTranslations = {
  en: {
    title: "Featured Projects",
    languages: "Languages",
    tools: "Tools",
    role: "Role",
    tasks: "Tasks",
    complexity: {
      label: "Complexity",
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    repo: {
      view: "View repository",
      unavailable: "Repository unavailable"
    },
    items: [
      {
        title: "Architecture Evaluator",
        repository: "https://github.com/Opsord/architecture-evaluator",
        description: "A custom tool to analyze source code of monolithic Spring Boot applications using JavaParser. It evaluates structures like classes, interfaces, and records, helping to detect architectural bad practices.",
        languages: ["Java"],
        tools: ["JavaParser", "Spring Boot"],
        role: "FullStack Developer",
        tasks: [
          "Tool design and development",
          "Source code analysis",
          "Detection of architectural bad practices"
        ],
        complexity: "high"
      },
      {
        title: "Scrum Master & QA Automation at RosenmannLópez",
        description: "Served as QA and Scrum Master in the development team. Coordinated sprints and ensured quality standards for the web project of RosenmannLópez architecture firm.",
        languages: ["JavaScript", "TypeScript"],
        tools: ["React", "GitHub Actions", "Docker", "SonarCloud"],
        role: "QA & Scrum Master",
        tasks: [
          "Automation of CI/CD pipelines",
          "Code quality reviews",
          "Facilitating Scrum ceremonies"
        ],
        complexity: "medium"
      }
    ]
  },
  es: {
    title: "Proyectos en los que he participado",
    languages: "Lenguajes",
    tools: "Herramientas",
    role: "Rol",
    tasks: "Tareas",
    complexity: {
      label: "Complejidad",
      high: "Alta",
      medium: "Media",
      low: "Baja"
    },
    repo: {
      view: "Ver repositorio",
      unavailable: "Repositorio no disponible"
    },
    items: [
      {
        title: "Evaluador de Arquitectura",
        repository: "https://github.com/Opsord/architecture-evaluator",
        description: "Herramienta propia para analizar código fuente de aplicaciones monolíticas Spring Boot, utilizando JavaParser. Evalúa estructuras como clases, interfaces y records, y ayuda a detectar malas prácticas arquitectónicas.",
        languages: ["Java"],
        tools: ["JavaParser", "Spring Boot"],
        role: "Desarrollador FullStack",
        tasks: [
          "Diseño y desarrollo de la herramienta",
          "Análisis de código fuente",
          "Detección de malas prácticas arquitectónicas"
        ],
        complexity: "high"
      },
      {
        title: "Scrum Master y Automatización QA en RosenmannLópez",
        description: "Desempeño como QA y Scrum Master en el equipo de desarrollo. Coordinación de sprints y aseguramiento de calidad en el proyecto web para la oficina de arquitectura RosenmannLópez.",
        languages: ["JavaScript", "TypeScript"],
        tools: ["React", "GitHub Actions", "Docker", "SonarCloud"],
        role: "QA & Scrum Master",
        tasks: [
          "Automatización de pipelines de CI/CD",
          "Revisión de calidad de código",
          "Facilitación de ceremonias Scrum"
        ],
        complexity: "medium"
      }
    ]
  }
};
