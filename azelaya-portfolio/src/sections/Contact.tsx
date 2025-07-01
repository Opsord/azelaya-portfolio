// File: sections/Contact.tsx

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen px-4 py-20 flex flex-col items-center justify-center bg-gray-900">
            <h2 className="text-3xl font-semibold mb-6 text-center w-full">Contacto</h2>
            <p className="text-center text-gray-300 mb-8 max-w-xl">
                ¿Quieres ponerte en contacto conmigo? Puedes escribirme por correo, conectarte en redes profesionales o ver mis proyectos.
            </p>
            <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col items-center w-full">
                    <div className="flex gap-8 justify-center w-full">
                        {/* Redes */}
                        <a
                            href="mailto:andres.zelaya@usach.cl"
                            className="flex flex-col items-center group"
                            title="Correo"
                        >
                            <img src="https://skillicons.dev/icons?i=gmail" alt="Email" className="h-10 transition group-hover:scale-110" />
                            <span className="text-gray-300 text-sm mt-1">Email</span>
                        </a>
                        <a
                            href="https://github.com/Opsord"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                            title="GitHub"
                        >
                            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="h-10 transition group-hover:scale-110" />
                            <span className="text-gray-300 text-sm mt-1">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/andrés-z-161685129/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                            title="LinkedIn"
                        >
                            <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="h-10 transition group-hover:scale-110" />
                            <span className="text-gray-300 text-sm mt-1">LinkedIn</span>
                        </a>
                    </div>
                    <div className="min-h-1 px-4 flex flex-col items-center justify-center">
                        <img src="https://skillicons.dev/icons?i=map" alt="Ubicación" className="h-7" />
                        <span className="text-gray-400 text-sm">Santiago, Chile</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;