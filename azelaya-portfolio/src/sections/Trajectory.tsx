// File: sections/Trajectory.tsx

const roadmapItems = [
    {
        title: 'Ayudante de cátedra de Fundamentos de Ingeniería en Software',
        organization: 'Universidad de Santiago de Chile',
        period: 'Mar. 2024 - Jul. 2025 ',
        location: 'Estación Central, Región Metropolitana de Santiago, Chile',
        description: 'Asisto en la enseñanza de conceptos fundamentales de ingeniería en software, ayudando a los estudiantes a resolver dudas relacionadas con el proceso de desarrollo de software, incluyendo análisis, diseño, implementación y pruebas. Proveo orientación en nociones básicas de arquitectura de software y buenas prácticas de desarrollo. Además, participo en la revisión y calificación de proyectos estudiantiles, evaluando tanto su calidad técnica como el cumplimiento de requisitos funcionales y no funcionales.',
    },
    {
        title: 'Ayudante de laboratorio de Estructura de Computadores',
        organization: 'Universidad de Santiago de Chile',
        period: 'Mar. 2024 - Jul. 2025 ',
        location: 'Estación Central, Región Metropolitana de Santiago, Chile',
        description: 'Brindé apoyo a estudiantes en la realización de actividades prácticas relacionadas con arquitectura y funcionamiento de computadores. Ayudé en la planificación y preparación de clases de laboratorio, diseñando ejercicios para reforzar conceptos teóricos. Resolví dudas y guié a los estudiantes en la comprensión de temas como ensamblaje, procesamiento de instrucciones, memoria y otros aspectos fundamentales de las estructuras de computadores.',
    },
    {
        title: 'Ayudante de cátedra de Fundamentos de Programación para Ingeniería',
        organization: 'Universidad de Santiago de Chile',
        period: 'Mar. 2024 - Jul. 2025 ',
        location: 'Estación Central, Región Metropolitana de Santiago, Chile',
        description: 'Proporcioné apoyo a estudiantes en el aprendizaje de conceptos básicos de programación, explicando fundamentos como estructuras de control, manejo de datos, funciones y algoritmos. Resolví dudas individuales y grupales, ayudando a los estudiantes a desarrollar sus habilidades prácticas. Además, diseñé y resolví ejercicios que reforzaron los temas tratados en clases, fomentando la comprensión y aplicación de técnicas de programación en contextos de ingeniería.',
    },
    {
        title: 'Ayudante de Investigación en Redes y Ciberseguridad',
        organization: 'Universidad de Santiago de Chile',
        period: 'sept. 2024 - dic. 2024 · 4 meses',
        location: 'Estación Central, Región Metropolitana de Santiago, Chile',
        description: 'Colaboré en proyectos de investigación en ciberseguridad, desarrollando y automatizando scripts en Bash integrados con programas en Python para procesar y analizar datos relacionados con tráfico de red y seguridad informática. Realicé análisis de datos utilizando Pandas, identificando patrones y tendencias relevantes para la detección de amenazas y optimización de sistemas de seguridad. También trabajé en la depuración de datos y la creación de pipelines de procesamiento para mejorar la calidad y eficiencia del análisis.',
    },
    {
        title: 'Responsable de Scrum y SQA',
        organization: 'RosenmannLópez Arquitectos · Practica Profesional',
        period: 'oct. 2024 - ene. 2025 · 4 meses',
        location: 'Gran Santiago, Región Metropolitana de Santiago, Chile',
        description: 'Participé en el proyecto como Ingeniero DevOps, SQA y Scrum Master, automatizando procesos de revisión de calidad con herramientas como SonarCloud y configurando pipelines de integración y despliegue continuo con GitHub Actions y Docker. Como SQA, colaboré en la supervisión de estándares de calidad del código, verificando la correcta organización de clases y promoviendo buenas prácticas en el equipo. Además, como Scrum Master, facilitaba las ceremonias del equipo ágil, promoviendo la colaboración, removiendo impedimentos y asegurando el cumplimiento de los objetivos del sprint.',
    },
];

const Trajectory = () => {
    return (
        <section id="trajectory" className="min-h-screen px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">Trayectoria</h2>
            <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
                {roadmapItems.map((item, idx) => (
                    <div key={idx} className="border-l-4 border-cyan-400 pl-4">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <div className="text-cyan-300 font-semibold">{item.organization}</div>
                        <div className="text-gray-400 text-sm">{item.period} · {item.location}</div>
                        <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trajectory;