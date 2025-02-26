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
    <nav className="fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-sm w-full border-b border-border">
      <div className="container px-6 sm:px-12 py-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
        <div className="flex justify-between items-center" style={{ height: '80px' }}>
          <a 
            href="#" 
            className="group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img 
              src="/images/ankit_memeoji-removebg-preview.png" 
              alt="Ankit's Memoji" 
              className="w-16 h-16 object-contain mix-blend-multiply"
              onError={(e) => {
                console.error('Image failed to load');
                const target = e.target as HTMLImageElement;
                target.src = '/images/project-abstract.svg';
              }}
              style={{
                filter: theme === 'dark' 
                  ? 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.3)' 
                  : 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.02)',
                WebkitFilter: theme === 'dark'
                  ? 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.3)'
                  : 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.02)',
                mixBlendMode: theme === 'dark' ? 'normal' : 'multiply',
                transform: 'translateY(4px)',
                marginTop: '-4px'
              }}
            />
          </a>

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