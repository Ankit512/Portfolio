import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background to-secondary/5">
      <motion.div 
        className="container px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm Ankit Kumar
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A Product Manager specializing in AI Solutions and Enterprise Systems,
          with expertise in developing data-driven products that enhance operational efficiency
          and user experience across industries.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank">Download CV</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}