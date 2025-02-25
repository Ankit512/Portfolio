import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Data & Analytics",
    skills: ["Tableau", "Power BI", "Excel", "Python", "SQL", "Azure", "Snowflake", "ETL"]
  },
  {
    title: "Product Management",
    skills: ["Business Requirements", "Go-to-Market", "Competitive Analysis", "Stakeholder Management"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Salesforce", "AWS Integrations", "MS Visio", "Figma", "Jira", "UiPath"]
  },
  {
    title: "Development",
    skills: ["JavaScript", "Dataset Management", "Implementation", "Gen AI"]
  },
  {
    title: "Certifications",
    skills: ["Certified Scrum Product Owner (CSPO)", "MS Azure Administrator - AZ 104"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-sm py-1">
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
