import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResponsiveRadar } from '@nivo/radar';

const skillCategories = [
  {
    title: "Data & Analytics",
    skills: ["Tableau", "Power BI", "Excel", "Python", "SQL", "Azure", "Snowflake", "ETL"],
    score: 90
  },
  {
    title: "Product Management",
    skills: ["Business Requirements", "Go-to-Market", "Competitive Analysis", "Stakeholder Management"],
    score: 85
  },
  {
    title: "Tools & Platforms",
    skills: ["Salesforce", "AWS Integrations", "MS Visio", "Figma", "Jira", "UiPath"],
    score: 80
  },
  {
    title: "Development",
    skills: ["JavaScript", "Dataset Management", "Implementation", "Gen AI"],
    score: 75
  },
  {
    title: "Certifications",
    skills: ["Certified Scrum Product Owner (CSPO)", "MS Azure Administrator - AZ 104"],
    score: 95
  }
];

const chartData = [
  {
    "skill": "Data & Analytics",
    "value": 90,
  },
  {
    "skill": "Product Management",
    "value": 85,
  },
  {
    "skill": "Tools & Platforms",
    "value": 80,
  },
  {
    "skill": "Development",
    "value": 75,
  },
  {
    "skill": "Certifications",
    "value": 95,
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
          <h2 className="text-xl text-neutral-400 mb-4">EXPERTISE</h2>
          <h3 className="heading-lg mb-12">Skills & Proficiency</h3>
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
              indexBy="skill"
              maxValue={100}
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderColor={{ theme: 'background' }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              colors={{ scheme: 'purple_blue' }}
              blendMode="multiply"
              motionConfig="wobbly"
              theme={{
                background: "transparent",
                textColor: "#a3a3a3",
                fontSize: 11,
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