import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveRadar } from '@nivo/radar';

const skillCategories = [
  {
    title: "Product Strategy",
    skills: ["Roadmapping", "A/B Tests", "Project Management"],
    score: 85
  },
  {
    title: "Product Design",
    skills: ["User Stories", "User Flows", "Wireframes", "Persona Writing"],
    score: 90
  },
  {
    title: "Market & User Research",
    skills: ["Market Analysis", "Experiment Design", "Usability Testing"],
    score: 95
  },
  {
    title: "Analytics & Programming",
    skills: ["Software Development and Management"],
    score: 88
  }
];

const chartData = [
  {
    "category": "Product Strategy",
    "value": 85,
  },
  {
    "category": "Product Design",
    "value": 90,
  },
  {
    "category": "Market & User Research",
    "value": 95,
  },
  {
    "category": "Analytics & Programming",
    "value": 88,
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] bg-neutral-900/20 rounded-lg p-4"
          >
            <ResponsiveRadar
              data={chartData}
              keys={['value']}
              indexBy="category"
              maxValue={100}
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderWidth={2}
              borderColor={{ from: 'color' }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              colors={{ scheme: 'category10' }}
              fillOpacity={0.25}
              blendMode="multiply"
              motionConfig="wobbly"
              theme={{
                background: "transparent",
                text: {
                  fill: "#a3a3a3",
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
          <div className="grid gap-6">
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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <span className="text-purple-600 font-semibold">{category.score}%</span>
                    </div>

                    <div className="mb-4 bg-neutral-800 rounded-full h-2">
                      <motion.div
                        className="bg-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>

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