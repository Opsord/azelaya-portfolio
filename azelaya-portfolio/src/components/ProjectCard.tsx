// File: components/ProjectCard.tsx

type ProjectCardProps = {
    title: string;
    repository?: string;
    description: string;
    languages: string[];
    tools: string[];
    role: string;
    tasks: string[];
    complexity: 'Baja' | 'Media' | 'Alta';
};

const ProjectCard = ({
                         title,
                         repository,
                         description,
                         languages,
                         tools,
                         role,
                         tasks,
                         complexity,
                     }: ProjectCardProps) => (
    <div className="bg-gray-700 p-4 rounded-xl shadow mb-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline mb-2 inline-block"
        >
            {repository ? 'Ver repositorio' : 'Repositorio no disponible'}
        </a>
        <p className="text-gray-300 text-sm mb-2">{description}</p>
        <div className="text-sm text-gray-400 mb-1"><b>Lenguajes:</b> {languages.join(', ')}</div>
        <div className="text-sm text-gray-400 mb-1"><b>Herramientas:</b> {tools.join(', ')}</div>
        <div className="text-sm text-gray-400 mb-1"><b>Rol:</b> {role}</div>
        <div className="text-sm text-gray-400 mb-1"><b>Tareas:</b>
            <ul className="list-disc list-inside ml-4">
                {tasks.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
        </div>
        <div className="text-sm text-cyan-300"><b>Complejidad:</b> {complexity}</div>
    </div>
);

export default ProjectCard;