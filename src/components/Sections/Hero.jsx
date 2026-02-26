import { motion } from 'framer-motion';
import profileImg from '../../assets/profilePicture.jpg';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-8 pt-32 pb-20 bg-white dark:bg-gray-950 overflow-hidden relative transition-colors duration-300">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full animate-blob animation-delay-4000 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 flex items-center space-x-4"
            >
              <div className="w-12 h-0.5 bg-accent"></div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-accent font-black">
                Digital Public Infrastructure Researcher | Climate Tech for Vulnerable Communities
              </p>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-charcoal dark:text-white font-bold transition-colors"
            >
              Mehedi Hassan <br/>
              <span className="gradient-text">Shawon</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-12 leading-relaxed"
            >
              Building accessible digital systems for climate-vulnerable communities in Bangladesh's coastal regions. Bridging <span className="text-charcoal dark:text-white font-semibold">technical development with community-engaged research</span> to create infrastructure that works within real-world constraints — <span className="text-accent font-bold">limited bandwidth, mobile-first access, and multilingual requirements</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a href="#featured" 
                className="px-8 py-4 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-2xl font-bold hover:bg-accent dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-accent/40 text-center text-sm tracking-widest">
                VIEW FEATURED WORK
              </a>
              <a  target="_blank" href="https://docs.google.com/document/d/1Xct2rn1e_d7IKZA-6XgXoUqIiT50HygyQN_dx6k6b68/edit?usp=sharing" 
                className="px-8 py-4 border-2 border-charcoal/5 dark:border-white/10 text-charcoal dark:text-white rounded-2xl font-bold hover:border-secondary hover:text-secondary dark:hover:text-secondary transition-all text-center text-sm tracking-widest">
                VIEW POLICY PAPER
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="relative w-64 h-80 md:w-80 md:h-[420px] rounded-[3rem] overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl shadow-charcoal/20">
                <img 
                  src={profileImg} 
                  alt="Mehedi Hassan Shawon" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 dark:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-2xl text-accent">
                     🔬
                  </div>
                  <div>
                    <p className="font-bold text-charcoal dark:text-white text-xs">RESEARCH FOCUS</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Climate Tech & Digital Public Infrastructure</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative colored blobs behind image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
