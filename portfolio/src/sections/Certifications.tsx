import certificationsData from '../data/certifications.json';
import { useLanguage } from '../context/LanguageContext';

interface Certification {
    title: string;
    issuer: string;
    date: string;
    pdfFile: string;
    skills: string[];
}

const certifications = certificationsData as Certification[];

const Certifications = () => {
    const { trad } = useLanguage();

    return (
        <section id="certifications" className="py-24 bg-surface relative overflow-hidden">
            {/* Background glowing gradient */}
            <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop z-10 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background mb-4">
                        {trad('certifications.title')}
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                        {trad('certifications.subtitle')}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.pdfFile}
                            className="group flex flex-col justify-between bg-surface-container border border-outline-variant/30 p-6 rounded-sm shadow-md hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div>
                                {/* Issuer & Date Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                                        {cert.issuer === "Organización" ? "USACH / OTHER" : cert.issuer}
                                    </span>
                                    {cert.date && (
                                        <span className="font-mono text-[10px] text-on-surface-variant/70">
                                            {cert.date}
                                        </span>
                                    )}
                                </div>

                                {/* Certification Title */}
                                <h3 className="font-display text-base font-bold text-on-background group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug">
                                    {cert.title}
                                </h3>

                                {/* Skills Tags */}
                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="font-mono text-[10px] px-2 py-0.5 bg-surface-container-high border border-outline-variant/10 text-on-surface rounded-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* View Certificate Action */}
                            <div className="mt-6 pt-4 border-t border-outline-variant/20">
                                <a
                                    href={`${import.meta.env.BASE_URL}certs/${cert.pdfFile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 font-mono text-xs font-bold py-2.5 bg-primary/5 border border-primary/25 hover:bg-primary hover:border-transparent hover:text-white text-primary transition-all duration-200 clip-chamfer-btn shadow-sm"
                                >
                                    <span>{trad('certifications.viewCert')}</span>
                                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
