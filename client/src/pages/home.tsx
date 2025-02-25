import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
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

      {/* Featured Project Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-xl text-neutral-400 mb-4">FEATURED PROJECT</h2>
            <h3 className="text-4xl md:text-6xl font-bold">
              Launched Product
            </h3>
          </div>
          <ProjectCard
            title="Shipmaxx.in"
            description="A comprehensive shipping and order management platform. Enhanced UX by re-structuring SQL database to improve website responsiveness by 40%. Led integration of GraphQL APIs for real-time SKU management."
            image="/images/placeholder.jpg"
            link="https://shipmaxx.in"
          />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-xl text-neutral-400 mb-4">WORK EXPERIENCE</h2>
            <h3 className="text-4xl md:text-6xl font-bold">
              Professional Journey
            </h3>
          </div>
          <div className="space-y-32">
            <WorkCard
              title="Oakyard"
              role="Product Manager L2 (Volunteer Role)"
              description="In sustainability tech, developed an AI chatbot that streamlined environmental education. Automated supply chain research using UiPath, reducing manual data processing by 60%. Launched prototype using Microsoft Copilot Studio, reaching 500+ users."
              link="https://oakyard.de"
              period="Jul 2023 – Present"
            />
            <WorkCard
              title="LOSUNG360"
              role="Product Owner/Senior Business Analyst"
              description="Led development of Shipmaxx.in, an e-commerce logistics platform processing 10k+ daily orders. Improved platform performance by 40% through SQL optimization. Integrated real-time inventory tracking using GraphQL, reducing sync delays by 85%."
              link="https://losung360.com"
              period="Jan 2023 – Oct 2024"
            />
            <WorkCard
              title="VAMSTAR"
              role="Business Analyst (Contract Role)"
              description="For a healthcare procurement platform, optimized ERP workflows reducing processing time by 30%. Developed comprehensive PRDs and redesigned procurement UX, resulting in 45% increase in user engagement. Implemented data analytics for supply chain optimization."
              link="https://vamstar.io"
              period="Aug 2022 – Dec 2022"
            />
            <WorkCard
              title="EY Global Delivery Services"
              role="Product Engineering Specialist"
              description="Spearheaded Oracle-to-Azure migration for Fortune 500 clients. Built ETL pipelines using T-SQL, processing 2M+ daily transactions. Created real-time BI dashboards that reduced reporting time from days to hours."
              link="https://www.ey.com"
              period="Jun 2021 – Jul 2022"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

function ProjectCard({ title, description, image, link }: { 
  title: string; 
  description: string; 
  image: string;
  link: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <div className="aspect-[16/9] overflow-hidden mb-8 bg-neutral-900">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="group-hover:text-neutral-400 transition-colors">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
          {title}
          <ExternalLink className="h-8 w-8 inline-block" />
        </h3>
        <p className="text-xl text-neutral-400">{description}</p>
      </a>
    </motion.div>
  );
}

function WorkCard({ title, role, description, link, period }: { 
  title: string;
  role: string;
  description: string;
  link: string;
  period: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="group-hover:text-neutral-400 transition-colors">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
          {title}
          <ExternalLink className="h-8 w-8 inline-block" />
        </h3>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-purple-600">{role}</p>
          <p className="text-lg text-neutral-500">{period}</p>
          <p className="text-xl text-neutral-400 mt-2">{description}</p>
        </div>
      </a>
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
      transition={{ duration: 0.2, ease: "easeOut" }}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </motion.a>
  );
}