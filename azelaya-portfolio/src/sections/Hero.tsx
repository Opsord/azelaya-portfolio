// File: sections/Hero.tsx

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex items-center justify-center text-center px-4">
            <div>
                <img
                    src="/profile.jpg"
                    alt="Andrés Zelaya"
                    className="w-40 h-40 object-cover rounded-full border-4 border-cyan-400 shadow mx-auto mb-6"
                />
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hola, soy Andrés Zelaya
                </h1>
                <p className="text-lg md:text-xl text-gray-400">
                    Egresado de Ingeniería de Ejecución en Informática | Desarrollador Fullstack
                </p>
            </div>
        </section>
    );
};

export default Hero;