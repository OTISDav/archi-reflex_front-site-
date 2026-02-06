import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* Desktop Video */}
      <motion.video
        className="hero-video"
        src="/videos/architecture.mp4"
        poster="/images/archiphoto.jpg"
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 25, ease: "linear" }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
      >
        <h1>ARCHITECTURE</h1>
        <p>Concevoir des espaces durables, élégants et intemporels</p>

        <Link to="/portfolio">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            VOIR NOS PROJETS
          </motion.span>
        </Link>

      </motion.div>

    </section>
  );
}
