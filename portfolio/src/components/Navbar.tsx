import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, trad } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const activeSection = useActiveSection();

    useEffect(() => {
        let ticking = false;

        const updateScroll = () => {
            setScrolled(window.scrollY > 20);
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on Escape for a11y
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const navLinks = [
        { href: "#hero", label: trad('nav.hero') },
        { href: "#about", label: trad('nav.about') },
        { href: "#trajectory", label: trad('nav.trajectory') },
        { href: "#projects", label: trad('nav.projects') },
        { href: "#certifications", label: trad('nav.certifications') },
        { href: "#contact", label: trad('nav.contact') },
    ];

    const linkClasses = (href: string) => {
        const isActive = activeSection === href.replace('#', '');
        return `font-sans text-sm font-medium transition-colors duration-250 ${
            isActive
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary'
        }`;
    };

    const mobileLinkClasses = (href: string) => {
        const isActive = activeSection === href.replace('#', '');
        return `font-sans text-base transition-colors block py-2 border-b border-outline-variant/10 ${
            isActive
                ? 'text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary'
        }`;
    };

    return (
        <nav
            className={`w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ease-in-out ${
                scrolled ? 'h-16 shadow-lg shadow-surface-container-lowest/40' : 'h-20'
            }`}
            aria-label="Main navigation"
        >
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
                {/* Brand Logo */}
                <a href="#hero" className="flex items-center gap-3" aria-label="Andrés Zelaya - Home">
                    <span className="material-symbols-outlined text-primary text-3xl font-semibold" aria-hidden="true">
                        terminal
                    </span>
                    <span className="font-display text-lg md:text-xl font-bold tracking-wider text-primary select-none uppercase">
                        ANDRÉS ZELAYA DROGUETT
                    </span>
                </a>

                {/* Desktop Links & Actions */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={linkClasses(link.href)}
                            aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center w-8 h-8 text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-on-primary rounded-md active:scale-95 transition-all duration-200 cursor-pointer"
                        title={trad('nav.toggleTheme')}
                        aria-label={trad('nav.toggleTheme')}
                    >
                        <span className="material-symbols-outlined text-base" aria-hidden="true">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    {/* Language Toggle Button */}
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                        className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-semibold border border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-on-primary rounded-md active:scale-95 transition-all duration-200 cursor-pointer"
                        title={language === 'en' ? 'Traducir al Español' : 'Translate to English'}
                        aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                    >
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">language</span>
                        <span>{language.toUpperCase()}</span>
                    </button>

                    {/* Download CV button */}
                    <a
                        href={`${import.meta.env.BASE_URL}CV_Andres_Zelaya.pdf`}
                        download
                        className="bg-primary text-on-primary px-5 py-1.5 font-mono text-xs font-semibold hover:brightness-110 active:scale-95 transition-all clip-chamfer-btn shadow-md shadow-primary/20"
                    >
                        {trad('about.downloadCv')}
                    </a>
                </div>

                {/* Mobile Menu Button & Language Switcher */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center w-8 h-8 text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-on-primary rounded-md transition-all cursor-pointer"
                        title={trad('nav.toggleTheme')}
                        aria-label={trad('nav.toggleTheme')}
                    >
                        <span className="material-symbols-outlined text-base" aria-hidden="true">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    <button
                        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                        className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono font-semibold border border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-on-primary rounded-md transition-all cursor-pointer"
                        aria-label={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                    >
                        <span>{language.toUpperCase()}</span>
                    </button>

                    <button
                        className="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                            {isOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden absolute top-full left-0 w-full bg-surface-container border-b border-outline-variant/30 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
                }`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <div className="px-margin-mobile py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClasses(link.href)}
                            aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`${import.meta.env.BASE_URL}CV_Andres_Zelaya.pdf`}
                        download
                        onClick={() => setIsOpen(false)}
                        className="bg-primary text-on-primary text-center py-3 font-mono text-sm font-semibold hover:brightness-110 transition-all clip-chamfer-btn mt-2"
                    >
                        {trad('about.downloadCv')}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
