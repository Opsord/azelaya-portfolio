// File: sections/Projects.tsx

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen px-4 py-20 bg-gray-800">
            <h2 className="text-3xl font-semibold mb-6 text-center">Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-gray-700 p-4 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Evaluador de Arquitectura</h3>
                    <p className="text-gray-300 text-sm">
                        Herramienta propia para analizar código fuente de aplicaciones monolíticas Spring Boot, utilizando JavaParser. Evalúa estructuras como clases, interfaces y records, y ayuda a detectar malas prácticas arquitectónicas.
                    </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Automatización QA en RosenmannLópez</h3>
                    <p className="text-gray-300 text-sm">
                        Desempeño como QA y Scrum Master en el equipo de desarrollo. Coordinación de sprints y aseguramiento de calidad en el proyecto web para la oficina de arquitectura RosenmannLópez.
                    </p>
                </div>
                <div className="bg-gray-700 p-4 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-2">Portafolio Personal</h3>
                    <p className="text-gray-300 text-sm">
                        Esta misma página, desarrollada con React + Vite + TailwindCSS + TypeScript. Diseño minimalista y moderno con despliegue automatizado en GitHub Pages.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;