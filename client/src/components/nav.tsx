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
              src="/images/ankit memeoji new_1.jpg" 
              alt="Ankit's Memoji" 
              className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-purple-600 transition-all"
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