import { motion } from "framer-motion";
import { personal } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Built" },
  { value: "5+", label: "Hackathons Won" },
  { value: "∞", label: "Cups of Tea" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-warm-white dark:bg-charcoal"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="A Little About My Story"
          subtitle="Engineer, creator, and perpetual learner — building thoughtful software with intention."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center mt-4">
          {/* Left — Image card */}
          <Reveal>
            <div className="relative">
              {/* Glass card behind image */}
              <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl
                bg-gradient-to-br from-rose-pale/60 to-taupe-100/40 dark:from-taupe-700/20 dark:to-sage-900/20
                border border-white/60 dark:border-taupe-600/30" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6
                  bg-white/80 dark:bg-charcoal/80 backdrop-blur-md rounded-2xl p-4
                  border border-white/40 dark:border-taupe-600/30 shadow-lg">
                  <p className="font-playfair text-lg font-bold text-charcoal dark:text-ivory">{personal.name}</p>
                  <p className="font-inter text-sm text-taupe-500 dark:text-taupe-300 mt-0.5">{personal.profession}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <FaMapMarkerAlt size={12} className="text-gold" />
                    <span className="font-inter text-xs text-taupe-500">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Text */}
          <div>
            <Reveal delay={0.1}>
              <h3 className="font-playfair text-3xl font-bold text-charcoal dark:text-ivory mb-6 leading-snug">
                Building digital experiences that{" "}
                <span className="italic text-gold">feel as good</span> as they perform
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-inter text-taupe-600 dark:text-taupe-300 leading-relaxed mb-4">
                {personal.bio}
              </p>
              <p className="font-inter text-taupe-600 dark:text-taupe-300 leading-relaxed mb-8">
                {personal.bioExtended}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 font-inter text-sm text-charcoal dark:text-ivory
                    hover:text-gold transition-colors duration-200"
                >
                  <FaEnvelope size={14} className="text-gold" />
                  {personal.email}
                </a>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.35}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-2xl
                      bg-white dark:bg-charcoal-light/30 border border-taupe-100 dark:border-taupe-700/50
                      hover:border-gold/40 transition-colors duration-300"
                  >
                    <p className="font-playfair text-2xl font-bold text-charcoal dark:text-ivory">{stat.value}</p>
                    <p className="font-inter text-xs text-taupe-500 dark:text-taupe-400 mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
