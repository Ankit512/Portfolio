import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
        </motion.div>
      </div>
    </section>
  );
}