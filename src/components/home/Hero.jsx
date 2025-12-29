import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center bg-neutral-950 text-white overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto px-8"
      >
        <h1 className="text-6xl md:text-8xl font-extralight tracking-[0.2em] mb-8">
          ARCHITECTURE
        </h1>

        <p className="max-w-xl text-lg opacity-70 mb-14">
          Concevoir des espaces durables, élégants et intemporels
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block border border-white px-10 py-5 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition"
        >
          VOIR NOS PROJETS
        </motion.a>
      </motion.div>
    </section>
  );
}
