import { motion } from "framer-motion";
import { personal, social } from "../../data/portfolio";
import { useTyping } from "../../hooks";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const typed = useTyping(personal.taglines);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-ivory dark:bg-charcoal-dark px-6"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full
            bg-gradient-to-br from-rose-pale/60 to-taupe-100/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full
            bg-gradient-to-tr from-sage-100/50 to-gold-light/30 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10 pt-20">
        {/* Left — text */}
        <div>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-poppins text-xs tracking-[0.3em] uppercase text-gold mb-4 font-medium"
          >
            Welcome to my portfolio
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold
              text-charcoal dark:text-ivory leading-[1.1] mb-4"
          >
            {personal.firstName}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-dusty via-gold to-sage-400">
              {personal.name.split(" ")[1]}
            </span>
          </motion.h1>

          {/* Typing line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="font-inter text-lg text-taupe-500 dark:text-taupe-300">I am </span>
            <span className="font-inter text-lg text-charcoal dark:text-ivory font-medium min-w-[2ch]">
              {typed}
            </span>
            <span className="w-0.5 h-5 bg-gold animate-pulse" />
          </motion.div>

          {/* Bio excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="font-inter text-taupe-500 dark:text-taupe-300 text-base leading-relaxed mb-8 max-w-md"
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3.5 rounded-full bg-charcoal dark:bg-ivory text-ivory dark:text-charcoal
                font-inter font-medium text-sm hover:bg-charcoal-light dark:hover:bg-taupe-100
                transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Discover my work
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-gold text-gold
                font-inter font-medium text-sm hover:bg-gold hover:text-white
                transition-all duration-300 hover:-translate-y-0.5"
            >
              View Resume
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex items-center gap-5 mt-8"
          >
            <span className="font-inter text-xs text-taupe-400 tracking-wider uppercase">Find me on</span>
            <div className="h-px w-8 bg-taupe-200 dark:bg-taupe-600" />
            <a href={social.github} target="_blank" rel="noopener noreferrer"
              className="text-taupe-500 dark:text-taupe-300 hover:text-charcoal dark:hover:text-ivory transition-colors">
              <FaGithub size={18} />
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-taupe-500 dark:text-taupe-300 hover:text-charcoal dark:hover:text-ivory transition-colors">
              <FaLinkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-taupe-200 dark:border-taupe-600"
            />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-10 bg-white dark:bg-charcoal/90 backdrop-blur-sm
                rounded-2xl px-4 py-2 shadow-lg border border-taupe-100 dark:border-taupe-600"
            >
              <p className="font-poppins text-xs font-semibold text-charcoal dark:text-ivory">Full-Stack</p>
              <p className="font-inter text-xs text-taupe-500">Engineer</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 z-10 bg-white dark:bg-charcoal/90 backdrop-blur-sm
                rounded-2xl px-4 py-2 shadow-lg border border-taupe-100 dark:border-taupe-600"
            >
              <p className="font-poppins text-xs font-semibold text-gold">AI</p>
              <p className="font-inter text-xs text-taupe-500">Enthusiast</p>
            </motion.div>

            {/* Avatar image */}
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden
              ring-4 ring-white dark:ring-charcoal ring-offset-4 ring-offset-ivory dark:ring-offset-charcoal-dark
              shadow-2xl"
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-inter text-xs text-taupe-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-taupe-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}
