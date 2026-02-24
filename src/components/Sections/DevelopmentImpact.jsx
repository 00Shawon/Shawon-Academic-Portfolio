import { motion } from 'framer-motion';
import { AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react';

const DevelopmentImpact = () => {
  const blocks = [
    {
      icon: <AlertTriangle size={24} />,
      title: "The Problem",
      colorClass: "text-red-600 dark:text-red-400",
      bgClass: "bg-red-500/10",
      borderClass: "border-red-500/20",
      items: [
        { bold: "15 million coastal residents", text: "lack accessible climate information" },
        { bold: "73%", text: "have no digital access to early warning systems" },
        { bold: null, text: "Existing systems designed for English, desktop, reliable internet" },
        { bold: null, text: "Traditional warning infrastructure fails during power outages" },
      ],
    },
    {
      icon: <Lightbulb size={24} />,
      title: "My Approach: Digital Public Infrastructure for Climate Resilience",
      colorClass: "text-emerald-600 dark:text-emerald-400",
      bgClass: "bg-emerald-500/10",
      borderClass: "border-emerald-500/20",
      items: [
        { bold: null, text: "Build offline-capable, mobile-first systems" },
        { bold: null, text: "Conduct community-engaged research in Bangla" },
        { bold: null, text: "Design for low-bandwidth, low-literacy contexts" },
        { bold: null, text: "Create scalable, sustainable local solutions" },
      ],
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Impact Potential",
      colorClass: "text-violet-600 dark:text-violet-400",
      bgClass: "bg-violet-500/10",
      borderClass: "border-violet-500/20",
      items: [
        { bold: "700+ vulnerable villages", text: "requiring similar infrastructure" },
        { bold: "Cost-effective:", text: "$0.0003/person/year vs $200,000+ traditional systems" },
        { bold: "Scalable methodology", text: "for other climate-vulnerable regions" },
        { bold: null, text: "Aligns with Bangladesh's National Adaptation Programme of Action (NAPA) priorities" },
      ],
    },
  ];

  return (
    <section id="development-impact" className="py-28 px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-emerald-600 font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Development Focus
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
            Development Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            My work addresses critical gaps in Bangladesh's climate adaptation capacity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`p-8 bg-white dark:bg-gray-900 rounded-3xl border ${block.borderClass} shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${block.bgClass} rounded-full -mr-10 -mt-10`} />

              <div className={`${block.colorClass} mb-5 relative z-10`}>
                {block.icon}
              </div>
              <h3 className={`text-lg font-bold ${block.colorClass} mb-6 relative z-10`}>
                {block.title}
              </h3>

              <ul className="space-y-4 relative z-10">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className={`${block.colorClass} mt-1 shrink-0`}>→</span>
                    <span className="text-sm leading-relaxed">
                      {item.bold && <strong className="text-charcoal dark:text-white">{item.bold} </strong>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentImpact;
