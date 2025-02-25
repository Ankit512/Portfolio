import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="container px-4 max-w-5xl mx-auto"
      >
        <motion.div variants={item} className="mb-8">
          <h2 className="text-lg font-medium text-muted-foreground mb-4">PRODUCT MANAGER & AI SPECIALIST</h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            Ankit Kumar
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12">
            Crafting AI-driven solutions and enterprise systems that transform user experiences and drive operational excellence.
          </p>
        </motion.div>

        <motion.div variants={item} className="flex gap-6">
          <Button size="lg" asChild className="text-lg">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-lg">
            <a href="/resume.pdf" target="_blank">View Resume</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}