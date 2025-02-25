import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";

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
          <h2 className="text-5xl md:text-7xl font-bold mb-16">Selected Work</h2>
          <div className="space-y-32">
            <WorkItem
              title="Shipmaxx.in"
              description="A comprehensive shipping and order management platform"
              role="Product Owner"
              link="https://shipmaxx.in"
            />
            <WorkItem
              title="AI Chatbot Framework"
              description="Sustainability education platform using Microsoft Copilot Studio"
              role="Product Manager"
            />
            <WorkItem
              title="Supply Chain Analytics"
              description="Automated research system using UiPath for processing supplier documents"
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
          <h2 className="text-5xl md:text-7xl font-bold mb-16">About</h2>
          <div className="max-w-3xl space-y-8 text-xl text-neutral-400">
            <p>
              Product Manager with a strong focus on AI/ML solutions and enterprise systems,
              bringing 4+ years of experience in launching innovative products.
            </p>
            <p>
              Featured Article: "The Rise of Agentic AI" - Exploring the transformative
              potential of autonomous AI systems.
              <a
                href="https://medium.com/@ankit512.kumar/the-rise-of-agentic-ai-5f1133b4b79c"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-white hover:text-neutral-300 transition-colors"
              >
                Read Article →
              </a>
            </p>
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
          <h2 className="text-5xl md:text-7xl font-bold mb-16">Contact</h2>
          <div className="max-w-3xl space-y-8">
            <p className="text-xl text-neutral-400">
              Let's work together to build something great.
            </p>
            <div className="space-y-4">
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
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function WorkItem({ title, description, role, link }: {
  title: string;
  description: string;
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
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-neutral-400 transition-colors">
          {title}
        </h3>
        <p className="text-xl text-neutral-400 mb-2">{description}</p>
        <p className="text-lg text-neutral-500">{role}</p>
      </a>
    </motion.div>
  );
}