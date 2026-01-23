import { motion } from 'framer-motion';
import { FiUsers, FiCpu, FiMessageCircle, FiRepeat } from 'react-icons/fi';

const Philosophy = () => {
  const principles = [
    {
      title: "Human-Centered Design",
      icon: <FiUsers />,
      color: "accent",
      text: "Every component is built on the principle that complexity should be abstracted away from the user while maintaining powerful underlying logic.",
    },
    {
      title: "The Medium is the Message",
      icon: <FiCpu />,
      color: "secondary",
      text: "Architecture isn't just data flow—it's the primary interface through which systems and users communicate.",
    },
    {
      title: "Clean Communication",
      icon: <FiMessageCircle />,
      color: "purple-500",
      text: "Code should be written for humans first and machines second. Clarity of intent is as important as technical performance.",
    },
    {
      title: "Iterative Refinement",
      icon: <FiRepeat />,
      color: "orange-600",
      text: "Shipping is the start of the conversation. Real usage patterns inform the evolution of every digital product.",
    }
  ];

  return (
    <section id="philosophy" className="section-padding px-8 bg-white dark:bg-gray-950 border-b border-gray-50 dark:border-gray-800 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center space-x-3 mb-4">
             <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
             <span className="text-[11px] font-black text-accent uppercase tracking-[0.4em]">Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal dark:text-white mb-6 font-bold">Core Principles</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
            How media theory and human-centered design shape my <span className="text-secondary font-bold">engineering approach</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {principles.map((principle, index) => (
            <motion.div 
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-none transition-all duration-500"
            >
              <div className={`w-14 h-14 bg-${principle.color}/10 rounded-2xl flex items-center justify-center text-2xl text-${principle.color} mb-6 group-hover:bg-${principle.color} group-hover:text-white transition-all duration-500`}>
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4 group-hover:text-accent transition-colors">{principle.title}</h3>
              <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                {principle.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
