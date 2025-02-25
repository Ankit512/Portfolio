import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="h-screen flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[90vw]"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-neutral-400 mb-4 tracking-tight"
            >
              PRODUCT MANAGER
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-8" //using original styling for h1 here.
            >
              Building intelligent
              <br /> solutions for tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-neutral-400 max-w-2xl" //using original styling for p here.
            >
              Product Manager specializing in AI/ML solutions and enterprise systems, 
              with expertise in developing data-driven products that enhance operational 
              efficiency and user experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Work Section Placeholder */}
      <section id="work" className="h-screen flex items-center bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-bold">Selected Work</h2> {/*Using original heading style*/}
        </div>
      </section>

      {/* About Section Placeholder */}
      <section id="about" className="h-screen flex items-center bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-bold">About</h2> {/*Using original heading style*/}
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="h-screen flex items-center bg-black">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-bold">Contact</h2> {/*Using original heading style*/}
        </div>
      </section>
    </main>
  );
}