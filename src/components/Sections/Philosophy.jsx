import { motion } from 'framer-motion';
import { Layers, Heart, Shield, Sparkles } from 'lucide-react';

const Philosophy = () => {
  const principles = [
    {
      icon: <Layers size={32} />,
      title: "Infrastructural Integrity",
      description: "Design isn't just visual; it's the invisible infrastructure that dictates who gets to participate. I build systems that respect local constraints while pushing for global standard performance.",
      color: "accent"
    },
    {
      icon: <Heart size={32} />,
      title: "Emotional Labor of the Interface",
      description: "Every interaction is a moment of care or extraction. I prioritize design that reduces cognitive load and honors the dignity of the user's time and intent.",
      color: "secondary"
    },
    {
      icon: <Shield size={32} />,
      title: "Relational Agency",
      description: "Moving beyond 'users' to 'participants'. Architecture should empower community agency, allowing populations to reshape their digital environments rather than being shaped by them.",
      color: "purple-500"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Making Knowledge Human",
      description: "Translating abstract research and complex datasets into tangible, legible, and actionable public narratives that bridge the gap between academia and community.",
      color: "accent"
    }
  ];

  return (
    <section id="philosophy" className="py-32 px-8 bg-gray-50 dark:bg-gray-900 overflow-hidden relative transition-colors duration-300">
      {/* Decorative background numbers/letters */}
      <div className="absolute top-20 right-10 text-[20vw] font-black text-gray-200/20 dark:text-gray-800/20 select-none pointer-events-none tracking-tighter">
        ETHOS
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-24"
        >
          <span className="inline-block text-[10px] font-black tracking-[0.4em] uppercase text-accent mb-6 px-4 py-1.5 border border-accent/20 rounded-full bg-accent/5">
            Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-charcoal dark:text-white font-bold mb-8 tracking-tighter">
            Critical Practice & <br />
            <span className="italic-off gradient-text font-serif">Infrastructural Care</span>
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            I believe technology should be a tool for respatialization and sovereignty, not a mechanism for standardized exclusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-500"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {principle.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl border border-white/10 text-center"
        >
          <p className="text-3xl font-serif italic text-white mb-4 leading-relaxed">
            "We shape our tools, and thereafter our tools shape us."
          </p>
          <p className="text-gray-400 font-medium">
            — Marshall McLuhan
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
