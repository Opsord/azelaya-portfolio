// File: App.tsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Trajectory from './sections/Trajectory';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

const App = () => {
    return (
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
    );
};

export default App;