// File: components/Navbar.tsx

const Navbar = () => {
    return (
        <nav className="w-full px-4 py-4 fixed top-0 bg-gray-900 shadow z-50">
            <ul className="flex gap-6 justify-center">
                <li><a href="#hero" className="hover:text-cyan-400">Inicio</a></li>
                <li><a href="#about" className="hover:text-cyan-400">Sobre mí</a></li>
                <li><a href="#trajectory" className="hover:text-cyan-400">Trayectoria</a></li>
                <li><a href="#projects" className="hover:text-cyan-400">Proyectos</a></li>
                <li><a href="#contact" className="hover:text-cyan-400">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;