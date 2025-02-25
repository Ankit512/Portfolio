import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Product Strategy",
    skills: ["Roadmapping", "A/B Tests", "Project Management"],
  },
  {
    title: "Product Design",
    skills: ["User Stories", "User Flows", "Wireframes", "Persona Writing"],
  },
  {
    title: "Market & User Research",
    skills: ["Market Analysis", "Experiment Design", "Usability Testing"],
  },
  {
    title: "Data Engineering & Analytics",
    skills: ["SQL", "ETL Development", "Data Pipeline Design", "Database Migration", "Data Warehousing"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["AI Agents", "Multi Modality", "RAG", "Fine Tuning", "Prompt Engineering"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl text-neutral-400 mb-4">MY SKILLS</h2>
          <h3 className="heading-lg mb-12">Building products for humans</h3>
          <p className="body-md max-w-2xl">
            With my startup background, I bring a lean mindset for building products fast. My 
            psychology background uniquely connects me to building products that understand and 
            enhance user experiences
          </p>
        </motion.div>

        <div className="grid gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-900/20 border border-neutral-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-sm py-1 hover:bg-purple-600/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}