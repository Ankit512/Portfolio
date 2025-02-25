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

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      <nav className="fixed w-full z-50 mix-blend-difference">
        <div className="container mx-auto px-8 py-8 flex justify-between items-center">
          <a href="/" className="text-white text-2xl font-medium tracking-tighter hover:opacity-60 transition-opacity">AK</a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:opacity-60 transition-opacity z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.6, ease: [0.32, 0, 0.67, 0] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[640px] bg-black z-40 flex items-center"
            >
              <div className="container mx-auto px-8">
                <div className="space-y-6">
                  {menuItems.map((item) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <a
                        href={item.href}
                        className="text-[clamp(3rem,10vw,6rem)] font-bold text-white hover:text-neutral-400 transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}