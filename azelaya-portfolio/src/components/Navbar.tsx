import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full px-6 py-4 fixed top-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <span className="text-2xl font-extrabold text-cyan-400">Andrés Zelaya</span>
                <button
                    className="md:hidden text-cyan-400 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
                <ul
                    className={`flex-col md:flex-row md:flex gap-2 md:gap-8 justify-center absolute md:static left-0 w-full md:w-auto transition-all duration-300 ease-in
    ${
                        isOpen
                            ? 'flex top-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-b-xl border-t border-gray-700 shadow-lg'
                            : 'hidden md:flex top-[-400px]'
                    }`}
                >
                    {[
                        { href: "#hero", label: "Inicio" },
                        { href: "#about", label: "Sobre mí" },
                        { href: "#trajectory", label: "Trayectoria" },
                        { href: "#projects", label: "Proyectos" },
                        { href: "#contact", label: "Contacto" },
                    ].map(({ href, label }) => (
                        <li key={href} className="mx-2">
                            <a
                                href={href}
                                className="hover:text-cyan-400 hover:bg-cyan-900/40 active:scale-95 text-white block py-2 px-4 md:py-0 md:px-2 rounded-lg transition-all duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;