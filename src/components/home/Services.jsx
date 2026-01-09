import { motion } from "framer-motion";
import "./Services.css";

const services = [
  "Architecture résidentielle",
  "Architecture commerciale",
  "Urbanisme & design",
  "Rénovation & aménagement",
];

export default function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <h2 className="services-title">Nos services</h2>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <span className="service-index">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="service-name">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
