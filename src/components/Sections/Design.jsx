import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, Palette, Users, Target, Calendar, Package } from 'lucide-react';

// NEW LOGICAL NAMING - Update your assets folder to match these names
import ecoFrontlinesImg from '../../assets/Design/8x5.jpg';
import lalSabujCampaignImg from '../../assets/Design/CTG-02.jpg';
import luminedgeAdmissionImg from '../../assets/Design/luminedge-admission-event.jpg';
import lalSabujYouthImg from '../../assets/Design/lal-sabuj-youth-empowerment.jpg';
import splashNShineBrandingImg from '../../assets/Design/splash-n-shine-brand-identity.jpg';
import splashNShineAdImg from '../../assets/Design/splash-n-shine-social-ad.png';

const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const designs = [
    {
      id: 1,
      title: "Environmental Journalism Workshop",
      category: "Event Branding",
      image: ecoFrontlinesImg,
      clientName: "ecofrontlines & DW",
      projectDuration: "August 2023",
      designBrief: "Create a compelling visual identity for a 4-day environmental journalism workshop co-hosted by ecofrontlines and Deutsche Welle (DW) in collaboration with Khulna University. The design needed to communicate environmental urgency while maintaining institutional credibility.",
      targetAudience: "Journalism students, environmental activists, media professionals, and academic faculty interested in climate change reporting and sustainable storytelling.",
      colorPalette: {
        primary: ["#4ECDC4", "#2A9D8F"],
        secondary: ["#264653", "#E76F51"],
        accent: ["#F4A261"]
      },
      typography: {
        primary: "Montserrat Bold",
        secondary: "Open Sans",
        accent: "Roboto"
      },
      deliverables: [
        "A2 Event Poster",
        "Social Media Graphics (1080x1080)",
        "Facebook Event Cover",
        "Digital Invitation Template",
        "Brand Guidelines Document"
      ],
      tools: ["Canva"]
    },
    {
      id: 2,
      title: "Asachi Choturongo - Youth Climate Campaign",
      category: "Social Impact Design",
      image: lalSabujCampaignImg,
      clientName: "Lal Sabuj Society",
      projectDuration: "September 2023",
      designBrief: "Design a bold, youthful campaign visual to mobilize young people around climate action in Bangladesh. The message 'Come to Your City' needed to feel urgent, accessible, and empowering to inspire grassroots participation.",
      targetAudience: "Youth activists aged 16-30, university students, environmental NGO volunteers, and community organizers focused on climate justice and urban sustainability.",
      colorPalette: {
        primary: ["#52B788", "#40916C"],
        secondary: ["#FFFFFF"],
        accent: ["#E63946", "#FFD60A"]
      },
      typography: {
        primary: "Noto Sans Bengali Bold",
        secondary: "Hind Siliguri Medium",
        accent: "Mukta Malar"
      },
      deliverables: [
        "Instagram Post (1080x1080)",
        "Facebook Post Graphics",
        "Campaign Hashtag Design",
        "Print Flyer (A5)",
        "WhatsApp Status Template"
      ],
      tools: ["Canva", ]
    },
    {
      id: 3,
      title: "Multi-Destination Admission Day",
      category: "Educational Marketing",
      image: luminedgeAdmissionImg,
      clientName: "Luminedge",
      projectDuration: "May 2024",
      designBrief: "Create a high-impact event poster promoting a multi-destination admission fair in Khulna, highlighting scholarship opportunities and post-study work benefits across 6 countries. Design needed to feel premium and internationally credible while being locally accessible.",
      targetAudience: "High school graduates, undergraduate students, parents planning international education, and career counselors seeking study abroad opportunities in UK, USA, Australia, Canada, Finland, and Ireland.",
      colorPalette: {
        primary: ["#1A1A2E", "#16213E"],
        secondary: ["#FFD93D", "#FFFFFF"],
        accent: ["#6C63FF"]
      },
      typography: {
        primary: "Montserrat ExtraBold",
        secondary: "Poppins",
        accent: "Roboto Condensed"
      },
      deliverables: [
        "Event Poster (24x36 inches)",
        "Social Media Campaign Set",
        "Email Banner (600x200px)",
        "Digital Standee Design",
        "Instagram Story Template"
      ],
      tools: ["Canva", ]
    },
    {
      id: 4,
      title: "Climate Volunteer Recruitment Campaign",
      category: "Social Media Design",
      image: lalSabujYouthImg,
      clientName: "Lal Sabuj Society",
      projectDuration: "October 2023",
      designBrief: "Design an inclusive, inspiring recruitment graphic to attract diverse young volunteers for climate action initiatives. The visual needed to represent community, diversity, and collective action while maintaining brand consistency with Lal Sabuj Society's environmental mission.",
      targetAudience: "University students, young professionals aged 18-28, environmental science majors, and socially conscious youth interested in volunteering for climate and sustainability projects.",
      colorPalette: {
        primary: ["#52B788", "#2D6A4F"],
        secondary: ["#FFFFFF", "#F8F9FA"],
        accent: ["#E63946"]
      },
      typography: {
        primary: "Noto Sans Bengali Bold",
        secondary: "Hind Siliguri",
        accent: "Mukta"
      },
      deliverables: [
        "Facebook Post (1200x1200)",
        "Instagram Carousel (3 slides)",
        "Twitter Header Image",
        "LinkedIn Post Graphic",
        "Print Poster (A3)"
      ],
       tools: ["Canva", ]
    },
    {
      id: 5,
      title: "Splash'n Shine - Complete Brand Identity",
      category: "Brand Design",
      image: splashNShineBrandingImg,
      clientName: "Splash'n Shine Carwash",
      projectDuration: "March-May 2024",
      designBrief: "Develop a comprehensive brand identity system for a premium carwash service, including logo design, color system, business collateral, social media templates, and environmental graphics. The brand needed to communicate cleanliness, trust, and modern service quality.",
      targetAudience: "Car owners aged 25-50, urban professionals, families with vehicles, luxury car owners, and fleet management companies seeking reliable, eco-friendly car care services.",
      colorPalette: {
        primary: ["#1B5E5E", "#2A7E7E"],
        secondary: ["#A8E063", "#56AB2F"],
        accent: ["#FFFFFF", "#F0F0F0"]
      },
      typography: {
        primary: "Bebas Neue",
        secondary: "Lato",
        accent: "Montserrat"
      },
      deliverables: [
        "Logo Design (Primary + Secondary)",
        "Business Card Design",
        "Social Media Template Set (10 designs)",
        "Outdoor Signage Mockup",
        "Brand Guidelines (20-page PDF)",
        "3D Gas Station Visualization",
        "Facebook Ad Campaign Set"
      ],
        tools: ["Canva", ]
    },
    {
      id: 6,
      title: "Before/After Carwash Social Ad",
      category: "Digital Advertising",
      image: splashNShineAdImg,
      clientName: "Splash'n Shine Carwash",
      projectDuration: "June 2024",
      designBrief: "Create a high-conversion social media ad showcasing dramatic before/after transformation with water splash effects. The ad needed to communicate service quality instantly and drive immediate action through clear messaging and visual impact.",
      targetAudience: "Facebook and Instagram users aged 25-45 with vehicles, particularly targeting car enthusiasts, busy professionals, and quality-conscious customers within a 10km radius of the service location.",
      colorPalette: {
        primary: ["#1B5E5E", "#2A7E7E"],
        secondary: ["#A8E063", "#56AB2F"],
        accent: ["#FFFFFF"]
      },
      typography: {
        primary: "Impact",
        secondary: "Lato Bold",
        accent: "Montserrat"
      },
      deliverables: [
        "Facebook Ad (1200x628)",
        "Instagram Story Ad (1080x1920)",
        "Carousel Ad Set (3 variations)",
        "A/B Test Versions (5 copies)",
        "Animated GIF Version"
      ],
        tools: ["Canva", ]
    }
  ];

  const openModal = (design) => {
    setSelectedDesign(design);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedDesign(null);
    document.body.style.overflow = 'auto';
  };

  const nextDesign = (e) => {
    e.stopPropagation();
    const currentIndex = designs.findIndex(d => d.id === selectedDesign.id);
    const nextIndex = (currentIndex + 1) % designs.length;
    setSelectedDesign(designs[nextIndex]);
  };

  const prevDesign = (e) => {
    e.stopPropagation();
    const currentIndex = designs.findIndex(d => d.id === selectedDesign.id);
    const prevIndex = (currentIndex - 1 + designs.length) % designs.length;
    setSelectedDesign(designs[prevIndex]);
  };

  return (
    <section id="design" className="py-24 px-6 bg-slate-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-purple-50 rounded-full">
            Creative Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Visual Design
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of brand identities, marketing materials, and digital art.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openModal(design)}
              className="group cursor-pointer"
              data-cursor-text="Click"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg aspect-[4/3]">
                <div className="absolute inset-0 bg-slate-200 dark:bg-gray-800 animate-pulse" />
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-purple-300 text-sm font-semibold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {design.category}
                  </span>
                  <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {design.title}
                  </h3>
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Image Section - 55% width for better image viewing */}
              <div className="lg:w-[55%] bg-black relative min-h-[50vh] lg:min-h-full flex items-center justify-center p-8">
                 <img 
                  src={selectedDesign.image} 
                  alt={selectedDesign.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Navigation Buttons */}
                <button 
                  onClick={prevDesign}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextDesign}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Info Section - 45% width with scrollable content */}
              <div className="lg:w-[45%] overflow-y-auto bg-white dark:bg-gray-900">
                <div className="sticky top-0 bg-white dark:bg-gray-900 z-10 p-6 border-b border-slate-200 dark:border-gray-800 flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                      {selectedDesign.category}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedDesign.title}</h2>
                    <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">{selectedDesign.clientName}</p>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-2 bg-slate-100 dark:bg-gray-800 hover:bg-slate-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-600 dark:text-slate-300" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Design Brief */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Target size={16} className="text-purple-600" />
                      Design Brief
                    </h3>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-sm">
                      {selectedDesign.designBrief}
                    </p>
                  </div>

                  {/* Target Audience */}
                  <div className="bg-slate-50 dark:bg-gray-800 p-4 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Users size={16} className="text-purple-600" />
                      Target Audience
                    </h3>
                    <p className="text-slate-700 dark:text-gray-300 leading-relaxed text-sm">
                      {selectedDesign.targetAudience}
                    </p>
                  </div>

                  {/* Color Palette */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Palette size={16} className="text-purple-600" />
                      Color Palette
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Primary</p>
                        <div className="flex gap-2">
                          {selectedDesign.colorPalette.primary.map((color, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div 
                                className="w-12 h-12 rounded-lg shadow-md border border-slate-200" 
                                style={{ backgroundColor: color }}
                              />
                              <span className="text-xs text-slate-600 mt-1 font-mono">{color}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Secondary</p>
                        <div className="flex gap-2">
                          {selectedDesign.colorPalette.secondary.map((color, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div 
                                className="w-12 h-12 rounded-lg shadow-md border border-slate-200" 
                                style={{ backgroundColor: color }}
                              />
                              <span className="text-xs text-slate-600 mt-1 font-mono">{color}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {selectedDesign.colorPalette.accent && (
                        <div>
                          <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Accent</p>
                          <div className="flex gap-2">
                            {selectedDesign.colorPalette.accent.map((color, i) => (
                              <div key={i} className="flex flex-col items-center">
                                <div 
                                  className="w-12 h-12 rounded-lg shadow-md border border-slate-200" 
                                  style={{ backgroundColor: color }}
                                />
                                <span className="text-xs text-slate-600 mt-1 font-mono">{color}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                      Typography
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase">Primary</span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{selectedDesign.typography.primary}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase">Secondary</span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{selectedDesign.typography.secondary}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase">Accent</span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{selectedDesign.typography.accent}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Package size={16} className="text-purple-600" />
                      Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {selectedDesign.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-gray-300">
                          <span className="text-purple-600 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools & Timeline */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Tools Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDesign.tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 rounded-lg text-xs font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Calendar size={14} className="text-purple-600" />
                        Timeline
                      </h3>
                      <p className="text-sm text-slate-700 dark:text-gray-300 font-medium">{selectedDesign.projectDuration}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-100 mt-6">
                    <p className="text-purple-900 text-sm font-semibold mb-1">
                      Interested in similar work?
                    </p>
                    <p className="text-purple-700 text-xs">
                      Let's discuss how I can help bring your vision to life with strategic design.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Design;