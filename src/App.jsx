import Navbar from './components/Layout/Navbar';
import CustomCursor from './components/UI/CustomCursor';
import Hero from './components/Sections/Hero';
import FeaturedWork from './components/Sections/FeaturedWork';
import CommunicationApproach from './components/Sections/CommunicationApproach';
import Design from './components/Sections/Design';
import Work from './components/Sections/Work';
import Journey from './components/Sections/Journey';
import Philosophy from './components/Sections/Philosophy';
import TechStack from './components/Sections/TechStack';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <CommunicationApproach />
        <Design />
        <Work />
        <Journey />
        <Philosophy />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
