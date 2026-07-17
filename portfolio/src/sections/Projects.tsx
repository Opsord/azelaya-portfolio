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
        <section id="projects" className="py-24 bg-surface-container-low relative">
            {/* Background glow */}
            <div className="absolute top-[40%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-4">
                        {trad('projects.title')}
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;