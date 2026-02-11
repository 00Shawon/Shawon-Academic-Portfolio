import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import sundarbansHero from '../../assets/sundarbans/sundarbans-hero.png';
import weddingHero from '../../assets/wedding/wedding-hero.png';
import salineVideo from '../../assets/202602111919.mp4';

const FeaturedWork = () => {
  const featured = [
    {
      title: "Sundarbans Climate Crisis Platform",
      label: "CAPSTONE PROJECT — Information Design & Documentary",
      tagline: "Making Invisible Displacement Visible Through Data & Narrative",
      description: "Interactive platform combining information architecture, geospatial data visualization, and documentary storytelling to communicate climate displacement. Translates complex environmental data into accessible public narratives while documenting community impact through multimedia production.",
      hook: "How do you design information systems that make distant crises feel urgent and measurable?",
      image: sundarbansHero,
      highlights: [
        "Information Architecture: Organizing climate data, scientific projections, and community stories for diverse audiences",
        "Geospatial Visualization: Leaflet.js mapping showing 2030/2040/2050 sea-level rise for Gabura village",
        "Documentary Production: Interviews with fishermen, farmers, forest guards documenting lived experience",
        "Data Translation: Motion graphics and visual explainers making scientific data emotionally accessible",
        "User-Centered Design: Pilot study methodology—understand one community profoundly, then scale"
      ],
      approach: "Starting with Gabura village as a pilot mirrors participatory research methodology: deep community documentation before regional expansion. This project bridges information design (making data clear) and documentary storytelling (making data human).",
      
      // DUAL FRAMING for both programs
      emddAlignment: [
        "Documentary production with community partners",
        "Transmedia storytelling across data viz + video + AR",
        "Visual narrative design for public engagement"
      ],
      cicsAlignment: [
        "Information architecture for complex climate datasets",
        "Geospatial data visualization and mapping systems",
        "User experience design for non-expert audiences"
      ],
      
      facultyAlignment: [
        "Dr. Palilonis (EMDD): Data visualization & information design",
        "Dr. Fisher (EMDD): Community-driven AR & spatial justice",
        "Dr. Moloney (EMDD): Transmedia storytelling",
        "CICS Applied Research Institute: Climate communication research"
      ],
      tech: ["Information Design", "Leaflet.js", "Chart.js", "A-Frame", "React", "MongoDB"],
      liveLink: "https://euphonious-begonia-df38cb.netlify.app/",
      githubLink: "https://github.com/00Shawon/Sundorban"
    },
    {
      title: "Saline Scars: A Water Crisis Documentary",
      label: "DOCUMENTARY — Visual Storytelling",
      tagline: "Documenting the Silent Crisis of Climate Change in the Sundarbans",
      description: "A short documentary film capturing the devastating impact of rising salinity on the lives of coastal communities in Dacope, Khulna. Through raw, on-ground reporting and intimate interviews, this film highlights the human cost of climate change where water—the source of life—has become a poison.",
      hook: "When the river that sustains you turns against you, where do you go?",
      video: salineVideo,
      highlights: [
        "Field Reporting: On-location filming in Dacope, capturing the reality of water scarcity",
        "Visual Narrative: Crafted a compelling story arc focusing on human resilience",
        "Video Editing: Professional editing and color grading using CapCut to evoke emotional resonance",
        "Community engagement: Interviews with affected families, farmers, and local leaders"
      ],
      approach: "Using video as a medium for advocacy, this project moves beyond statistics to show the lived experience of climate displacement. The goal was to make the invisible crisis of salinity visible and emotionally urgent.",
      
      // DUAL FRAMING
      emddAlignment: [
        "Digital storytelling for social impact",
        "Multimedia production & editing",
        "Community-centered narrative design"
      ],
      cicsAlignment: [
        "Communicating complex environmental issues",
        "Visual media production for public awareness",
        "Digital advocacy campaigns"
      ],
      
      facultyAlignment: [
        "Dr. Moloney (EMDD): Visual storytelling & transmedia narratives",
        "CICS: Digital media and social change communication"
      ],
      tech: ["Video Production", "CapCut", "Storytelling", "Cinematography", "Interviewing"],
      liveLink: "#", 
      githubLink: "#" 
    },
    {
      title: "Bengali Wedding Digital Experience",
      label: "CULTURAL DESIGN — Communication Strategy",
      tagline: "Translating Cultural Ritual into Visual Information Systems",
      description: "Designed comprehensive digital communication platform for Bengali wedding ceremonies spanning three cultural days. Focused on information architecture, visual communication design, and interaction patterns that translate complex cultural meaning for international audiences unfamiliar with tradition.",
      hook: "How do you design information systems that communicate cultural meaning across audiences?",
      image: weddingHero,
      highlights: [
        "Information Architecture: Organizing three-day ceremony timeline for diverse audience understanding",
        "Visual Communication: Custom illustration system translating cultural symbols into accessible graphics",
        "Typography & Hierarchy: Connecting Bengali script heritage to digital information design",
        "Interaction Design: Guiding international guests through unfamiliar cultural contexts",
        "Accessibility Focus: Mobile-first design for low-bandwidth, multi-continental access"
      ],
      approach: "This wasn't just aesthetics—it was a communication design problem. How do visual systems, information hierarchy, and interaction patterns translate cultural ritual for people who've never experienced these traditions?",
      tech: ["UX Design", "Information Architecture", "React", "Figma", "Illustrator", "Firebase"],
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
            Graduate Work Preview
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Where information design, documentary storytelling, and technical execution intersect to solve communication challenges.
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
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-200 dark:bg-gray-800">
                  {project.video ? (
                    <video 
                      src={project.video} 
                      controls 
                      className="w-full h-full object-cover"
                      poster={project.image} // Optional: use image as poster if available
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000`;
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent pointer-events-none" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6">
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
                    View Live Prototype
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border-2 border-charcoal dark:border-white text-charcoal dark:text-white rounded-xl font-bold text-sm hover:bg-charcoal hover:text-white dark:hover:bg-white dark:hover:text-charcoal transition-all flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>

                {/* Faculty Alignment */}
                {project.facultyAlignment && (
                  <div className="mt-8 p-5 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-purple-100 dark:border-gray-700">
                    <h4 className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-3">
                      CCIM Faculty & Research Alignment
                    </h4>
                    <ul className="space-y-2">
                      {project.facultyAlignment.map((faculty, i) => (
                        <li key={i} className="text-sm text-purple-800 dark:text-purple-200 flex items-start gap-2">
                          <span>•</span>
                          <span>{faculty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
