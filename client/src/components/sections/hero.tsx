import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[90vw]"
        >
          <h1 className="text-[4rem] md:text-[8rem] font-bold leading-none tracking-tight mb-4">
            Ankit Kumar
          </h1>
          <h2 className="text-2xl md:text-4xl text-neutral-400 max-w-2xl">
            AI Product Manager crafting intelligent solutions for tomorrow.
          </h2>
        </motion.div>
      </div>
    </section>
  );
}