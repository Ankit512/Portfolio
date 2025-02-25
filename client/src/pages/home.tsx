import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }}
            className="max-w-[90vw]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl text-neutral-400 mb-4 tracking-tight">
                PRODUCT MANAGER
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-8">
                Building for
                <span className="text-purple-600"> humans.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl">
                Currently, I'm a Product Manager for AI & Data at Intuit.
                Former AI-startup founder and Product Management intern at Walmart.
                From my Masters in Engineering Management, I built my technical expertise in
                Generative AI as well as Data Strategy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-xl text-neutral-400 mb-4">SELECTED PROJECTS</h2>
            <h3 className="text-4xl md:text-6xl font-bold">
              I've built and enhanced products at various stages
            </h3>
          </div>
          <div className="space-y-32">
            <ProjectCard
              title="Shipmaxx.in"
              description="A comprehensive shipping and order management platform"
              image="/images/placeholder.jpg"
            />
            <ProjectCard
              title="AI Chatbot Framework"
              description="Sustainability education platform using Microsoft Copilot Studio"
              image="/images/placeholder.jpg"
            />
            <ProjectCard
              title="Supply Chain Analytics"
              description="Automated research system using UiPath"
              image="/images/placeholder.jpg"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className="text-xl text-neutral-400 mb-4">MY SKILLS</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8">
              Building products for humans
            </h3>
            <p className="text-xl text-neutral-400 mb-16">
              With my startup background, I bring a lean mindset for building products fast. 
              My psychology background uniquely connects me to building products that understand 
              and enhance user experiences.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <SkillCard
                title="Product Strategy"
                items={["Roadmapping", "A/B Tests", "Project Management"]}
              />
              <SkillCard
                title="Product Design"
                items={["User Stories", "User Flows", "Wireframes", "Persona Writing"]}
              />
              <SkillCard
                title="Market & User Research"
                items={["Market Analysis", "Experiment Design", "Usability Testing"]}
              />
              <SkillCard
                title="Analytics & Programming"
                items={["Software Development", "Data Management"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-[90vw]">
            <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-8">
              Let's Talk!
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-12">
              I am always open to connect with people in tech, learn more about 
              product management, and discuss navigating this rewarding career path.
            </p>
            <div className="flex gap-6">
              <SocialLink
                href="https://linkedin.com/in/ankitk79"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/_kum.ankit_"
                icon={Instagram}
                label="Instagram"
              />
              <SocialLink
                href="https://github.com/Ankit512"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="mailto:ankit512.kumar@gmail.com"
                icon={Mail}
                label="Email"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="aspect-[16/9] overflow-hidden mb-8 bg-neutral-900">
        <motion.div
          className="w-full h-full bg-cover bg-center image-hover"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-neutral-400 transition-colors">
        {title}
      </h3>
      <p className="text-xl text-neutral-400">{description}</p>
    </motion.div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-8 bg-neutral-900 rounded-lg">
      <h4 className="text-xl font-semibold mb-4 text-white">{title}</h4>
      <ul className="space-y-2 text-neutral-400">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </motion.a>
  );
}