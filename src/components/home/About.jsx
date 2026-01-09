import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-image" />

      {/* Mot géant */}
      <div className="about-watermark">ARCHITECTURE</div>

      <motion.div
        className="about-panel"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <span className="about-label">L’agence</span>

        <h2 className="about-title">ARCHI-REFLEX</h2>

        <p className="about-text">
          ARCHI-REFLEX est une agence d’architecture regroupant les compétences
          de conception architecturale et urbaine, de suivi, d’ordonnancement,
          de pilotage et de coordination des opérations de maîtrise d’œuvre.
        </p>

        <p className="about-text">
          Située en centre-ville à Clermont-Ferrand, l’agence compte aujourd’hui
          six architectes spécialisés dans le logement, la réhabilitation,
          l’urbanisme et la santé.
        </p>

        <div className="about-footer">
          <span className="about-category">Logements</span>

          <div className="about-socials">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
