import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Globe2, Wrench } from 'lucide-react';

const AcademicBackground = () => {
  const theorists = [
    { name: "Shoshana Zuboff", focus: "Surveillance capitalism and behavioral futures markets" },
    { name: "Helen Nissenbaum", focus: "Contextual integrity and privacy as appropriate information flow" },
    { name: "Mark Graham & Mohammed Anwar", focus: "Global digital divides and geographies of connectivity" },
    { name: "Dipesh Chakrabarty", focus: "Provincializing Western narratives, particularly in climate discourse" },
    { name: "Matthias Middell", focus: "Spatial formats and processes of respatialization under global conditions" },
    { name: "Stef Craps", focus: "Climate witnessing and postcolonial approaches to environmental crisis" }
  ];

  const languages = [
    { lang: "Bangla", level: "Native", width: "w-full" },
    { lang: "English", level: "Professional — IELTS 6.5 (R:7.5, L:7.0, W:6.0, S:6.0)", width: "w-4/5" },
    { lang: "Urdu/Hindi", level: "Conversational", width: "w-2/5" },
    { lang: "Arabic", level: "Beginner", width: "w-1/5" }
  ];

  const researchMethods = [
    "Mixed-methods design", "Quantitative survey analysis (SPSS)", "Qualitative interviews",
    "Usability testing", "Community-engaged field research", "Ethical research practices"
  ];

  const techCapabilities = [
    "React.js", "Next.js", "Node.js", "JavaScript ES6+", "Leaflet.js (geospatial)",
    "Chart.js (data visualization)", "MongoDB", "Firebase", "Git/GitHub",
    "Responsive design", "Multilingual interface architecture"
  ];

  return (
    <section id="academic" className="py-32 px-8 bg-charcoal dark:bg-gray-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            Background
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Academic Foundation
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Bridging critical media scholarship with technical practice to examine how global power operates through technological infrastructure.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="text-accent" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Master of Social Science</h3>
                <p className="text-gray-400 text-sm">Mass Communication & Journalism</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-300 text-sm">
              <p><span className="text-white font-semibold">Institution:</span> Khulna University, Bangladesh (2023)</p>
              <p><span className="text-white font-semibold">CGPA:</span> 3.11/4.00</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-semibold mb-2">Thesis:</p>
                <p className="italic text-gray-400 leading-relaxed">
                  "Analyzing Facebook-Related Privacy Violations Among University Students"
                </p>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Research combining quantitative survey methods (n=141) with qualitative interviews examining gaps between privacy intention and outcome among Bangladeshi users navigating interfaces designed for Western contexts.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-secondary/50 transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="text-secondary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bachelor of Social Science</h3>
                <p className="text-gray-400 text-sm">Mass Communication & Journalism</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-300 text-sm">
              <p><span className="text-white font-semibold">Institution:</span> Khulna University, Bangladesh (2018-2022)</p>
              <p><span className="text-white font-semibold">CGPA:</span> 3.25/4.00</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-semibold mb-2">Key Finding from Thesis:</p>
                <p className="text-gray-400 leading-relaxed">
                  89.4% of students activated Facebook privacy settings, yet 40.4% maintained public profiles—demonstrating that interface complexity, not user negligence, produces structural privacy failures.
                </p>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  Documented psychological consequences: 62% reported lasting trust issues; 46% experienced depression following violations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Theoretical Influences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-accent" size={24} />
            <h3 className="text-xl font-bold text-white uppercase tracking-wider text-sm">Theoretical Influences</h3>
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            My work draws on critical scholarship examining how global power operates through technological infrastructure.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {theorists.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span className="text-accent mt-0.5">•</span>
                <div>
                  <span className="text-white font-bold text-sm">{t.name}</span>
                  <span className="text-gray-500 text-sm"> — {t.focus}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Capabilities */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <Globe2 className="text-secondary" size={24} />
              <h3 className="text-white font-bold uppercase tracking-wider text-sm">Languages</h3>
            </div>
            <div className="space-y-5">
              {languages.map((l, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold text-sm">{l.lang}</span>
                    <span className="text-gray-500 text-xs">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.15 }}
                      className={`h-full ${l.width} bg-gradient-to-r from-accent to-secondary rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research Methods & Tech */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-accent" size={24} />
              <h3 className="text-white font-bold uppercase tracking-wider text-sm">Research Methods</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {researchMethods.map((method, i) => (
                <span key={i} className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                  {method}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-secondary" size={24} />
              <h3 className="text-white font-bold uppercase tracking-wider text-sm">Technical Capabilities</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {techCapabilities.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full border border-secondary/20">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Graduate Study Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-10 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl border border-white/10 text-center"
        >
          <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
            I am preparing for graduate study in global studies with emphasis on critical platform analysis, decolonial design methodologies, and community-engaged research examining how technologies designed in one context produce different realities when deployed elsewhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicBackground;
