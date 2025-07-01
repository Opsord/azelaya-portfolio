// File: sections/About.tsx

const About = () => {
    return (
        <section id="about" className="min-h-screen px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">Sobre mí</h2>
            <p className="max-w-3xl mx-auto text-gray-300 text-center">
                Soy estudiante de Ingeniería de Ejecución en Informática y Computación
                en la Universidad de Santiago de Chile, con experiencia como ayudante de
                cátedra y laboratorio en diversas asignaturas. Me he desempeñado como Scrum Master
                y QA en proyectos reales, y desarrollé una herramienta de análisis automático de
                arquitectura para monolitos Spring Boot. Manejo tecnologías como Java, React, TypeScript,
                JavaParser, Docker, GitHub Actions, Jenkins y SonarCloud. Me interesa la
                ingeniería de software, la seguridad y la calidad.
            </p>
        </section>
    );
};

export default About;