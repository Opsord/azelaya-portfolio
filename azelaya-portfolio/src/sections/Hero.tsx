// File: sections/Hero.tsx

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex items-center justify-center text-center px-4">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hola, soy Andrés Zelaya
                </h1>
                <p className="text-lg md:text-xl text-gray-400">
                    Ingeniero de Ejecución en Informática | Desarrollador Fullstack
                </p>

            </div>
        </section>
    );
};

export default Hero;