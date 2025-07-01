// File: sections/Contact.tsx

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen px-4 py-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">Contacto</h2>
            <p className="text-center text-gray-300">
                Puedes escribirme a <a href="mailto:andres.zelaya@usach.cl" className="text-cyan-400 hover:underline">andres.zelaya@usach.cl</a> o conectarte conmigo en
                <a href="https://github.com/Opsord" className="text-cyan-400 hover:underline mx-1" target="_blank">GitHub</a> y
                <a href="https://linkedin.com/in/andrés-z-161685129/" className="text-cyan-400 hover:underline mx-1" target="_blank">LinkedIn</a>.
            </p>
        </section>
    );
};

export default Contact;