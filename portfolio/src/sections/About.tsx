import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { trad } = useLanguage();

    return (
        <section id="about" className="min-h-screen px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">{trad('about.title')}</h2>
            <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto gap-8">
                {/* Info and Stack */}
                <div className="flex-1">
                    <p className="text-gray-300 text-center md:text-left mb-4">
                        {trad('about.paragraph')}
                    </p>
                    {/* Tech Stack and CV */}
                    <div className="flex flex-col items-center">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2 text-cyan-300 text-center">{trad('about.techStack')}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                <img src="https://skillicons.dev/icons?i=js,ts,java,python,html,css,react,spring,nestjs" alt="Languages, Frameworks & Libraries" />
                                <img src="https://skillicons.dev/icons?i=docker,kubernetes,jenkins,nginx,git,github,postman,postgres,mysql,latex" alt="DevOps, Databases & Others" />
                            </div>
                        </div>
                        <a
                            href={`${import.meta.env.BASE_URL}CV-AndresZelaya.pdf`}
                            download
                            className="inline-block mt-2 px-5 py-2 bg-cyan-400 text-gray-900 font-semibold rounded hover:bg-cyan-300 transition"
                        >
                            {trad('about.downloadCv')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;