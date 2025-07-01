// File: sections/About.tsx

const About = () => {
    return (
        <section id="about" className="min-h-screen px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">Sobre mí</h2>
            <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto gap-8">
                {/* Info and Stack */}
                <div className="flex-1">
                    <p className="text-gray-300 text-center md:text-left mb-4">
                        Soy estudiante de Ingeniería de Ejecución en Informática y Computación
                        en la Universidad de Santiago de Chile, con experiencia como ayudante de
                        cátedra y laboratorio en diversas asignaturas. Me he desempeñado como Scrum Master
                        y QA en proyectos reales, y desarrollé una herramienta de análisis automático de
                        arquitectura para monolitos Spring Boot. He ocupado tecnologías como Java, React, TypeScript,
                        JavaParser, Docker, GitHub Actions, Jenkins y SonarCloud. Me interesa la
                        ingeniería de software, la seguridad y la calidad.
                    </p>
                    {/* Tech Stack and CV */}
                    <div className="flex flex-col items-center">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-cyan-300 text-center">Stack Tecnológico</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                <img src="https://skillicons.dev/icons?i=js,ts,java,python,html,css,react,spring,nestjs" alt="Languages, Frameworks & Libraries" />
                                <img src="https://skillicons.dev/icons?i=docker,kubernetes,jenkins,nginx,git,github,postman,postgres,mysql,latex" alt="DevOps, Databases & Others" />
                            </div>
                        </div>
                        <a
                            href="/CV-AndresZelaya.pdf"
                            download
                            className="inline-block mt-2 px-5 py-2 bg-cyan-400 text-gray-900 font-semibold rounded hover:bg-cyan-300 transition"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;