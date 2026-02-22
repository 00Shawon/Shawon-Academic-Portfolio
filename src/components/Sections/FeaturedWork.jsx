import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import sundarbansHero from '../../assets/sundarbans/sundarbans-hero.png';
import weddingHero from '../../assets/wedding/wedding-hero.png';
import documentaryHero from '../../assets/Documentry.png';


const FeaturedWork = () => {
  const featured = [
    {
      title: "Sundarbans Climate Displacement Platform",
      label: "RESEARCH PROJECT — Climate & Data Visualization",
      tagline: "Making Climate Futures Present",
      description: "Interactive platform documenting how Global North emissions materialize as Global South dispossession. Bangladesh produces <0.5% of global greenhouse gas emissions yet faces catastrophic climate vulnerability—this project examines what it means to make distant ecological violence present and actionable.",
      hook: "How do we communicate ecological crisis in ways that don't collapse tropical displacement into Western-centric narratives?",
      image: sundarbansHero,
      highlights: [
        "Geospatial Mapping: Leaflet.js visualization showing Gabura village's projected transformation from 2000 to 2050",
        "Community Research: Field research conducted in Bangla with coastal communities affected by sea-level rise and cyclone intensification",
        "Data Integration: Bangladesh Meteorological Department, IPCC AR6, and NOAA cyclone datasets",
        "Scroll-based Narrative: Temporal data visualization making scientific projections emotionally accessible"
      ],
      approach: "Conducted field research in Bangla with coastal communities—centering their voices as knowledge producers rather than extracting data for external academic consumption. This engages questions of climate witnessing: how do we communicate ecological crisis without collapsing tropical displacement into Western-centric narratives?",
      tech: ["React", "Leaflet.js", "Chart.js", "Framer Motion"],
      liveLink: "https://sundorban.vercel.app/",
      githubLink: "https://github.com/00Shawon/Sundorban"
    },
    {
      title: "Saline Scars: A Water Crisis Documentary",
      label: "DOCUMENTARY — Visual Storytelling",
      tagline: "Documenting the Silent Crisis of Climate Change in the Sundarbans",
      description: "A short documentary film capturing the devastating impact of rising salinity on the lives of coastal communities in Dacope, Khulna. Through raw, on-ground reporting and intimate interviews, this film highlights the human cost of climate change where water—the source of life—has become a poison.",
      hook: "When the river that sustains you turns against you, where do you go?",
      image: documentaryHero, 
      highlights: [
        "Field Reporting: On-location filming in Dacope, capturing the reality of water scarcity",
        "Visual Narrative: Crafted a compelling story arc focusing on human resilience",
        "Video Editing: Professional editing and color grading using CapCut to evoke emotional resonance",
        "Community engagement: Interviews with affected families, farmers, and local leaders"
      ],
      approach: "Using video as a medium for advocacy, this project moves beyond statistics to show the lived experience of climate displacement. The goal was to make the invisible crisis of salinity visible and emotionally urgent.",
      tech: ["Video Production", "CapCut", "Storytelling", "Cinematography", "Interviewing"],
      liveLink: "https://photos.app.goo.gl/UFWVZEm846bboEiK8", 
      githubLink: "#" 
    },
    {
      title: "Cultural Wedding Storytelling Platform",
      label: "DECOLONIAL DESIGN — Multilingual Architecture",
      tagline: "Decolonial Design Practice",
      description: "Platform documenting South Asian Muslim wedding ceremonies in four languages (Arabic, Urdu, Bangla, English) where each carries equal visual and narrative weight—refusing the English-first, Western-default assumptions embedded in modern web frameworks.",
      hook: "What does digital sovereignty look like at the interface level?",
      image: weddingHero,
      highlights: [
        "Multilingual Architecture: Arabic, Urdu, Bangla, and English treated as foundational design logics, not translation afterthoughts",
        "Framework Override: Systematic override of Next.js/Tailwind defaults that assume Latin-script primacy",
        "Cultural Narrative: Complete narrative across three ceremonies (Akth/Nikah, Holud, Wedding Reception)",
        "Community Features: Filterable photo archive (100+ images), guest blessing system, Quranic verse integration"
      ],
      approach: "Instead of treating Arabic as RTL 'exception' or Bangla as 'translation,' the architecture positions each language as foundational design logic. This explores what design methodologies emerge when we reject the assumption that English is primary and everything else is secondary.",
      tech: ["Next.js", "Tailwind", "Multilingual Architecture", "RTL Design"],
      liveLink: "https://rafar-shawon.vercel.app/",
      githubLink: "https://github.com/00Shawon/Rafar-Biye"
    }
  ];

  return (
    <section id="featured" className="py-32 px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            Applied Research
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Where critical inquiry, community-engaged research, and technical execution intersect to examine digital inequality and platform governance.
          </p>
        </motion.div>

        <div className="space-y-32">
          {featured.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200 dark:bg-gray-800 group">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent pointer-events-none" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20">
                         <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                            <ExternalLink className="text-white w-6 h-6" />
                         </div>
                    </div>
                  </a>
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 pointer-events-none">
                    <span className="px-4 py-2 bg-accent text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg">
                      {project.label.split('—')[0]}
                    </span>
                  </div>
                </div>
                
                {/* Decorative blob */}
                <div className={`absolute -z-10 w-72 h-72 ${index % 2 === 0 ? 'bg-accent/20 -top-10 -right-10' : 'bg-secondary/20 -bottom-10 -left-10'} blur-3xl rounded-full`} />
              </div>

              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="mb-4">
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {project.label.split('—')[1]?.trim() || project.label}
                  </span>
                </div>
                
                <h3 className="text-4xl font-bold text-charcoal dark:text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-2xl text-secondary font-serif italic mb-6">
                  "{project.hook}"
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-charcoal dark:text-white uppercase tracking-wider mb-4">
                    Key Elements
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="text-accent mt-1">→</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Approach/Insight */}
                {project.approach && (
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-l-4 border-accent mb-8">
                    <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-charcoal dark:bg-white text-white dark:text-charcoal rounded-xl font-bold text-sm hover:bg-accent dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    {project.label.includes("DOCUMENTARY") ? "Watch Documentary" : "View Live Prototype"}
                  </a>
                  {project.githubLink !== "#" && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-charcoal dark:border-white text-charcoal dark:text-white rounded-xl font-bold text-sm hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all flex items-center gap-2"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
