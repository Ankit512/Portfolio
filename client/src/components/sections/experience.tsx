import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, ArrowDown, ArrowUp } from "lucide-react";

const experiences = [
  {
    company: "Oakyard",
    location: "Vohringen, Germany",
    position: "Product Manager L2 (Volunteer Role)",
    period: "Jul 2023 – Present",
    achievements: [
      "In sustainability tech, developed an AI chatbot that streamlined environmental education",
      "Automated supply chain research using UiPath, reducing manual data processing by 60%",
      "Launched prototype using Microsoft Copilot Studio, reaching 500+ users"
    ]
  },
  {
    company: "LOSUNG360",
    location: "Gurgaon, India",
    position: "Product Owner/Senior Business Analyst",
    period: "Jan 2023 – Oct 2024",
    achievements: [
      "Led development of Shipmaxx.in, an e-commerce logistics platform processing 10k+ daily orders",
      "Improved platform performance by 40% through SQL optimization",
      "Integrated real-time inventory tracking using GraphQL, reducing sync delays by 85%"
    ]
  },
  {
    company: "VAMSTAR",
    location: "Hyderabad, India",
    position: "Business Analyst (Contract Role)",
    period: "Aug 2022 – Dec 2022",
    achievements: [
      "For a healthcare procurement platform, optimized ERP workflows reducing processing time by 30%",
      "Developed comprehensive PRDs and redesigned procurement UX, resulting in 45% increase in user engagement"
    ]
  },
  {
    company: "EQLFIN",
    location: "New Delhi, India",
    position: "Founding Member, Product",
    period: "Apr 2022 – Jul 2022",
    achievements: [
      "Led product transition from location tracking to B2B sales collection platform",
      "Accelerated product advancement by 25% through strategic planning",
      "Enhanced product usability increasing user satisfaction by 30%",
      "Spearheaded GTM initiatives and refined product pitches"
    ]
  },
  {
    company: "EY Global Delivery Services",
    location: "Chennai, India",
    position: "Product Engineering Specialist",
    period: "Jun 2021 – Jul 2022",
    achievements: [
      "Spearheaded Oracle-to-Azure migration for Fortune 500 clients",
      "Built ETL pipelines using T-SQL, processing 2M+ daily transactions",
      "Created real-time BI dashboards that reduced reporting time from days to hours"
    ]
  },
  {
    company: "Think-Digital",
    location: "Chennai, India",
    position: "Co-Founder",
    period: "Jul 2018 – Jan 2021",
    achievements: [
      "Founded a startup enabler platform connecting founders with potential investors",
      "Helped shape brand identities and conducted mock pitch sessions",
      "Facilitated connections between startups and investors",
      "Provided strategic guidance for early-stage startups"
    ]
  }
];

export default function Experience() {
  return (
    <section id="work" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl text-muted-foreground mb-4 font-sans">CAREER ROADMAP</h2>
          <h3 className="heading-lg font-serif">Professional Journey</h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index}>
              <Card className="bg-card/20 border-border">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground font-sans">{exp.position}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4 flex-shrink-0" />
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-purple-600 font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {index < experiences.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  className="flex justify-center my-2"
                >
                  <ArrowUp className="w-5 h-5 text-purple-600/50" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}