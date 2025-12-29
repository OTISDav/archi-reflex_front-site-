import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16"
      >
        <h2 className="text-4xl font-light tracking-wide">
          Une vision architecturale moderne
        </h2>

        <p className="text-lg leading-relaxed opacity-80">
          Notre cabinet conçoit des projets innovants en mettant l’accent sur
          l’élégance, la fonctionnalité et la durabilité.
        </p>
      </motion.div>
    </section>
  );
}
