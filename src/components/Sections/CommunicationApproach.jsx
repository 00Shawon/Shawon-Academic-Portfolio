import { motion } from 'framer-motion';
import { Database, Film, Code, Users } from 'lucide-react';

const CommunicationApproach = () => {
  const capabilities = [
    {
      icon: <Database size={32} />,
      title: "Information Design",
      description: "Organizing complex data into clear, accessible visual systems. From climate datasets to cultural timelines, I architect information for understanding.",
      examples: ["Geospatial data visualization", "Information architecture", "Data storytelling"]
    },
    {
      icon: <Film size={32} />,
      title: "Documentary & Multimedia",
      description: "Capturing human stories through video, audio, and visual narrative. Community-centered production that makes distant experiences tangible.",
      examples: ["Documentary interviews", "Motion graphics", "Visual storytelling"]
    },
    {
      icon: <Users size={32} />,
      title: "User Experience & Interaction",
      description: "Designing interfaces where trust, clarity, and emotional safety emerge from layout, color, and micro-interactions.",
      examples: ["UX research", "Interaction design", "Usability testing"]
    },
    {
      icon: <Code size={32} />,
      title: "Technical Execution",
      description: "Building functional systems with React, Node.js, and modern web technologies. Translating design concepts into deployed applications.",
      examples: ["Full-stack development", "Database design", "API integration"]
    }
  ];

  return (
    <section id="approach" className="py-32 px-8 bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-secondary font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            My Approach
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
            Communication-Centered Design
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Every project starts with a communication challenge. I combine information design, multimedia production, user experience, and technical execution to solve it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-accent/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {cap.icon}
              </div>
              <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4 group-hover:text-accent transition-colors">
                {cap.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cap.examples.map((ex, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Examples Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-8 text-center">
            Communication Problems I've Solved
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-charcoal dark:text-white mb-2">Sundarbans Platform</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Problem:</strong> Climate data feels abstract and distant
              </p>
              <p className="text-sm text-accent font-medium">
                <strong>Solution:</strong> Information design + documentary storytelling
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-charcoal dark:text-white mb-2">TripHub Platform</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Problem:</strong> Users don't trust online transactions
              </p>
              <p className="text-sm text-accent font-medium">
                <strong>Solution:</strong> UX design + visual trust signals
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
              <h4 className="font-bold text-charcoal dark:text-white mb-2">Wedding Experience</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                <strong>Problem:</strong> Cultural meaning lost in translation
              </p>
              <p className="text-sm text-accent font-medium">
                <strong>Solution:</strong> Information architecture + visual communication
              </p>
            </div>
          </div>
        </motion.div>

        {/* GA Skills Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl border border-accent/20"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-charcoal dark:text-white mb-4">
              Graduate Assistantship Ready
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I bring technical development skills (React, Node.js, databases), research experience (SPSS, survey design, user interviews), multimedia production capability (video editing, graphic design), and documentation skills—ready to support faculty research, lab projects, or community partnerships from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunicationApproach;
