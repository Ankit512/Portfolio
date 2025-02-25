import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Oakyard",
    location: "Vohringen, Germany",
    position: "Product Manager L2 (Volunteer Role)",
    period: "Jul 2023 – Present",
    achievements: [
      "Collaborated with IT and sustainability experts to design an AI chatbot framework",
      "Launched prototype chatbot using Microsoft Copilot Studio",
      "Automated supply chain sustainability research using UiPath",
      "Improved chatbot usability through iterative user testing",
      "Created and managed product backlog for internal developers"
    ]
  },
  {
    company: "LOSUNG360",
    location: "Gurgaon, India",
    position: "Product Owner/Senior Business Analyst",
    period: "Jan 2023 – Oct 2024",
    achievements: [
      "Directed successful rollout of Losung OMS application",
      "Enhanced UX by re-structuring SQL database",
      "Orchestrated cross-functional collaboration for A/B testing",
      "Facilitated design and development with wireframes",
      "Collaborated with developers on GraphQL API integration"
    ]
  },
  {
    company: "VAMSTAR",
    location: "Hyderabad, India",
    position: "Business Analyst (Contract Role)",
    period: "Aug 2022 – Dec 2022",
    achievements: [
      "Assembled comprehensive PRDs, BRDs, and Visio diagrams",
      "Engaged in technical analysis of system architecture",
      "Leveraged data analytics to optimize ERP workflows",
      "Redesigned procurement workflow UX"
    ]
  },
  {
    company: "EY Global Delivery Services",
    location: "Chennai, India",
    position: "Product Engineering Specialist",
    period: "Jun 2021 – Jul 2022",
    achievements: [
      "Engineered ETL pipelines using T-SQL for Oracle-to-Azure migration",
      "Streamlined data migration strategies for high-profile clients",
      "Formulated data migration strategy for reporting systems",
      "Created business intelligence dashboards"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
