// File: sections/Certifications.tsx
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
        <section id="certifications" className="min-h-screen px-4 py-20 bg-gray-900/50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-300">
                    {trad('certifications.title')}
                </h2>
                <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
                    {trad('certifications.subtitle')}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.pdfFile}
                            className="group flex flex-col justify-between bg-gray-800/40 backdrop-blur border border-gray-700/60 p-6 rounded-2xl shadow-xl hover:border-cyan-400/50 hover:shadow-cyan-950/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-900/30 text-cyan-300 border border-cyan-800/50">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 line-clamp-2">
                                    {cert.title}
                                </h3>

                                <div className="flex flex-wrap gap-1.5 mt-4">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[11px] px-2 py-0.5 bg-gray-700/50 text-gray-300 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-700/30">
                                <a
                                    href={`${import.meta.env.BASE_URL}certs/${cert.pdfFile}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold px-4 py-2 bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 text-cyan-400 rounded-xl border border-cyan-500/20 hover:border-transparent transition-all duration-200 shadow-sm"
                                >
                                    <span>{trad('certifications.viewCert')}</span>
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
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
