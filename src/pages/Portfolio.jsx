import { motion } from "framer-motion";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <motion.section
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="portfolio-container">
        <h1 className="portfolio-title"></h1>
        <PortfolioGrid />
      </div>
    </motion.section>
  );
}
