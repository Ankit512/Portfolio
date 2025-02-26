import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import Blog from "@/components/sections/blog";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="h-screen flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[90vw]"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4 tracking-tight"
            >
              ANKIT KUMAR
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="heading-xl mb-8"
            >
              Product Manager for
              <br />
              <span className="text-purple-600">AI & Data</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl space-y-6"
            >
              <span className="block">
                Currently serving as a Volunteer Product Manager for AI at Oakyard.
              </span>

              <span className="block">
                Former Product Owner at Losung360 and Product Engineering Specialist at EY.
              </span>

              <span className="block">
                With an entrepreneurial spirit and analytical mindset, I've ‍built impactful products utilizing machine learning, generative AI, and data engineering solutions.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section - Added */}
      <Projects />

      {/* Featured Project Section */}
      <section className="section-spacing bg-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl text-muted-foreground mb-4">FEATURED PROJECT</h2>
            <h3 className="heading-lg">Launched Product</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="aspect-[4/3] overflow-hidden bg-card/20 rounded-lg border border-border">
                <img
                  src="/images/projects/shipmaxx-dashboard.png"
                  alt="Shipmaxx.in Platform Interface"
                  className="w-full h-full object-cover object-center rounded-lg hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    console.error('Image failed to load');
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/project-abstract.svg';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <a
                href="https://shipmaxx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group-hover:opacity-60 transition-opacity"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src="/images/logos/shipmaxx.svg" alt="Shipmaxx" className="h-8 w-8" />
                  <h3 className="heading-md flex items-center gap-3">
                    Shipmaxx.in
                    <ExternalLink className="h-6 w-6 inline-block opacity-60" />
                  </h3>
                </div>
                <p className="body-md text-muted-foreground">
                  Shipmaxx is the all-in-one order management software designed to simplify shipping for growing e-commerce businesses.
                  Seamlessly integrating with Shopify and other online marketplaces, Shipmaxx provides a unified interface to efficiently
                  manage multi-channel orders. With over a decade of e-commerce expertise, Shipmaxx partners with more than 10 top courier
                  services, enabling deliveries to over 27,000 pin codes. Streamline your operations, reduce costs, and enhance customer
                  satisfaction with Shipmaxx. Take the next step in scaling your business—start shipping smarter today.
                </p>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-spacing bg-secondary/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-xl text-muted-foreground mb-4">EDUCATION</h2>
            <h3 className="heading-lg mb-12">Academic Background</h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-20">
            <EducationCard
              institution="UCD Michael Smurfit Graduate Business School"
              location="Dublin, Ireland"
              degree="MSc. Management"
              period="Sep 2024 - Sep 2025"
              description="Will be pursuing a Master's in Management, with specialization in strategic business management and innovation. The program will combine theoretical frameworks with practical business applications, focusing on modern business challenges."
              logo="/images/logos/ucd.png"
              coursework={[
                "Business Strategy & Digital Innovation",
                "Project & Operations Management",
                "Digital Marketing & Analytics",
                "Financial Management & Analysis",
                "Leadership & Organizational Behavior",
                "Global Business & Market Entry"
              ]}
              achievements={[
                "Graduated with 2:1",
                "Selected for upcoming Innovation & Entrepreneurship Workshop",
                "Winner of Business Simulation - BMGT43290 Building Sustainable Supply Chain Advantage",
                "Runner-Up of EY Case Study competition 2023"
              ]}
            />

            <EducationCard
              institution="SRM Institute of Science and Technology"
              location="Chennai, India"
              degree="BTech. Computer Science and Engineering"
              period="Jul 2017 - Jul 2021"
              description="Completed Bachelor's in Computer Science with distinction, specializing in software development and artificial intelligence. Developed strong foundation in computational thinking and problem-solving."
              logo="/images/logos/srm.png"
              coursework={[
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Machine Learning & AI",
                "Web Technologies",
                "Software Engineering",
                "Cloud Computing"
              ]}
              achievements={[
                "Graduated with Distinction (78.6%, First Class)",
                "Best Project Award for Final Year Project",
                "Technical Lead of Coding Club",
                "Published research paper on AI applications"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <Blog />

      {/* Contact Section */}
      <section id="contact" className="h-screen flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[90vw]"
          >
            <h1 className="heading-xl mb-8">Let's Talk!</h1>
            <p className="body-lg mb-12">
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-foreground transition-colors"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </motion.a>
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
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="aspect-[16/9] overflow-hidden mb-8 bg-neutral-900">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="group-hover:opacity-60 transition-opacity">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={title} className="h-8 w-8" />
          <h3 className="heading-md flex items-center gap-3">
            {title}
            <ExternalLink className="h-8 w-8 inline-block" />
          </h3>
        </div>
        <p className="body-md">{description}</p>
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
      transition={{ duration: 0.6 }}
      className="group"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="group-hover:opacity-60 transition-opacity">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={title} className="h-8 w-8" />
          <h3 className="heading-md flex items-center gap-3">
            {title}
            <ExternalLink className="h-8 w-8 inline-block" />
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl text-purple-600">{role}</p>
          <p className="text-lg text-muted-foreground">{period}</p>
          <p className="body-md mt-2">{description}</p>
        </div>
      </a>
    </motion.div>
  );
}

function EducationCard({
  institution,
  degree,
  period,
  description,
  logo,
  location,
  coursework,
  achievements
}: {
  institution: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
  location?: string;
  coursework?: string[];
  achievements?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group bg-card/20 rounded-lg p-8 border border-border"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={logo}
          alt={institution}
          className="h-16 w-16 object-contain rounded-lg"
          onError={(e) => {
            console.error('Education logo failed to load:', logo);
            const target = e.target as HTMLImageElement;
            target.src = '/images/project-abstract.svg';
          }}
        />
        <div>
          <h3 className="heading-md">
            {institution}
          </h3>
          <p className="text-muted-foreground">{location}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xl text-purple-600">{degree}</p>
          <p className="text-lg text-muted-foreground">{period}</p>
          <p className="body-md mt-4">{description}</p>
        </div>

        {coursework && (
          <div>
            <h4 className="text-lg font-semibold mb-3">Key Coursework</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {coursework.map((course, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{course}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {achievements && (
          <div>
            <h4 className="text-lg font-semibold mb-3">Achievements</h4>
            <div className="space-y-2">
              {achievements.map((achievement, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}