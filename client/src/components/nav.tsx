import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

export default function Nav() {
  const { theme } = useTheme();
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50">
      <div className="container px-6 h-16 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative group"
        >
          <img 
            src="/images/ankit-memoji.png" 
            alt="Ankit's Memoji" 
            className="w-10 h-10 object-contain transform transition-all duration-300 group-hover:scale-110"
            onError={(e) => {
              console.error('Image failed to load');
              const target = e.target as HTMLImageElement;
              target.src = '/images/project-abstract.svg';
            }}
            style={{
              filter: theme === 'dark' 
                ? 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2)) brightness(1.2)' 
                : 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))',
              mixBlendMode: theme === 'dark' ? 'normal' : 'multiply',
            }}
          />
        </a>

        <div className="flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}