import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Helper for GitHub Pages base URL
const base = "/ankitkumar-portfolio";

export default function Nav() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: `${base}#about`, label: "About" },
    { href: `${base}#work`, label: "Work" },
    { href: `${base}#projects`, label: "Projects" },
    { href: `${base}#spotify`, label: "Spotify" },
    { href: `${base}#contact`, label: "Contact" }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.split('#')[1];

    // If it's the About section, scroll to top
    if (targetId === 'about') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container px-4 sm:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href={`${base}#about`}
            onClick={handleClick}
            className="relative flex items-center"
          >
            <img 
              src={`${base}/images/ankit-memoji-new.png`}
              alt="Ankit's Memoji" 
              className="w-12 h-12 object-contain"
              style={{
                filter: theme === 'dark' 
                  ? 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.3)' 
                  : 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1)) brightness(1.02)',
                mixBlendMode: theme === 'dark' ? 'normal' : 'multiply'
              }}
            />
          </a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
              <div className="container px-4 py-4 flex flex-col gap-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleClick}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}