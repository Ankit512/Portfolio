import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }}
          className="max-w-[90vw]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-neutral-400 mb-4 tracking-tight">
              AI PRODUCT MANAGER
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-8">
              Crafting Intelligent Solutions for Tomorrow
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl">
              Product Manager specializing in AI/ML solutions and enterprise systems, 
              with expertise in developing data-driven products that enhance operational 
              efficiency and user experience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}