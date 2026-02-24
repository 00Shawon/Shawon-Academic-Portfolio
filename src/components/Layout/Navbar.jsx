import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'RESEARCH', href: '#research' },
  { name: 'IMPACT', href: '#development-impact' },
  { name: 'FEATURED', href: '#featured' },
  { name: 'VISUAL WORK', href: '#design' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'JOURNEY', href: '#journey' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleActiveSection = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveSection);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800' 
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tighter text-charcoal dark:text-white transition-colors">
            MSH<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-all duration-300 relative group ${
                    activeSection === link.href.substring(1)
                      ? 'text-accent'
                      : 'text-gray-500 dark:text-gray-400 hover:text-charcoal dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <a
                href="#contact"
                className="px-5 py-2 text-[13px] font-bold text-white bg-charcoal dark:bg-white dark:text-charcoal rounded-full hover:bg-accent dark:hover:bg-gray-200 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                CONTACT
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-gray-950 pt-24 px-8 md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-charcoal dark:text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-accent"
                >
                  CONTACT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
