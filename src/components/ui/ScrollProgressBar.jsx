import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left"
      style={{
        background: "linear-gradient(90deg, #C9A0A0, #C9A84C, #4d7a4d)",
        scaleX: progress,
      }}
    />
  );
}
