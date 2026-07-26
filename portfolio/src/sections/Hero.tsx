import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { trad } = useLanguage();

    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center pt-24 md:pt-16 pb-12 overflow-hidden bg-background">
            {/* Background glowing gradients */}
            <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row gap-12 md:gap-16 items-center w-full z-10">
                {/* Left Text Column */}
                <div className="flex-1 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-primary border border-primary/25 mb-6">
                        <span className="material-symbols-outlined icon-filled text-[18px]">
                            verified
                        </span>
                        <span className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                            {trad('hero.badge')}
                        </span>
                    </div>

                    {/* Greeting & Main Heading */}
                    <h2 className="font-mono text-sm font-semibold tracking-wide text-primary mb-3">
                        {trad('hero.greeting')}
                    </h2>
                    <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-on-background mb-6 leading-[1.1] tracking-tight">
                        {trad('hero.heading').split(' ').map((word: string, i: number, arr: string[]) => {
                            // Highlight the last two words or specifically "Architectural Precision" / "precisión arquitectónica"
                            const isHighlight = i >= arr.length - 2;
                            return (
                                <span key={word} className={isHighlight ? "text-primary" : ""}>
                                    {word}{" "}
                                </span>
                            );
                        })}
                    </h1>

                    {/* Description */}
                    <p className="font-sans text-base md:text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                        {trad('hero.description')}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="#contact"
                            className="bg-primary text-white px-8 py-3.5 hover:brightness-110 active:scale-95 transition-all font-mono text-xs font-bold tracking-wider uppercase clip-chamfer-btn shadow-lg shadow-primary/20"
                        >
                            <span className="flex items-center gap-2">
                                {trad('hero.contactBtn')}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </a>
                        <a
                            href="#projects"
                            className="border border-primary text-primary px-8 py-3.5 hover:bg-primary/5 active:scale-95 transition-all font-mono text-xs font-bold tracking-wider uppercase clip-chamfer-btn"
                        >
                            {trad('hero.portfolioBtn')}
                        </a>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="flex-1 order-1 md:order-2 relative w-full max-w-[340px] md:max-w-none flex justify-center">
                    <div className="relative w-full aspect-square max-w-[350px]">
                        {/* Decorative Origami Accents */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/30 pointer-events-none" />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/30 pointer-events-none" />

                        {/* Image Wrapper */}
                        <div className="w-full h-full bg-surface-container rounded-sm overflow-hidden border border-outline-variant/30 glow-pulse hover:shadow-primary/35 transition-all duration-300">
                            <img
                                src={`${import.meta.env.BASE_URL}profile.jpg`}
                                onError={(e) => {
                                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400";
                                }}
                                alt="Andrés Zelaya Droguett"
                                className="w-full h-full object-cover grayscale-20% hover:grayscale-0 transition-all duration-700 hover:scale-102"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;