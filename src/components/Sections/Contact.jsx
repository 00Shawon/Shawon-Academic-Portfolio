import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    { label: "LinkedIn", icon: <FiLinkedin />, href: "#", color: "hover:bg-[#0077B5]" },
    { label: "GitHub", icon: <FiGithub />, href: "#", color: "hover:bg-[#333]" },
    { label: "Email", icon: <FiMail />, href: "mailto:mehedishawon121@gmail.com", color: "hover:bg-accent" }
  ];

  return (
    <section id="contact" className="section-padding px-8 bg-white dark:bg-gray-950 overflow-hidden relative transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 blur-[130px] rounded-full animate-blob pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-1 bg-accent rounded-full"></div>
                <span className="text-[11px] font-black text-accent uppercase tracking-[0.4em]">Availability</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-charcoal dark:text-white mb-8 leading-[1.1] font-bold">
                Let's discuss your next <span className="text-secondary">Meaningful</span> build.
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 leading-relaxed max-w-sm">
                Open to collaborations on products that value <span className="text-charcoal dark:text-white font-bold">design integrity</span> and technical performance.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 ${link.color} hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1`}
                  title={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gray-50 dark:bg-gray-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 space-y-10 relative overflow-hidden group shadow-2xl shadow-gray-200 dark:shadow-none"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="space-y-4 relative z-10">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Primary Contact</p>
              <a href="mailto:mehedishawon121@gmail.com" className="text-2xl font-bold text-charcoal dark:text-white hover:text-accent transition-colors block tracking-tight">
                mehedishawon121@gmail.com
              </a>
            </div>

            <div className="space-y-4 relative z-10">
              <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">Direct Line</p>
              <p className="text-lg font-bold text-charcoal dark:text-white">+880 1954 638110</p>
            </div>

            <button className="w-full py-6 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] hover:bg-accent dark:hover:bg-gray-200 transition-all shadow-xl hover:shadow-accent/40 flex items-center justify-center gap-4 relative z-10 group/btn">
              START A CONVERSATION <FiArrowRight className="text-lg group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
