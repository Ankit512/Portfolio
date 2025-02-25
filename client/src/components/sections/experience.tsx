import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
      "Directed successful rollout of Losung OMS application including shipmaxx.in - a comprehensive shipping and order management platform",
      "Enhanced UX by re-structuring SQL database to improve website responsiveness by 40%",
      "Orchestrated cross-functional collaboration for A/B testing",
      "Facilitated design and development with wireframes",
      "Led integration of GraphQL APIs for real-time SKU management"
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

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl text-neutral-400 mb-4">PROFESSIONAL JOURNEY</h2>
          <h3 className="heading-lg mb-12">Career Timeline</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-purple-600/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-purple-600 transform -translate-y-1/2 md:-translate-x-1/2" />

              <Card className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1 justify-start">
                      <Building2 className="h-4 w-4" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}