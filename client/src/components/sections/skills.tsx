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
    skills: [
      "SQL",
      "Oracle DB",
      "Azure DB",
      "Power BI",
      "ETL Development",
      "Data Pipeline Design",
      "Database Migration",
      "Data Warehousing"
    ],
  }
];

const aiSkills = {
  title: "AI & Machine Learning",
  skills: ["AI Agents", "Multi Modality", "RAG", "Fine Tuning", "Prompt Engineering"],
};

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
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl text-muted-foreground font-sans">MY SKILLS</h2>
          <h3 className="heading-lg mb-6 font-serif">Building products for humans</h3>
          <p className="body-md max-w-2xl">
            With my startup background, I bring a lean mindset for building products fast. My technical expertise and passion for generative AI and data visualization enable me to develop impactful products utilizing machine learning concepts, generative AI, and data engineering solutions that seamlessly align technical execution with stakeholder objectives, setting me apart in the market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Radar Chart */}
            <div className="h-[340px] bg-card/20 rounded-lg border border-border p-4">
              <ResponsiveRadar
                data={chartData}
                keys={['Score']}
                indexBy="skill"
                maxValue={100}
                margin={{ top: 45, right: 60, bottom: 45, left: 60 }}
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
            </div>

            {/* AI & ML Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/20 border border-border">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3 font-sans">{aiSkills.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {aiSkills.skills.map((skill, i) => (
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
          </motion.div>

          <div className="grid gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/20 border border-border">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-3 font-sans">{category.title}</h3>
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