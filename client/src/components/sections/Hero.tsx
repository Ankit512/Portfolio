import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX, SiGmail } from "react-icons/si";

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover-opacity"
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </a>
);

export default function Hero() {
  return (
    <section id="hero" className="section-spacing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h1 className="heading-xl">
              Hi, I'm Ankit Kumar
            </h1>
            <p className="body-lg max-w-2xl">
              A Product Manager specializing in AI & Data solutions, passionate about creating impactful digital experiences.
            </p>
          </div>

          <div className="flex gap-6">
            <SocialLink
              href="https://github.com/ankitkumar0506"
              icon={SiGithub}
              label="GitHub"
            />
            <SocialLink
              href="https://linkedin.com/in/ankitkumar0506"
              icon={SiLinkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://twitter.com/utd_ank"
              icon={SiX}
              label="X (Twitter)"
            />
            <SocialLink
              href="mailto:ankit512.kumar@gmail.com"
              icon={SiGmail}
              label="Email"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}