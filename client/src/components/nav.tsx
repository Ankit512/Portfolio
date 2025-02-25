import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed w-full z-50 mix-blend-difference">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-medium tracking-tighter hover:opacity-60 transition-opacity">
            AK
          </a>
          <div className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white hover:text-neutral-400 transition-colors"
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
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-black flex items-center justify-center z-40"
          >
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-bold text-white hover:text-neutral-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
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