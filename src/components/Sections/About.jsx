import { motion } from 'framer-motion';
import { MapPin, Briefcase, Search } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            About
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            I investigate how digital infrastructure can serve climate-vulnerable communities
            in Bangladesh's coastal regions. My work bridges technical development with
            community-engaged research, focusing on building systems that work within
            infrastructural constraints — limited bandwidth, mobile-first access, and
            multilingual requirements.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            Through projects like the Sundarbans Climate Displacement Platform, I document
            how Global North-designed technologies fail when deployed in contexts they were
            never built to serve. My approach combines frontend development (React, Next.js)
            with field research in Bangla, centering voices of affected communities rather
            than extracting data for external consumption.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
            Currently preparing for graduate study examining{' '}
            <span className="text-charcoal dark:text-white font-semibold">digital public infrastructure</span>,{' '}
            <span className="text-charcoal dark:text-white font-semibold">platform governance</span>, and{' '}
            <span className="text-charcoal dark:text-white font-semibold">decolonial design methodologies</span> —
            investigating how technology can serve those most impacted by climate change.
          </p>
        </motion.div>

        {/* Bio Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-12 p-6 bg-slate-100 dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Based in</p>
                <p className="text-sm font-semibold text-charcoal dark:text-white">Khulna, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Briefcase size={18} className="text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Experience</p>
                <p className="text-sm font-semibold text-charcoal dark:text-white">Frontend Dev (UK tech sector), IELTS Instruction</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-violet-500/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Search size={18} className="text-violet-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Research Focus</p>
                <p className="text-sm font-semibold text-charcoal dark:text-white">Climate tech, Digital sovereignty, Multilingual systems</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
