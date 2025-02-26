import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const menuItems = [
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-sm w-full border-b border-border">
      <div className="container px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#" 
            className="group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/images/ankit-memoji-new.png" 
              alt="Ankit's Memoji" 
              className="w-10 h-10 object-contain mix-blend-normal group-hover:opacity-60 transition-all"
              onError={(e) => {
                console.error('Image failed to load');
                const target = e.target as HTMLImageElement;
                target.src = '/images/project-abstract.svg';
              }}
              style={{
                filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))',
                WebkitFilter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))'
              }}
            />
          </motion.a>

          <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="text-foreground hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}