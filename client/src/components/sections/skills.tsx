import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveRadar } from '@nivo/radar';

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

const chartData = [
  {
    skill: "Product Strategy",
    value: 68,
  },
  {
    skill: "Product Design",
    value: 65,
  },
  {
    skill: "Market Research",
    value: 65,
  },
  {
    skill: "Data Engineering",
    value: 60,
  },
  {
    skill: "AI & ML",
    value: 50,
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
          className="mb-8"
        >
          <h2 className="text-xl text-neutral-400 mb-4">MY SKILLS</h2>
          <h3 className="heading-lg mb-6">Building products for humans</h3>
          <p className="body-md max-w-2xl">
            With my startup background, I bring a lean mindset for building products fast. My 
            psychology background uniquely connects me to building products that understand and 
            enhance user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[350px] bg-neutral-900/20 rounded-lg border border-neutral-800 p-4"
          >
            <ResponsiveRadar
              data={chartData}
              keys={['value']}
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
                  fill: "#a3a3a3",
                  fontSize: 11
                },
                grid: {
                  line: {
                    stroke: "#404040",
                    strokeWidth: 1,
                  },
                },
              }}
            />
          </motion.div>

          {/* Skill Cards */}
          <div className="grid gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-900/20 border border-neutral-800">
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
    </section>
  );
}