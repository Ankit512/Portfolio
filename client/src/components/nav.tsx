import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold tracking-tighter">AK</a>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">ABOUT</a>
          <a href="#experience" className="hover:text-primary transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-primary transition-colors">PROJECTS</a>
          <a href="#skills" className="hover:text-primary transition-colors">SKILLS</a>
          <a href="#contact" className="hover:text-primary transition-colors">CONTACT</a>
        </div>
      </div>
    </motion.nav>
  );
}