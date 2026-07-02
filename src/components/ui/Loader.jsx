import { motion } from "framer-motion";
import { personal } from "../../data/portfolio";

export default function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-ivory dark:bg-charcoal-dark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      {/* Animated monogram */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-6"
      >
        <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
          <span className="font-playfair text-3xl text-gold font-bold">
            {personal.firstName.charAt(0)}
          </span>
        </div>
        {/* Spinning ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-t-2 border-rose-dusty"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-playfair text-lg text-taupe-500 dark:text-taupe-300 tracking-widest uppercase"
      >
        {personal.firstName}
      </motion.p>

      {/* Progress bar */}
      <motion.div
        className="mt-8 h-px bg-taupe-200 dark:bg-taupe-600 w-40 overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-rose-dusty via-gold to-sage-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          onAnimationComplete={onDone}
        />
      </motion.div>
    </motion.div>
  );
}
