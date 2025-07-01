// File: App.tsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => {
    return (
        <div className="bg-gray-900 text-white font-sans">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
};

export default App;