// File: components/ProjectCard.tsx
import { useLanguage } from '../context/LanguageContext';

type ProjectCardProps = {
    title: string;
    repository?: string;
    description: string;
    languages: string[];
    tools: string[];
    role: string;
    tasks: string[];
    complexity: 'high' | 'medium' | 'low';
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
                     }: ProjectCardProps) => {
    const { trad } = useLanguage();

    return (
        <div className="bg-gray-700 p-4 rounded-xl shadow mb-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {repository ? (
                <a
                    href={repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline mb-2 inline-block cursor-pointer"
                >
                    {trad('projects.repo.view')}
                </a>
            ) : (
                <span className="text-gray-500 mb-2 inline-block">
                    {trad('projects.repo.unavailable')}
                </span>
            )}
            <p className="text-gray-300 text-sm mb-2">{description}</p>
            <div className="text-sm text-gray-400 mb-1"><b>{trad('projects.languages')}:</b> {languages.join(', ')}</div>
            <div className="text-sm text-gray-400 mb-1"><b>{trad('projects.tools')}:</b> {tools.join(', ')}</div>
            <div className="text-sm text-gray-400 mb-1"><b>{trad('projects.role')}:</b> {role}</div>
            <div className="text-sm text-gray-400 mb-1"><b>{trad('projects.tasks')}:</b>
                <ul className="list-disc list-inside ml-4">
                    {tasks.map((t) => <li key={t}>{t}</li>)}
                </ul>
            </div>
            <div className="text-sm text-cyan-300">
                <b>{trad('projects.complexity.label')}:</b> {trad(`projects.complexity.${complexity}`)}
            </div>
        </div>
    );
};

export default ProjectCard;