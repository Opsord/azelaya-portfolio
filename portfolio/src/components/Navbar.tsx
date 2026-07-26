import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, trad } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#hero", label: trad('nav.hero') },
        { href: "#about", label: trad('nav.about') },
        { href: "#trajectory", label: trad('nav.trajectory') },
        { href: "#projects", label: trad('nav.projects') },
        { href: "#certifications", label: trad('nav.certifications') },
        { href: "#contact", label: trad('nav.contact') },
    ];

    return (
        <nav 
            className={`w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ease-in-out ${
                scrolled ? 'h-16 shadow-lg shadow-surface-container-lowest/40' : 'h-20'
            }`}
        >
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
                {/* Brand Logo */}
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl font-semibold">
                        terminal
                    </span>
                    <span className="font-display text-lg md:text-xl font-bold tracking-wider text-primary select-none uppercase">
                        ANDRÉS ZELAYA DROGUETT
                    </span>
                </div>

                {/* Desktop Links & Actions */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-sans text-sm text-on-surface-variant hover:text-primary transition-colors duration-250 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    
                    {/* Language Toggle Button */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold border border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-white rounded-md active:scale-95 transition-all duration-200 cursor-pointer"
                        title={language === 'en' ? 'Traducir al Español' : 'Translate to English'}
                    >
                        <span className="material-symbols-outlined text-sm">language</span>
                        <span>{language.toUpperCase()}</span>
                    </button>

                    {/* Download CV button */}
                    <a
                        href={`${import.meta.env.BASE_URL}CV_Andres_Zelaya.pdf`}
                        download
                        className="bg-primary text-white px-5 py-1.5 font-mono text-xs font-semibold hover:brightness-110 active:scale-95 transition-all clip-chamfer-btn shadow-md shadow-primary/20"
                    >
                        {trad('about.downloadCv')}
                    </a>
                </div>

                {/* Mobile Menu Button & Language Switcher */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                        className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold border border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-white rounded-md transition-all cursor-pointer"
                    >
                        <span>{language.toUpperCase()}</span>
                    </button>

                    <button 
                        className="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-surface-container border-b border-outline-variant/30 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                }`}
            >
                <div className="px-margin-mobile py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-sans text-base text-on-surface-variant hover:text-primary transition-colors block py-2 border-b border-outline-variant/10"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`${import.meta.env.BASE_URL}CV_Andres_Zelaya.pdf`}
                        download
                        onClick={() => setIsOpen(false)}
                        className="bg-primary text-white text-center py-3 font-mono text-sm font-semibold hover:brightness-110 transition-all clip-chamfer-btn mt-2"
                    >
                        {trad('about.downloadCv')}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;