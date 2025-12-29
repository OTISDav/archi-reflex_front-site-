import { motion } from "framer-motion";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";

export default function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-white text-black pt-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light tracking-widest mb-20">
          PORTFOLIO
        </h1>

        <PortfolioGrid />
      </div>
    </motion.section>
  );
}
