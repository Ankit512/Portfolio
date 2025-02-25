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
    <nav className="fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm w-full">
      <div className="container px-4 sm:px-8 py-4">
        <div className="flex items-center gap-4 sm:gap-8">
          <a 
            href="#" 
            className="text-white text-xl sm:text-2xl font-medium tracking-tighter hover:opacity-60 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            AK
          </a>

          <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="text-white hover:opacity-60 transition-opacity whitespace-nowrap"
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