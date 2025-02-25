import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Random Dad Joke Generator",
    description: "Just for gags, this is a fun little project that generates a random dad joke. Jokes were fetched via an API from icanhazdadjoke.com",
    tech: ["HTML & CSS", "JavaScript"],
    github: "https://github.com/Ankit512/randomdadjoke.github.io",
    live: "https://ankit512.github.io/randomdadjoke.github.io/"
  },
  {
    title: "Object Detection using Trigger Word",
    description: "Develop an application that makes use of Natural Language Processing (NLP) and Digital Image Processing to assist visually impaired individuals using a voice activation and object detection model with audio feedback, which allows the individual to get an audio output of any object present in front of a camera after the system recognizes a trigger word on which it was trained on.",
    tech: ["Python", "CUDA", "Jupyter Notebook", "C++", "YOLO v4"],
    github: "https://github.com/Ankit512/object-detection-using-trigger-word"
  },
  {
    title: "FPS Minigame",
    description: "An FPS (First Person Shooter) game built using C# and Unity 3D. The main design centre of this game is FPS action combat.",
    tech: ["C#", "C++", "Classic ASP", "Unity 3D", "Blender"],
    github: "https://github.com/Ankit512/FPS-Minigame"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl text-neutral-400 mb-4">PERSONAL PROJECTS</h2>
          <h3 className="heading-lg mb-8">Featured Work</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-neutral-900/20 border border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-purple-600/10 text-purple-600 hover:bg-purple-600/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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