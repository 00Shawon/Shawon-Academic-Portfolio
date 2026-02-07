import { motion } from 'framer-motion';

const Philosophy = () => {
  const principles = [
    {
      title: "Information Architecture Shapes Understanding",
      description: "How we organize data determines what people can understand. Clear hierarchies, intuitive navigation, and thoughtful structure make complex information accessible.",
      icon: "📊"
    },
    {
      title: "State Changes Are Emotional Transitions",
      description: "Interface feedback, color shifts, and motion cues don't just show technical state—they shape how users interpret success, failure, and uncertainty. Design the feeling, not just the function.",
      icon: "🎭"
    },
    {
      title: "Trust is Constructed Through Micro-Decisions",
      description: "Typography, color palettes, spacing, iconography—every visual choice signals whether users feel informed, respected, and safe. Trust isn't declared; it's designed pixel by pixel.",
      icon: "🔐"
    },
    {
      title: "Narrative Makes Data Human",
      description: "Statistics alone don't move people. Documentary storytelling, personal accounts, and visual narrative transform abstract information into tangible, urgent communication.",
      icon: "🎬"
    }
  ];

  return (
    <section id="philosophy" className="py-32 px-8 bg-charcoal dark:bg-gray-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            Design Thinking
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Core Philosophy
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Principles forged through user testing, thesis research, and building communication systems where clarity and trust are non-negotiable.
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
