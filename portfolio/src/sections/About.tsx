import { useLanguage } from '../hooks/useLanguage';
import { TechBadge } from '../components/TechIcon';

const About = () => {
    const { trad } = useLanguage();

    const languagesStack = [
        { name: 'javascript' as const, label: 'JavaScript' },
        { name: 'typescript' as const, label: 'TypeScript' },
        { name: 'java' as const, label: 'Java' },
        { name: 'python' as const, label: 'Python' },
        { name: 'html5' as const, label: 'HTML5' },
        { name: 'css3' as const, label: 'CSS3' },
        { name: 'react' as const, label: 'React' },
        { name: 'spring' as const, label: 'Spring' },
        { name: 'nestjs' as const, label: 'NestJS' },
    ];

    const devopsStack = [
        { name: 'docker' as const, label: 'Docker' },
        { name: 'kubernetes' as const, label: 'Kubernetes' },
        { name: 'jenkins' as const, label: 'Jenkins' },
        { name: 'nginx' as const, label: 'Nginx' },
        { name: 'git' as const, label: 'Git' },
        { name: 'github' as const, label: 'GitHub' },
        { name: 'postman' as const, label: 'Postman' },
        { name: 'postgresql' as const, label: 'PostgreSQL' },
        { name: 'mysql' as const, label: 'MySQL' },
        { name: 'latex' as const, label: 'LaTeX' },
    ];

    return (
        <section id="about" className="py-24 bg-surface-container-low relative">
            {/* Background glowing gradient */}
            <div className="absolute top-[30%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-4">
                        {trad('about.title')}
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
                        {trad('about.paragraph')}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left Column: Technical Philosophy */}
                    <div className="flex flex-col justify-between h-full space-y-8">
                        <div>
                            <h3 className="font-display text-xl md:text-2xl font-bold text-on-background mb-8 flex items-center gap-3">
                                <span className="w-10 h-0.5 bg-primary"></span>
                                {trad('about.philosophyTitle')}
                            </h3>

                            <div className="space-y-6">
                                {/* Card 1 */}
                                <div className="p-6 bg-surface-container border border-outline-variant/30 rounded-sm hover:border-primary/45 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                                            <span className="material-symbols-outlined icon-filled text-2xl">
                                                architecture
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-display text-base font-bold text-on-background mb-2 group-hover:text-primary transition-colors">
                                                {trad('about.philosophy1Title')}
                                            </h4>
                                            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                                                {trad('about.philosophy1Desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="p-6 bg-surface-container border border-outline-variant/30 rounded-sm hover:border-primary/45 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                                            <span className="material-symbols-outlined icon-filled text-2xl">
                                                engineering
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-display text-base font-bold text-on-background mb-2 group-hover:text-primary transition-colors">
                                                {trad('about.philosophy2Title')}
                                            </h4>
                                            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                                                {trad('about.philosophy2Desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CV Downloader Panel */}
                        <div className="pt-6">
                            <a
                                href={`${import.meta.env.BASE_URL}CV_Andres_Zelaya.pdf`}
                                download
                                className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 font-mono text-xs font-bold tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all clip-chamfer-btn shadow-lg shadow-primary/10"
                            >
                                <span className="material-symbols-outlined text-base">download</span>
                                {trad('about.downloadCv')}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Quotes, Stats & Tech Stack */}
                    <div className="flex flex-col justify-between space-y-8 h-full">
                        {/* Quote Block / Guiding Principle */}
                        <div className="border-l-4 border-primary pl-6 py-3 bg-surface-container/30 rounded-r-md">
                            <p className="font-sans text-sm md:text-base italic text-on-surface-variant leading-relaxed">
                                "{trad('about.quote')}"
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 bg-surface-container-low p-2 rounded-sm">
                            <div className="p-5 bg-surface-container border border-outline-variant/20 rounded-sm">
                                <div className="font-display text-3xl font-extrabold text-primary mb-1">5</div>
                                <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                                    {trad('about.stats.taCourses')}
                                </div>
                            </div>
                            <div className="p-5 bg-surface-container border border-outline-variant/20 rounded-sm">
                                <div className="font-display text-3xl font-extrabold text-primary mb-1">4+</div>
                                <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                                    {trad('about.stats.projects')}
                                </div>
                            </div>
                            <div className="p-5 bg-surface-container border border-outline-variant/20 rounded-sm">
                                <div className="font-display text-3xl font-extrabold text-primary mb-1">7</div>
                                <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                                    {trad('about.stats.certs')}
                                </div>
                            </div>
                            <div className="p-5 bg-surface-container border border-outline-variant/20 rounded-sm">
                                <div className="font-display text-3xl font-extrabold text-primary mb-1">15+</div>
                                <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                                    {trad('about.stats.activeStack')}
                                </div>
                            </div>
                        </div>

                        {/* Tech Stack Grid */}
                        <div className="p-6 bg-surface-container border border-outline-variant/30 rounded-sm">
                            <h4 className="font-display text-sm font-bold text-on-background mb-4 uppercase tracking-wider">
                                {trad('about.techStack')}
                            </h4>
                            <div className="space-y-5">
                                <div>
                                    <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider block mb-3">
                                        Languages, Frameworks & Libraries
                                    </span>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                                        {languagesStack.map((tech) => (
                                            <TechBadge
                                                key={tech.name}
                                                name={tech.name}
                                                label={tech.label}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-3 border-t border-outline-variant/10">
                                    <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider block mb-3">
                                        DevOps, Databases & Tools
                                    </span>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                                        {devopsStack.map((tech) => (
                                            <TechBadge
                                                key={tech.name}
                                                name={tech.name}
                                                label={tech.label}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
