import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Journey from './components/Sections/Journey';
import Work from './components/Sections/Work';
import Design from './components/Sections/Design';
import Philosophy from './components/Sections/Philosophy';
import TechStack from './components/Sections/TechStack';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Work />
        <Design />
        <Philosophy />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
