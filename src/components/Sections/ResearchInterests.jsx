import { motion } from 'framer-motion';
import { Globe, Shield, Languages } from 'lucide-react';

const ResearchInterests = () => {
  const areas = [
    {
      icon: <Globe size={32} />,
      title: "Digital Public Infrastructure for Climate Adaptation",
      description: "How can we build information systems that serve climate-vulnerable communities within infrastructural constraints (low bandwidth, mobile-first, multilingual)? Examining scalable approaches to early warning systems, displacement coordination, and resource allocation that work in contexts of limited digital infrastructure.",
      detail: "Focusing on Bangladesh's coastal regions where 15 million residents face catastrophic climate displacement yet lack accessible digital information systems.",
      color: "accent"
    },
    {
      icon: <Shield size={32} />,
      title: "Platform Governance & Digital Sovereignty",
      description: "Investigating how Western-designed technologies encode assumptions about users, markets, and power that systematically exclude Global South populations. Analyzing payment systems, data structures, and interface architectures that create designed inequality across global contexts.",
      detail: "Investigating what it means to build platforms that refuse Western-default assumptions.",
      color: "secondary"
    },
    {
      icon: <Languages size={32} />,
      title: "Community-Engaged Design Methodologies",
      description: "Centering affected communities as knowledge producers rather than data sources — conducting research in Bangla, respecting local context, avoiding extractive practices. Developing participatory design approaches that prioritize community ownership and long-term sustainability.",
      detail: "Examining how cultural practices resist reduction into standardized Western templates.",
      color: "purple-500"
    }
  ];

  return (
    <section id="research" className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            Research Interests
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
            Areas of Inquiry
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Preparing for graduate study examining the intersection of technology, climate adaptation, and community-centered design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4 group-hover:text-accent transition-colors relative z-10">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 relative z-10">
                {area.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 italic leading-relaxed relative z-10 border-l-2 border-accent/30 pl-4">
                {area.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Preparing for Graduate Study callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl border border-accent/20 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I am particularly interested in <span className="text-accent font-bold">spatial approaches to global studies</span> examining how processes of <span className="text-secondary font-bold">digital globalization</span> produce <span className="font-bold text-charcoal dark:text-white">uneven geographies of access, power, and technological possibility</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInterests;
