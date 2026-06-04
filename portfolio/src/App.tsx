// File: App.tsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Trajectory from './sections/Trajectory';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
    return (
        <LanguageProvider>
            <div className="bg-gray-900 text-white font-sans">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Trajectory />
                    <Projects />
                    <Certifications />
                    <Contact />
                </main>
            </div>
        </LanguageProvider>
    );
};

export default App;