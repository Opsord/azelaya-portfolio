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
                {/* Bento Row 1: About Me intro (left) + My Approach (right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    {/* Left: About Me intro card */}
                    <div className="p-8 bg-surface-container border border-outline-variant/30 rounded-sm flex flex-col justify-center">
                        <div className="w-12 h-0.5 bg-primary mb-5"></div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-5">
                            {trad('about.title')}
                        </h2>
                        <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
                            {trad('about.paragraph')}
                        </p>
                    </div>

                    {/* Right: My Approach */}
                    <div className="flex flex-col">
                        <h3 className="font-display text-xl md:text-2xl font-bold text-on-background mb-6 flex items-center gap-3 shrink-0">
                            <span className="w-10 h-0.5 bg-primary"></span>
                            {trad('about.philosophyTitle')}
                        </h3>

                        <div className="flex flex-col gap-4 grow">
                            {(
                                [
                                    { title: 'about.philosophy1Title', desc: 'about.philosophy1Desc', icon: 'schema' },
                                    { title: 'about.philosophy2Title', desc: 'about.philosophy2Desc', icon: 'cloud_done' },
                                    { title: 'about.philosophy3Title', desc: 'about.philosophy3Desc', icon: 'psychology' },
                                ] as const
                            ).map((item) => (
                                <div
                                    key={item.title}
                                    className="p-6 bg-surface-container border border-outline-variant/30 rounded-sm hover:border-primary/45 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-14 h-14 rounded-sm bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300">
                                            <span className="material-symbols-outlined icon-filled text-3xl leading-none">
                                                {item.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-display text-base font-bold text-on-background mb-2 group-hover:text-primary transition-colors">
                                                {trad(item.title)}
                                            </h4>
                                            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                                                {trad(item.desc)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bento Row 2: Tech Stack — full width, extended */}
                <div className="mt-10">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-on-background mb-6 flex items-center gap-3">
                        <span className="w-10 h-0.5 bg-primary"></span>
                        {trad('about.techStack')}
                    </h3>

                    <div className="p-6 bg-surface-container border border-outline-variant/30 rounded-sm space-y-5">
                        <div>
                            <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider block mb-3">
                                Languages, Frameworks & Libraries
                            </span>
                            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2">
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
                            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-2">
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

                {/* CV Download — centered, below bento */}
                <div className="flex justify-center mt-12 pt-8 border-t border-outline-variant/15">
                    <a
                        href={`${import.meta.env.BASE_URL}CV_Andres_Zelaya.pdf`}
                        download
                        className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-4 font-mono text-xs font-bold tracking-wider uppercase hover:brightness-110 active:scale-95 transition-all clip-chamfer-btn shadow-lg shadow-primary/10"
                    >
                        <span className="material-symbols-outlined text-base">download</span>
                        {trad('about.downloadCv')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
