// File: sections/Projects.tsx
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Evaluador de Arquitectura',
        repository: 'https://github.com/Opsord/architecture-evaluator',
        description: 'Herramienta propia para analizar código fuente de aplicaciones monolíticas Spring Boot, utilizando JavaParser. Evalúa estructuras como clases, interfaces y records, y ayuda a detectar malas prácticas arquitectónicas.',
        languages: ['Java'],
        tools: ['JavaParser', 'Spring Boot'],
        role: 'Desarrollador FullStack',
        tasks: [
            'Diseño y desarrollo de la herramienta',
            'Análisis de código fuente',
            'Detección de malas prácticas arquitectónicas'
        ],
        complexity: 'Alta' as const,
    },
    {
        title: 'Scrum Master y Automatización QA en RosenmannLópez',
        description: 'Desempeño como QA y Scrum Master en el equipo de desarrollo. Coordinación de sprints y aseguramiento de calidad en el proyecto web para la oficina de arquitectura RosenmannLópez.',
        languages: ['JavaScript', 'TypeScript'],
        tools: ['React', 'GitHub Actions', 'Docker', 'SonarCloud'],
        role: 'QA & Scrum Master',
        tasks: [
            'Automatización de pipelines de CI/CD',
            'Revisión de calidad de código',
            'Facilitación de ceremonias Scrum'
        ],
        complexity: 'Media' as const,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen px-4 py-20 bg-gray-800">
            <h2 className="text-3xl font-semibold mb-6 text-center">Proyectos en los que he participado</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;