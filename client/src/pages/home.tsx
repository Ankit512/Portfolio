import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { SiSpotify, SiMedium, SiX } from "react-icons/si";
import Blog from "@/components/sections/blog";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import SpotifyPlayer from "@/components/sections/spotify-player";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Hero/About Section */}
      <section id="about" className="h-screen flex items-center">
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

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
      <Blog />

      {/* Spotify Player Section */}
      <SpotifyPlayer />

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
                href="https://twitter.com/utd_ank"
                icon={SiX}
                label="X (Twitter)"
              />
              <SocialLink
                href="https://medium.com/@ankit512.kumar"
                icon={SiMedium}
                label="Medium"
              />
              <SocialLink
                href="mailto:ankit512.kumar@gmail.com"
                icon={Mail}
                label="Email"
              />
              <SocialLink
                href="https://open.spotify.com/user/6oauivyjugmc8akmeekrkeezg"
                icon={SiSpotify}
                label="Spotify"
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