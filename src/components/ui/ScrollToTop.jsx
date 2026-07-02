import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "../../hooks";

export default function ScrollToTop() {
  const visible = useScrolled(400);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full
            bg-white/80 dark:bg-charcoal/80 backdrop-blur-md
            border border-taupe-200 dark:border-taupe-600
            shadow-lg flex items-center justify-center
            hover:scale-110 transition-transform duration-200"
          aria-label="Scroll to top"
        >
          <svg className="w-4 h-4 text-charcoal dark:text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
