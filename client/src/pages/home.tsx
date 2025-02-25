import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ExternalLink, Building2, Calendar } from "lucide-react";

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
                ANKIT KUMAR
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-8">
                Product Manager for
                <span className="text-purple-600"> AI & Data</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl">
                With my startup background, I bring a lean mindset for building products fast. 
                My technical expertise in Generative AI and Data Strategy enables me to develop 
                impactful products utilizing machine learning, generative AI, and big data solutions. 
                From AI chatbots to automated research systems, I focus on enhancing operational 
                efficiency and user experience.
              </p>
            </motion.div>
          </motion.div>
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
              logo="/images/logos/oakyard.svg"
            />
            <WorkCard
              title="LOSUNG360"
              role="Product Owner/Senior Business Analyst"
              description="Led development of Shipmaxx.in, an e-commerce logistics platform processing 10k+ daily orders. Improved platform performance by 40% through SQL optimization. Integrated real-time inventory tracking using GraphQL, reducing sync delays by 85%."
              link="https://losung360.com"
              period="Jan 2023 – Oct 2024"
              logo="/images/logos/losung360.svg"
            />
            <WorkCard
              title="VAMSTAR"
              role="Business Analyst (Contract Role)"
              description="For a healthcare procurement platform, optimized ERP workflows reducing processing time by 30%. Developed comprehensive PRDs and redesigned procurement UX, resulting in 45% increase in user engagement. Implemented data analytics for supply chain optimization."
              link="https://vamstar.io"
              period="Aug 2022 – Dec 2022"
              logo="/images/logos/vamstar.svg"
            />
            <WorkCard
              title="EY Global Delivery Services"
              role="Product Engineering Specialist"
              description="Spearheaded Oracle-to-Azure migration for Fortune 500 clients. Built ETL pipelines using T-SQL, processing 2M+ daily transactions. Created real-time BI dashboards that reduced reporting time from days to hours."
              link="https://www.ey.com"
              period="Jun 2021 – Jul 2022"
              logo="/images/logos/ey.svg"
            />
          </div>
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
            logo="/images/logos/shipmaxx.svg"
          />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-xl text-neutral-400 mb-4">EDUCATION</h2>
            <h3 className="text-4xl md:text-6xl font-bold">
              Academic Background
            </h3>
          </div>
          <div className="space-y-32">
            <EducationCard
              institution="UCD Michael Smurfit Graduate Business School"
              location="Dublin, Ireland"
              degree="MSc. Management"
              period="Sep 2024"
              description="Currently pursuing Masters in Management with focus on business strategy and innovation. Grade: 2:1"
              logo="/images/logos/ucd.svg"
            />
            <EducationCard
              institution="SRM Institute of Science and Technology"
              location="Chennai, India"
              degree="BTech. Computer Science and Engineering"
              period="Jul 2020"
              description="Completed Bachelor's in Computer Science with distinction. Grade: 78.6% (Equivalent Grade: 1:1)"
              logo="/images/logos/srm.svg"
            />
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

function ProjectCard({ title, description, image, link, logo }: { 
  title: string; 
  description: string; 
  image: string;
  link: string;
  logo: string;
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
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={title} className="h-8 w-8" />
          <h3 className="text-3xl md:text-5xl font-bold flex items-center gap-3">
            {title}
            <ExternalLink className="h-8 w-8 inline-block" />
          </h3>
        </div>
        <p className="text-xl text-neutral-400">{description}</p>
      </a>
    </motion.div>
  );
}

function WorkCard({ title, role, description, link, period, logo }: { 
  title: string;
  role: string;
  description: string;
  link: string;
  period: string;
  logo: string;
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
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={title} className="h-8 w-8" />
          <h3 className="text-3xl md:text-5xl font-bold flex items-center gap-3">
            {title}
            <ExternalLink className="h-8 w-8 inline-block" />
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-purple-600">{role}</p>
          <p className="text-lg text-neutral-500">{period}</p>
          <p className="text-xl text-neutral-400 mt-2">{description}</p>
        </div>
      </a>
    </motion.div>
  );
}

function EducationCard({ institution, degree, period, description, logo, location }: {
  institution: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
  location?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt={institution} className="h-8 w-8" />
        <h3 className="text-3xl md:text-5xl font-bold">
          {institution} {location && `(${location})`}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-purple-600">{degree}</p>
        <p className="text-lg text-neutral-500">{period}</p>
        <p className="text-xl text-neutral-400 mt-2">{description}</p>
      </div>
    </motion.div>
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