import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="container px-8 py-6">
        <div className="flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-medium tracking-tighter hover:opacity-60 transition-opacity">
            AK
          </a>
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:opacity-60 transition-opacity"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-bold text-white hover:opacity-60 transition-opacity"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}