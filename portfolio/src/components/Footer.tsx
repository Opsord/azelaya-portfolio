const Footer = () => {

    return (
        <footer className="w-full border-t border-outline-variant/25 bg-surface-container-lowest py-10">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
                {/* Logo and Brand */}
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-2xl font-bold">
                        terminal
                    </span>
                    <span className="font-mono text-xs font-bold tracking-wider text-on-surface uppercase">
                        ANDRÉS ZELAYA DROGUETT
                    </span>
                </div>
                
                {/* Copyright */}
                <p className="font-mono text-[10px] text-on-surface-variant/70">
                    &copy; {new Date().getFullYear()} Andrés Zelaya Droguett. All rights reserved.
                </p>
                
                {/* Quick Social Links */}
                <div className="flex items-center gap-6">
                    <a 
                        href="https://linkedin.com/in/andrés-z-161685129/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/Opsord" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
