import { motion } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiFirebase, SiTailwindcss, SiHtml5, SiCss3, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, 
  SiReactquery, SiGit, SiVite, SiVercel, SiFigma,
  SiCanva, SiDavinciresolve 
} from 'react-icons/si';
import { FiCode, FiVideo } from 'react-icons/fi';

const TechStack = () => {
  const categories = [
    {
      title: "Core Stack",
      color: "accent",
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
        { name: "React.js", icon: <SiReact />, color: "text-[#61DAFB]" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" }
      ]
    },
    {
      title: "Backend / Logic",
      color: "secondary",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" }
      ]
    },
    {
      title: "Tools & Flow",
      color: "purple-500",
      skills: [
        { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
        { name: "VS Code", icon: <FiCode />, color: "text-[#007ACC]" },
        { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E]" },
        { name: "Canva", icon: <SiCanva />, color: "text-[#00C4CC]" },
        { name: "CapCut", icon: <FiVideo />, color: "text-gray-800 dark:text-gray-200" },
        { name: "DaVinci (Learning)", icon: <SiDavinciresolve />, color: "text-[#3E7BFA]" }
      ]
    }
  ];

  return (
    <section id="tech" className="section-padding px-8 bg-white dark:bg-gray-950 border-b border-gray-50 dark:border-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background soft gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <div className="flex justify-center items-center space-x-3 mb-4">
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
             <span className="text-[11px] font-black text-accent uppercase tracking-[0.4em]">Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-charcoal dark:text-white mb-6 font-bold">Technical Arsenal</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-[15px] leading-relaxed">
            The vibrant assembly of modern tools used to translate abstract concepts into <span className="text-secondary font-bold italic serif">performance-driven reality</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="group"
            >
              <div className={`flex items-center space-x-4 mb-10 pb-4 border-b border-${cat.color}/10 group-hover:border-${cat.color}/40 transition-colors duration-500`}>
                <h3 className={`text-xs font-black text-gray-400 group-hover:text-${cat.color} uppercase tracking-[0.2em] transition-colors`}>
                  {cat.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex flex-col items-start gap-4 group/skill cursor-default"
                  >
                    <div className={`text-2xl ${skill.color} p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl group-hover/skill:bg-white dark:group-hover/skill:bg-gray-700 group-hover/skill:shadow-xl group-hover/skill:shadow-${cat.color}/10 transition-all duration-500`}>
                      {skill.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-1">
                        {skill.name}
                      </span>
                      <div className={`w-0 group-hover/skill:w-full h-0.5 bg-${cat.color} transition-all duration-500`}></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Academic Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-charcoal dark:bg-gray-900 rounded-[3rem] text-white relative overflow-hidden group border border-white/5 dark:border-gray-800"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 blur-[100px] rounded-full -mr-32 -mt-32 transition-all group-hover:bg-accent/40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full -ml-32 -mb-32 transition-all group-hover:bg-secondary/40" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-black text-accent uppercase tracking-[0.35em] mb-4 block">Education</span>
              <h4 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">Master of Social Science</h4>
              <p className="text-gray-400 text-lg font-medium">Mass Communication & Journalism • Khulna University</p>
            </div>
            <a 
              href="https://drive.google.com/file/d/1GtgKCJQ2d10WYLIL5rFwp_y6T_TatRtb/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/5 backdrop-blur-md rounded-3xl font-black text-xs uppercase tracking-[0.2em] border border-white/10 hover:bg-white hover:text-charcoal transition-all text-center block group/thesis"
            >
               Thesis: <span className="text-accent group-hover/thesis:text-charcoal transition-colors">privacy related issue</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
