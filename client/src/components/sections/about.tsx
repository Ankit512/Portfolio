import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg leading-relaxed">
                  Product Manager with a strong focus on AI/ML solutions and enterprise systems, bringing 4+ years 
                  of experience in launching innovative products. Specialized in developing AI-driven applications 
                  that enhance operational efficiency and user experience. Successfully led the development of 
                  AI chatbots for sustainability education and automated research systems using modern tech stack 
                  including Microsoft Copilot Studio and UiPath. Proven track record in translating complex 
                  technical requirements into scalable solutions while ensuring alignment with business objectives 
                  and stakeholder needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Featured Article</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Explore my thoughts on the evolution of AI in my article "The Rise of Agentic AI" - 
                  where I discuss the transformative potential of autonomous AI systems and their impact 
                  on the future of technology and society.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://medium.com/@ankit512.kumar/the-rise-of-agentic-ai-5f1133b4b79c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read Article <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}