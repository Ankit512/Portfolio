import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <motion.section
        id="work"
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8">
          <div className="overflow-hidden mb-16">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl font-bold"
            >
              Selected Work
            </motion.h2>
          </div>
          <div className="space-y-32">
            <WorkItem
              title="Shipmaxx.in"
              description="A comprehensive shipping and order management platform"
              image="/images/placeholder.jpg"
              role="Product Owner"
              link="https://shipmaxx.in"
            />
            <WorkItem
              title="AI Chatbot Framework"
              description="Sustainability education platform using Microsoft Copilot Studio"
              image="/images/placeholder.jpg"
              role="Product Manager"
            />
            <WorkItem
              title="Supply Chain Analytics"
              description="Automated research system using UiPath for processing supplier documents"
              image="/images/placeholder.jpg"
              role="Product Manager"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8">
          <div className="overflow-hidden mb-16">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl font-bold"
            >
              About
            </motion.h2>
          </div>
          <div className="max-w-3xl space-y-8">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-xl text-neutral-400"
              >
                Product Manager with a strong focus on AI/ML solutions and enterprise systems,
                bringing 4+ years of experience in launching innovative products.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <p className="text-xl text-neutral-400">
                  Featured Article: "The Rise of Agentic AI" - Exploring the transformative
                  potential of autonomous AI systems.
                </p>
                <a
                  href="https://medium.com/@ankit512.kumar/the-rise-of-agentic-ai-5f1133b4b79c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-white hover:text-neutral-300 transition-colors"
                >
                  Read Article →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="min-h-screen py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8">
          <div className="overflow-hidden mb-16">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-5xl md:text-7xl font-bold"
            >
              Contact
            </motion.h2>
          </div>
          <div className="max-w-3xl space-y-8">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-xl text-neutral-400"
              >
                Let's work together to build something great.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="space-y-4"
              >
                <a
                  href="mailto:ankit512.kumar@gmail.com"
                  className="block text-2xl text-white hover:text-neutral-300 transition-colors"
                >
                  ankit512.kumar@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/ankitk79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl text-white hover:text-neutral-300 transition-colors"
                >
                  LinkedIn →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function WorkItem({ title, description, image, role, link }: {
  title: string;
  description: string;
  image: string;
  role: string;
  link?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="aspect-[16/9] bg-neutral-900 mb-8 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="overflow-hidden">
          <motion.h3 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-neutral-400 transition-colors"
          >
            {title}
          </motion.h3>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="flex items-center gap-2 text-xl text-neutral-400"
          >
            <span>{description}</span>
            {link && <ExternalLink className="h-5 w-5" />}
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="text-lg text-neutral-500 mt-2"
          >
            {role}
          </motion.p>
        </div>
      </a>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="h-screen flex items-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="max-w-[100vw]"
        >
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-xl md:text-2xl text-neutral-400 mb-4"
            >
              AI PRODUCT MANAGER
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-8"
            >
              Building Tomorrow's AI Solutions
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="text-xl md:text-2xl text-neutral-400 max-w-2xl"
            >
              Product Manager specializing in AI/ML solutions and enterprise systems. 
              Crafting data-driven experiences that enhance efficiency and user engagement.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}