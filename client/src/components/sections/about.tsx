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
                Professional specializing in data analytics, AI, and customer solutions across industries
                like supply chain and healthcare for 4+ years. Expertise in launching compliant, high-impact
                products that enhance user experience, operational efficiency, and stakeholder alignment.
                A pragmatic problem-solver focused on strategic execution, governance standards, and leveraging
                customer insights to drive data-driven measurable outcomes.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
