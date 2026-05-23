import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-noise"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        {/* <Resume /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
