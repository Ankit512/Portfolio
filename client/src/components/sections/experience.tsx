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
    <section id="experience" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xl text-neutral-400 mb-4">CAREER ROADMAP</h2>
          <h3 className="heading-lg">Professional Journey</h3>
        </motion.div>

        <div className="relative pl-8">
          {/* Timeline line - made thinner */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-purple-600/20" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot - precisely centered with white border */}
                <div
                  className="absolute left-0 top-8 w-3 h-3 transform -translate-x-1/2"
                  style={{
                    background: 'rgb(147, 51, 234)',
                    borderRadius: '50%',
                    border: '2px solid black',
                  }}
                />

                {/* Date Label */}
                <div className="absolute left-6 top-8 transform -translate-y-1/2">
                  <span className="text-sm text-neutral-400">
                    {exp.period.split('–')[0].trim()}
                  </span>
                </div>

                {/* Content Card */}
                <div className="ml-20">
                  <Card className="bg-neutral-900/20 border border-neutral-800">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <div className="flex flex-wrap items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                            <span className="text-neutral-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}