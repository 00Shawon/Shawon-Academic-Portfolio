import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "TripHub",
      date: "January 2026",
      description: "Three-sided marketplace connecting travelers, ticket vendors, and platform admins with role-based workflows and transactional integrity. Handles booking lifecycle from search → payment → fulfillment with fraud prevention and real-time availability tracking.",
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
      ],
      tags: ["React", "Vite", "Firebase", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
      features: [
        "Payment Integrity: Prevented overselling with Stripe webhook → MongoDB transaction pipeline",
        "Fraud Detection System: Built admin tooling to auto-hide fraudulent vendor listings",
        "Time-Based Expiration: Server-computed countdown with departure validation",
        "Revenue Analytics: Real-time dashboard with sub-200ms MongoDB aggregation queries"
      ],
      color: "bg-emerald-50 text-emerald-600",
      type: "FULL STACK",
      challenges: "Architected robust payment integrity system handling Stripe webhook edge cases, implemented complex MongoDB aggregation pipelines for fraud detection.",
      future: "Adding AI-powered route recommendations, dynamic pricing, and real-time seat maps with WebSocket integration.",
      github: "https://github.com/00Shawon/Trip-hub-client",
      githubServer: "https://github.com/00Shawon/trip-hub-server",
      demo: "https://trip-hub-12f28.web.app/"
    },
    {
      title: "The Gallery",
      date: "January 2025",
      description: "Full-stack MERN application enabling artists to showcase portfolios and engage through social features. RESTful API with JWT authentication, MongoDB aggregation pipelines for category filtering, and role-based access control.",
      images: [
        "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=1000"
      ],
      tags: ["React", "Vite", "Firebase", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "CRUD with Authorization: Secure artwork management with user-specific galleries",
        "Advanced Filtering: Server-side search by title/artist and category filters",
        "Social Engagement: Like system using MongoDB $inc for atomic updates",
        "Performance Optimization: Lazy rendering for improved loading"
      ],
      color: "bg-blue-50 text-blue-600",
      type: "FULL STACK",
      challenges: "Tackled Firebase OAuth edge cases, optimized image loading, and prevented race conditions in concurrent interactions using atomic operations.",
      future: "Adding AI-based image tagging, recommendation system, and enhanced social features.",
      github: "https://github.com/00Shawon/the-gallary",
      githubServer: "https://github.com/00Shawon/the-gallery-server",
      demo: "https://the-gallery-156c4.web.app"
    },
    {
      title: "Skill Swap",
      description: "Peer-to-peer skill exchange platform with Firebase OAuth for seamless onboarding. Focused on frontend architecture with reusable components and protected routes.",
      images: [
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
      ],
      tags: ["React", "Firebase", "Tailwind CSS", "Context API"],
      features: [
        "Firebase Auth with Google Sign-in",
        "Protected Routes with React Router",
        "State persistence & Error Handling",
        "Reusable component architecture"
      ],
      color: "bg-purple-50 text-purple-600",
      type: "SPA",
      challenges: "Managing complex state across multiple steps of the exchange process while maintaining clean component structure.",
      future: "Real-time chat integration for users to negotiate swaps.",
      github: "https://github.com/00Shawon/Skill-Swap",
      demo: "https://skill-swap-01.netlify.app/"
    }
  ];

  // Open modal and reset image index
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Navigate images in modal
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <section id="work" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-950 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-blue-50 rounded-full">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Full-stack applications with production-grade architecture
          </p>
        </motion.div>

        {/* Responsive Grid - All Devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg ${
                      project.type === "FULL STACK" ? 'bg-blue-500/95 text-white' : 
                      project.type === "SPA" ? 'bg-purple-500/95 text-white' : 
                      'bg-green-500/95 text-white'
                    }`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Image count indicator */}
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span>{project.images.length}</span>
                    <span className="opacity-70">photos</span>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">{project.title}</h3>
                    {project.date && (
                      <p className="text-sm text-white/90 font-medium drop-shadow">{project.date}</p>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 text-xs font-semibold rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA Buttons - Always Visible */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-lg font-bold text-xs text-center hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-slate-300 dark:border-gray-700 text-slate-700 dark:text-gray-300 py-2.5 rounded-lg font-bold text-xs text-center hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                  </div>

                  {/* View Details Link */}
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="mt-3 text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center justify-center gap-1 py-2 group/link"
                  >
                    View Full Details 
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"></div>
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur rounded-full hover:bg-white transition-all z-30 shadow-lg hover:scale-110"
                aria-label="Close modal"
              >
                <X size={20} className="text-slate-700" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Image Gallery - Left Side (Desktop) / Top (Mobile) */}
                <div className="lg:w-1/2 h-64 lg:h-auto relative bg-slate-900 flex-shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-20"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-20"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full z-20">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Project Badge Overlay */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`text-sm font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-xl ${
                      selectedProject.type === "FULL STACK" ? 'bg-blue-500/95 text-white' : 
                      selectedProject.type === "SPA" ? 'bg-purple-500/95 text-white' : 
                      'bg-green-500/95 text-white'
                    }`}>
                      {selectedProject.type}
                    </span>
                  </div>
                </div>

                {/* Content - Right Side (Desktop) / Bottom (Mobile) */}
                <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto flex-1">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      {selectedProject.date && (
                        <p className="text-slate-600 dark:text-gray-400 font-medium">{selectedProject.date}</p>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                        Overview
                      </h3>
                      <p className="text-slate-700 dark:text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                        Key Features
                      </h3>
                      <div className="space-y-2.5">
                        {selectedProject.features.map((feature, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-gray-800 p-3.5 rounded-xl border border-slate-100 dark:border-gray-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-gray-300 rounded-lg text-sm font-semibold border border-slate-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Future */}
                    {(selectedProject.challenges || selectedProject.future) && (
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProject.challenges && (
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <div className="w-1 h-4 bg-amber-500 rounded-full"></div>
                              Challenges
                            </h3>
                            <p className="text-sm text-slate-700 dark:text-slate-800 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl leading-relaxed">
                              {selectedProject.challenges}
                            </p>
                          </div>
                        )}
                        {selectedProject.future && (
                          <div>
                            <h3 className="text-sm font-bold text-slate-900 dark:text-gray-200 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                              Future Plans
                            </h3>
                            <p className="text-sm text-slate-700 dark:text-slate-800 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl leading-relaxed">
                              {selectedProject.future}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="pt-4 space-y-3">
                      <a 
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white py-3.5 rounded-xl font-bold text-center hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={20} />
                        View Live Demo
                      </a>
                      <div className="flex gap-3">
                        <a 
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border-2 border-slate-300 dark:border-gray-700 text-slate-700 dark:text-gray-300 py-3 rounded-xl font-bold text-center hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                        >
                          <Github size={18} />
                          {selectedProject.githubServer ? "Client Code" : "View Code"}
                        </a>
                        {selectedProject.githubServer && (
                          <a 
                            href={selectedProject.githubServer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border-2 border-slate-300 dark:border-gray-700 text-slate-700 dark:text-gray-300 py-3 rounded-xl font-bold text-center hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                          >
                            <Github size={18} />
                            Server Code
                          </a>
                        )}
                      </div>
                    </div>
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

export default Projects;