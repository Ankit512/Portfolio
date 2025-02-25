import { Link } from "wouter";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold">Ankit Kumar</a>
        </Link>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  );
}
