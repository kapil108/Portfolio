import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <main className="bg-[#0f1113] min-h-screen text-white font-sans">
      <Hero variant="A" />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800 bg-[#0f1113]">
        <div className="container mx-auto px-6">
          <p>© 2026 Kapil Sarathe — IIIT Bhopal</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="https://portfolio-woad-seven-27.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-[#0ea5ff]">Live Portfolio</a>
            <a href="https://drive.google.com/file/d/1hJAe6vFnd1R5QYY4mddsIINbXhG3w9BA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
