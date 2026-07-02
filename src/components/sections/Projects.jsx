import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="group relative rounded-3xl overflow-hidden border border-taupe-100 dark:border-taupe-700/40
          bg-white dark:bg-charcoal shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          {/* Overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center gap-4"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center
                    text-white hover:bg-white/40 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center
                    text-white hover:bg-white/40 transition-colors"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Featured badge */}
          {project.featured && (
            <span className="absolute top-3 left-3 bg-gold text-white text-xs font-poppins font-medium
              px-3 py-1 rounded-full shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="font-poppins text-xs tracking-wider text-gold uppercase mb-1 font-medium">
            {project.subtitle}
          </p>
          <h3 className="font-playfair text-xl font-bold text-charcoal dark:text-ivory mb-3 leading-snug">
            {project.title}
          </h3>
          <p className="font-inter text-sm text-taupe-500 dark:text-taupe-300 leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-inter text-xs px-3 py-1 rounded-full
                  bg-taupe-100 dark:bg-taupe-700/40 text-taupe-600 dark:text-taupe-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const all = projects;
  const displayed = showAll ? all : featured;

  return (
    <section id="projects" className="py-28 px-6 bg-warm-white dark:bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects"
          subtitle="A handful of the things I've built — from hackathon wins to passion projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Toggle button */}
        <Reveal>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3.5 rounded-full border border-charcoal dark:border-taupe-300
                text-charcoal dark:text-taupe-200 font-inter font-medium text-sm
                hover:bg-charcoal hover:text-white dark:hover:bg-taupe-200 dark:hover:text-charcoal
                transition-all duration-300"
            >
              {showAll ? "Show Less" : `View All ${all.length} Projects`}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
