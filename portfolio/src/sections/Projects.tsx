import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';

interface Project {
    title: string;
    repository?: string;
    description: string;
    languages: string[];
    tools: string[];
    role: string;
    tasks: string[];
    complexity: 'high' | 'medium' | 'low';
}

const Projects = () => {
    const { trad } = useLanguage();
    
    const projects = trad('projects.items') as Project[];

    return (
        <section id="projects" className="min-h-screen px-4 py-20 bg-gray-800">
            <h2 className="text-3xl font-semibold mb-6 text-center">{trad('projects.title')}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;