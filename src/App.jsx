import { About } from './components/About/About.jsx';
import { Contact } from './components/Contact/Contact.jsx';
import { Experience } from './components/Experience/Experience.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Skills } from './components/Skills/Skills.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
