// File: App.tsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Trajectory from './sections/Trajectory';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './hooks/useLanguage';
import { ThemeProvider } from './context/ThemeContext';

const SkipLink = () => {
    const { trad } = useLanguage();
    return (
        <a href="#hero" className="skip-link">
            {trad('nav.skipToContent')}
        </a>
    );
};

const App = () => {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <SkipLink />
                <div className="bg-background text-on-background font-sans min-h-screen flex flex-col justify-between overflow-x-hidden">
                    <Navbar />
                    <main className="grow" id="main-content">
                        <Hero />
                        <About />
                        <Trajectory />
                        <Projects />
                        <Certifications />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;