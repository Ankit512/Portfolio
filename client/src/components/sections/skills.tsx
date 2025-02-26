import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveRadar } from '@nivo/radar';
import { useTheme } from "@/components/theme-provider";

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
    skills: ["SQL", "ETL Development", "Data Pipeline Design", "Database Migration", "Data Warehousing"],
    className: "md:col-span-1"
  },
  {
    title: "AI & Machine Learning",
    skills: ["AI Agents", "Multi Modality", "RAG", "Fine Tuning", "Prompt Engineering"],
    className: "md:col-span-1"
  }
];

const chartData = [
  {
    skill: "Product Strategy",
    Score: 68,
  },
  {
    skill: "Product Design",
    Score: 65,
  },
  {
    skill: "Market Research",
    Score: 65,
  },
  {
    skill: "Data Engineering",
    Score: 60,
  },
  {
    skill: "AI & ML",
    Score: 50,
  }
];

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="section-spacing bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl text-muted-foreground mb-4">MY SKILLS</h2>
          <h3 className="heading-lg mb-6">Building products for humans</h3>
          <p className="body-md max-w-2xl">
            With my startup background, I bring a lean mindset for building products fast. My 
            psychology background uniquely connects me to building products that understand and 
            enhance user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[350px] bg-card/20 rounded-lg border border-border p-4"
          >
            <ResponsiveRadar
              data={chartData}
              keys={['Score']}
              indexBy="skill"
              maxValue={100}
              margin={{ top: 50, right: 60, bottom: 40, left: 60 }}
              borderWidth={2}
              borderColor="rgba(147, 51, 234, 0.5)"
              gridLabelOffset={24}
              dotSize={8}
              dotColor="rgba(147, 51, 234, 0.8)"
              dotBorderWidth={1}
              colors={['rgba(147, 51, 234, 0.3)']}
              fillOpacity={0.4}
              blendMode="normal"
              motionConfig="gentle"
              gridShape="circular"
              theme={{
                background: "transparent",
                text: {
                  fill: theme === 'dark' ? "#ffffff" : "#000000",
                  fontSize: 11,
                },
                tooltip: {
                  container: {
                    background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
                    color: theme === 'dark' ? '#ffffff' : '#000000',
                    fontSize: 12,
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }
                },
                grid: {
                  line: {
                    stroke: theme === 'dark' ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
                    strokeWidth: 1,
                  },
                },
                dots: {
                  text: {
                    fill: theme === 'dark' ? "#ffffff" : "#000000",
                  }
                },
              }}
            />
          </motion.div>

          <div className="grid gap-4">
            {skillCategories.slice(0, 3).map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/20 border border-border">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.slice(3).map((category, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                >
                  <Card className="bg-card/20 border border-border h-full">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
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
        </div>
      </div>
    </section>
  );
}