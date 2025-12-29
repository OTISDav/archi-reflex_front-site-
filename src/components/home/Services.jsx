import { motion } from "framer-motion";

const services = [
  "Architecture résidentielle",
  "Architecture commerciale",
  "Urbanisme & design",
  "Rénovation & aménagement",
];

export default function Services() {
  return (
    <section className="bg-primary text-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-20 tracking-wide">Nos services</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border border-white/20 p-10 hover:bg-white hover:text-primary transition"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
