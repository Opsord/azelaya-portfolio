import { useLanguage } from '../hooks/useLanguage';

type ProjectCardProps = {
    title: string;
    repository?: string;
    description: string;
    languages: string[];
    tools: string[];
    role: string;
    tasks: string[];
};

const ProjectCard = ({
                         title,
                         repository,
                         description,
                         languages,
                         tools,
                         role,
                         tasks,
                     }: ProjectCardProps) => {
    const { trad } = useLanguage();

    return (
        <div className="bg-surface-container border border-outline-variant/30 hover:border-primary/45 transition-all duration-300 p-6 flex flex-col justify-between h-full relative group hover:shadow-lg hover:shadow-primary/5 clip-chamfer-tr">
            {/* Project Header */}
            <div>
                <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-display text-lg font-bold text-on-background group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                </div>

                {/* Repository Link */}
                <div className="mb-4">
                    {repository ? (
                        <a
                            href={repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline hover:brightness-110"
                        >
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            {trad('projects.repo.view')}
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-on-surface-variant/50 select-none">
                            <span className="material-symbols-outlined text-sm">link_off</span>
                            {trad('projects.repo.unavailable')}
                        </span>
                    )}
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                    {description}
                </p>

                {/* Tech Chips */}
                <div className="mb-6 space-y-3">
                    {/* Languages */}
                    <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider mr-1.5">
                            {trad('projects.languages')}:
                        </span>
                        {languages.map((lang) => (
                            <span key={lang} className="font-mono text-[10px] font-medium px-2 py-0.5 bg-surface-container-high border border-outline-variant/20 text-on-surface rounded-sm">
                                {lang}
                            </span>
                        ))}
                    </div>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider mr-1.5">
                            {trad('projects.tools')}:
                        </span>
                        {tools.map((tool) => (
                            <span key={tool} className="font-mono text-[10px] font-medium px-2 py-0.5 bg-surface-container-high border border-outline-variant/20 text-primary rounded-sm">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer metadata: Role & Tasks */}
            <div className="pt-4 border-t border-outline-variant/20 mt-auto">
                <div className="font-mono text-[11px] text-on-surface font-semibold mb-2">
                    <span className="text-on-surface-variant font-medium">{trad('projects.role')}: </span>
                    {role}
                </div>
                
                {/* Tasks List */}
                <div className="space-y-1.5">
                    {tasks.map((task) => (
                        <div key={task} className="flex items-center gap-2 text-xs text-on-surface-variant leading-normal">
                            <span className="material-symbols-outlined icon-filled text-primary text-sm shrink-0 select-none">
                                arrow_right
                            </span>
                            <span>{task}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;